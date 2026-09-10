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

The language switch in the navigation lets visitors choose `EN` or `中文`. The selected language is remembered in the browser.

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
