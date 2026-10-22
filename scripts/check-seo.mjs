import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
const { parseHTML } = await import(process.env.SESUS_DOM_MODULE || 'linkedom');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pages = ['index', 'people', 'research', 'projects', 'publications', 'news', 'join', 'contact'];
const origin = 'https://www.sesuslab.com';
const urls = [];
for (const lang of ['en', 'zh']) for (const page of pages) {
  const file = `${lang === 'zh' ? 'zh/' : ''}${page}.html`;
  const html = fs.readFileSync(path.join(root, file), 'utf8');
  const { window, document } = parseHTML(html);
  const canonical = `${origin}/${lang === 'zh' ? 'zh/' : ''}${page === 'index' ? '' : page + '.html'}`;
  urls.push(canonical);
  assert.equal(document.documentElement.lang, lang === 'zh' ? 'zh-CN' : 'en', file);
  assert.equal(document.querySelector('link[rel="canonical"]').getAttribute('href'), canonical);
  assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1);
  assert.equal(document.querySelectorAll('link[rel="alternate"][hreflang]').length, 3);
  assert.ok(document.querySelector('meta[name="description"]').getAttribute('content').length > 20);
  assert.ok(!/noindex|nofollow/i.test(document.querySelector('meta[name="robots"]')?.getAttribute('content') || ''));
  if (lang === 'zh') {
    assert.match(document.title, /厦门大学可持续社会—生态系统课题组/);
    assert.match(document.querySelector('main').textContent, /[\u4e00-\u9fff]{3}/);
    if (['index','people'].includes(page)) assert.match(document.querySelector('main').textContent, /苏婕/);
    for (const selector of ['[data-pi-bio]', '[data-people]', '[data-projects]', '[data-publications]', '[data-news]', '[data-opportunities]']) {
      const slot = document.querySelector(selector);
      if (slot) assert.ok(slot.textContent.trim().length > 50, `${file}: empty static ${selector}`);
    }
  }
  const before = document.title;
  const location = new URL(canonical);
  const context = vm.createContext({window, document, location, URL, Intl, console, requestAnimationFrame: fn => fn(), localStorage: {getItem: () => lang === 'zh' ? 'en' : 'zh'}});
  window.location = location; window.scrollY = 0;
  const select = document.querySelector('select');
  if (select) Object.defineProperty(select, 'value', {value: 'all', writable: true});
  for (const n of document.querySelectorAll('script[src]')) vm.runInContext(fs.readFileSync(path.join(root, n.getAttribute('src').replace(/^\//, '').split('?')[0]), 'utf8'), context);
  assert.equal(document.title, before, `${file}: title changed at runtime`);
  for (const n of document.querySelectorAll('[data-i18n]')) {
    const key = n.getAttribute('data-i18n');
    if (typeof window.siteContent[lang][key] === 'string') assert.equal(n.textContent, window.siteContent[lang][key], `${file}: untranslated ${key}`);
  }
  assert.equal(document.documentElement.lang, lang === 'zh' ? 'zh-CN' : 'en');
  for (const n of document.querySelectorAll('a[href], img[src], script[src], link[href]')) {
    const value = n.getAttribute(n.hasAttribute('src') ? 'src' : 'href');
    const u = new URL(value, canonical);
    if (u.origin !== origin) continue;
    const localFile = decodeURIComponent(u.pathname).replace(/^\//, '') + (u.pathname.endsWith('/') ? 'index.html' : '');
    assert.ok(fs.existsSync(path.join(root, localFile)), `${file}: broken local URL ${value}`);
    if (n.localName === 'a' && /\.html$/.test(u.pathname) && !n.hasAttribute('data-lang-button')) assert.equal(u.pathname.startsWith('/zh/'), lang === 'zh', `${file}: language lost at ${value}`);
  }
  for (const n of document.querySelectorAll('[data-lang-button]')) {
    const targetLang = n.dataset.langButton;
    assert.equal(n.getAttribute('href'), `/${targetLang === 'zh' ? 'zh/' : ''}${page === 'index' ? '' : page + '.html'}`);
  }
  const toggle = document.querySelector('[data-nav-toggle]');
  toggle.click(); assert.equal(toggle.getAttribute('aria-expanded'), 'true');
  toggle.click(); assert.equal(toggle.getAttribute('aria-expanded'), 'false');
  const search = document.querySelector('[data-publication-search]');
  if (search) {
    search.value = 'zzzz-no-match'; search.dispatchEvent(new window.Event('input'));
    assert.ok(document.querySelector('.empty-state'));
    search.value = ''; search.dispatchEvent(new window.Event('input'));
    assert.ok(document.querySelector('.publication-item'));
  }
  console.log('PASS', file);
}
const sitemap = fs.readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const listed = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
assert.deepEqual([...listed].sort(), [...urls].sort());
assert.equal(new Set(listed).size, 16);
assert.match(fs.readFileSync(path.join(root, 'robots.txt'), 'utf8'), /Sitemap: https:\/\/www\.sesuslab\.com\/sitemap\.xml/);
console.log('PASS sitemap: 16 canonical URLs; URL language, runtime navigation, assets, and filters.');
