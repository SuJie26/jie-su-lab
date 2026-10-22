# SESuS Lab Website

This is a bilingual static website for the Social-Ecological System Sustainability Lab (SESuS Lab) at Xiamen University, led by Professor Jie Su.

The site uses plain HTML, CSS, and JavaScript. It does not require a build system, so it is suitable for GitHub Pages.

## What is included

- `index.html` - the full one-page website structure
- `css/styles.css` - responsive academic visual design
- `js/data.js` - bilingual editable content
- `js/main.js` - language switching, rendering, filters, and search
- `assets/` - homepage, PI, member, and news images extracted from the supplied Word file

## Bilingual editing

Most content is in `js/data.js`.

For bilingual fields, update both the English and Chinese versions:

- English fields usually end in `En`
- Chinese fields usually end in `Zh`
- Interface copy is stored under `window.siteContent.en` and `window.siteContent.zh`

English pages keep their existing URLs. Chinese pages have stable URLs under `/zh/`, including `https://www.sesuslab.com/zh/` and `/zh/people.html`. Language links switch to the equivalent page and preserve its fragment. The URL determines the language, so a search result always opens the language it advertises, regardless of previous browser preferences.

The Chinese pages include the translated content directly in their HTML for visitors and crawlers without JavaScript. Shared scripts still provide filters, navigation and other interactions. Each version has its own canonical URL and reciprocal `en`, `zh-CN` and `x-default` alternates. `sitemap.xml` lists all 16 canonical pages; `robots.txt` links to it.

After editing root HTML templates or shared bilingual content, regenerate the Chinese pages and static navigation, then run the SEO/navigation checks:

```bash
npm install
npm run build
npm test
```

`scripts/build-localized.mjs` reuses the existing rendering scripts and translations; it makes no network requests. Commit the generated HTML and sitemap along with the source edits. GitHub Pages serves these static files directly and requires no build configuration change.

## Update common content

- PI biography: edit `piBio`
- CV: edit `cv`
- Awards: edit `awards`
- Research directions: edit `researchThemes`
- Team members: edit `peopleGroups`
- Projects: edit `projects`
- Publications and book chapters: edit `publications`
- News: edit `news`
- Recruitment text: edit `opportunities`

## Images

Images from the supplied Word document have been copied into `assets/` with descriptive names:

- `hero-sesus-mangrove.png`
- `jie-su.jpeg`
- `huilin-lai.jpeg`
- `yixin-chen.jpeg`
- `qingcheng-liu.jpeg`
- `mingzhe-li.jpeg`
- `yuhang-peng.jpeg`
- `news-ces-youth-conference-*.jpeg`

Replace or rename these files only after updating the matching paths in `js/data.js` or `index.html`.

## Preview locally

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a new GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings > Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root`.
6. Save. GitHub will publish the site at the Pages URL shown in that settings panel.

## Suggested final checks before publishing

- Confirm the official English name: `Social-Ecological System Sustainability Lab` or the preferred final lab name.
- Confirm all member photos can be published publicly.
- Confirm spelling and formatting of all names, roles, project funders, and publication metadata.
- Add DOI links if desired.
- Add university profile, Google Scholar, ORCID, or lab social links if available.
