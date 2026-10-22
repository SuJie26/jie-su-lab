import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
const { parseHTML } = await import(process.env.SESUS_DOM_MODULE || 'linkedom');
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const origin = 'https://www.sesuslab.com';
const pages = ['index', 'people', 'research', 'projects', 'publications', 'news', 'join', 'contact'];
const lab = '厦门大学可持续社会—生态系统课题组';
const metadata = {
  index: ['苏婕 | ' + lab + '（SESuS Lab）', '厦门大学苏婕教授负责的可持续社会—生态系统课题组（SESuS Lab），研究海岸带社会—生态系统、红树林保护修复、生态经济学与气候变化适应。了解研究方向、团队成员、科研成果及招生信息。'],
  people: ['苏婕与团队 | ' + lab, '了解厦门大学环境与生态学院、海洋与海岸带发展研究院苏婕教授，以及可持续社会—生态系统课题组（SESuS Lab）的团队成员与授课课程。'],
  research: ['研究方向 | ' + lab, '厦门大学可持续社会—生态系统课题组的研究：海岸带社会—生态系统动态、耦合系统与反馈、保护与修复规划，以及基于自然的解决方案。'],
  projects: ['科研项目 | ' + lab, '厦门大学可持续社会—生态系统课题组的科研项目，聚焦红树林修复、社会—生态系统、种养耦合与生态系统服务。'],
  publications: ['科研成果 | ' + lab, '浏览厦门大学可持续社会—生态系统课题组的学术论文与书籍章节，涵盖生态保护修复、气候适应、生态经济学与可持续管理。'],
  news: ['课题组动态 | ' + lab, '厦门大学可持续社会—生态系统课题组的最新动态，包括苏婕教授与团队成员的学术交流、科研活动和实地研究。'],
  join: ['招生招聘 | ' + lab, '了解厦门大学苏婕教授可持续社会—生态系统课题组的招生、招聘与合作机会，以及申请材料和联系方式。'],
  contact: ['联系我们 | ' + lab, '联系厦门大学苏婕教授及可持续社会—生态系统课题组，咨询招生、科研合作与学术交流事宜。']
};
const sources = Object.fromEntries(pages.map(p => [p, fs.readFileSync(path.join(root, p + '.html'), 'utf8')]));
const url = (p, lang) => `${origin}/${lang === 'zh' ? 'zh/' : ''}${p === 'index' ? '' : p + '.html'}`;

function makePage(p, lang) {
  const { window, document } = parseHTML(sources[p]);
  document.querySelectorAll('[data-i-18n]').forEach(n => n.remove());
  document.documentElement.dataset.siteLanguage = lang;
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  const canonical = url(p, lang);
  if (lang === 'zh') {
    document.title = metadata[p][0];
    document.querySelector('meta[name="description"]').setAttribute('content', metadata[p][1]);
  }
  function meta(property, value) {
    let n = document.querySelector(`meta[property="${property}"]`);
    if (!n) { n = document.createElement('meta'); n.setAttribute('property', property); document.head.append(n); }
    n.setAttribute('content', value);
  }
  meta('og:title', document.title);
  meta('og:description', document.querySelector('meta[name="description"]').getAttribute('content'));
  meta('og:type', 'website');
  meta('og:url', canonical);
  meta('og:locale', lang === 'zh' ? 'zh_CN' : 'en_US');
  document.querySelector('link[rel="canonical"]').setAttribute('href', canonical);
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(n => n.remove());
  for (const [code, locale] of [['en', 'en'], ['zh-CN', 'zh'], ['x-default', 'en']]) {
    const n = document.createElement('link');
    n.setAttribute('rel', 'alternate'); n.setAttribute('hreflang', code); n.setAttribute('href', url(p, locale)); document.head.append(n);
  }
  const scripts = [...document.querySelectorAll('script[src]')].map(n => n.getAttribute('src').replace(/^\//, '').split('?')[0]);
  const location = new URL(canonical);
  const context = vm.createContext({window, document, location, URL, Intl, console, requestAnimationFrame: fn => fn()});
  window.location = location;
  window.scrollY = 0;
  // The render is a DOM-only build, without browser access or network requests.
  const select = document.querySelector('select');
  if (select) Object.defineProperty(select, 'value', {value: 'all', writable: true});
  for (const script of scripts) {
    if (lang === 'en' && script === 'js/main.js') continue;
    vm.runInContext(fs.readFileSync(path.join(root, script), 'utf8'), context, {filename: script});
  }
  if (p === 'index') {
    const area = document.querySelector('.home-pi [data-home-pi]');
    if (!document.querySelector('[data-i18n="aboutCopy"]')) {
      const intro = document.createElement('p'); intro.setAttribute('data-i18n', 'aboutCopy'); area.after(intro);
    }
  }
  document.querySelectorAll('[data-i18n]').forEach(n => {
    const value = window.siteContent[lang][n.getAttribute('data-i18n')];
    if (typeof value === 'string') n.textContent = value;
  });
  document.querySelectorAll('[src], [href]').forEach(n => {
    for (const a of ['src', 'href']) {
      const value = n.getAttribute(a);
      if (!value) continue;
      if (/^(?:assets|css|js)\//.test(value)) n.setAttribute(a, '/' + value);
      const pageLink = value.match(/^\/?(?:zh\/)?((?:index|people|research|projects|publications|news|join|contact)\.html(?:[?#].*)?)$/);
      if (n.localName === 'a' && !n.hasAttribute('data-lang-button') && pageLink) n.setAttribute(a, `/${lang === 'zh' ? 'zh/' : ''}${pageLink[1]}`);
    }
  });
  document.querySelectorAll('script[src]').forEach(n => {
    if (/\/js\/(?:main|shell)\.js/.test(n.getAttribute('src'))) n.setAttribute('src', n.getAttribute('src').split('?')[0] + '?v=20261022-seo');
  });
  document.querySelector('link[rel="stylesheet"]').setAttribute('href', '/css/styles.css?v=20261022-seo');
  document.querySelectorAll('[data-lang-button]').forEach(n => {
    const active = n.dataset.langButton === lang;
    n.classList.toggle('active', active);
    if (active) n.setAttribute('aria-current', 'true'); else n.removeAttribute('aria-current');
  });
  return '<!doctype html>\n' + document.documentElement.outerHTML + '\n';
}

fs.mkdirSync(path.join(root, 'zh'), {recursive: true});
for (const p of pages) {
  fs.writeFileSync(path.join(root, p + '.html'), makePage(p, 'en'));
  fs.writeFileSync(path.join(root, 'zh', p + '.html'), makePage(p, 'zh'));
}
const urls = pages.flatMap(p => ['en', 'zh'].map(lang => `  <url><loc>${url(p, lang)}</loc></url>`));
fs.writeFileSync(path.join(root, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(root, 'robots.txt'), 'User-agent: *\nAllow: /\n\nSitemap: https://www.sesuslab.com/sitemap.xml\n');
console.log('Built 8 English entries and 8 static Chinese pages.');
