(function () {
  const content = window.siteContent;
  const data = window.siteData;
  const header = document.querySelector("[data-header]");
  const navToggle = document.querySelector("[data-nav-toggle]");
  const navMenu = document.querySelector("[data-nav-menu]");
  const langButtons = Array.from(document.querySelectorAll("[data-lang-button]"));
  let currentLang = localStorage.getItem("sesus-language") || "en";
  let projectFilter = "all";
  let publicationType = "all";

  function t(key) {
    return content[currentLang][key] || content.en[key] || key;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function localized(item, keyBase) {
    return item[`${keyBase}${currentLang === "zh" ? "Zh" : "En"}`] || item[`${keyBase}En`] || "";
  }

  function setHeaderState() {
    header.classList.toggle("scrolled", window.scrollY > 12);
  }

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    navMenu.classList.toggle("open", !isOpen);
  });

  navMenu.addEventListener("click", (event) => {
    if (event.target.matches("a")) {
      navToggle.setAttribute("aria-expanded", "false");
      navMenu.classList.remove("open");
    }
  });

  window.addEventListener("scroll", setHeaderState, { passive: true });
  setHeaderState();

  function applyStaticText() {
    document.documentElement.lang = currentLang === "zh" ? "zh-CN" : "en";
    const pageKey = { research: "researchPageTitle", people: "peopleTitle", projects: "projectsTitle", publications: "publicationsTitle", news: "newsTitle", join: "joinTitle", contact: "contactTitle" }[document.body.dataset.page];
    const institution = currentLang === "zh" ? "厦门大学" : "Xiamen University";
    const pageTitle = document.body.dataset.page === "people"
      ? (currentLang === "zh" ? "苏婕与团队" : "Jie Su (苏婕) & Team")
      : pageKey ? t(pageKey) : (currentLang === "zh" ? "苏婕 Jie Su" : "Jie Su (苏婕)");
    document.title = `${pageTitle} | SESuS Lab | ${institution}`;
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(node => { node.alt = t(node.dataset.i18nAlt); });
    const ariaLabels = currentLang === "zh" ? { ".nav-shell": "主导航", ".brand": "SESuS Lab 首页", ".language-switch": "语言切换", ".footer-links": "页脚导航", "[data-project-filters]": "项目筛选", ".publication-tools": "论文搜索与筛选", "[data-publication-year]": "按年份筛选论文", ".publication-tabs": "论文类型筛选" } : { ".nav-shell": "Primary navigation", ".brand": "SESuS Lab home", ".language-switch": "Language switch", ".footer-links": "Footer navigation", "[data-project-filters]": "Project filters", ".publication-tools": "Publication search and filter", "[data-publication-year]": "Filter publications by year", ".publication-tabs": "Publication type filter" };
    Object.entries(ariaLabels).forEach(([selector, label]) => { document.querySelector(selector)?.setAttribute("aria-label", label); });
    const searchInput = document.querySelector("[data-publication-search]");
    if (searchInput) searchInput.placeholder = t("publicationSearchPlaceholder");
    langButtons.forEach((button) => { button.classList.toggle("active", button.dataset.langButton === currentLang); button.setAttribute("aria-pressed", String(button.dataset.langButton === currentLang)); });
  }

  function renderPiBio() {
    const target = document.querySelector("[data-pi-bio]");
    if (!target) return;
    target.innerHTML = data.piBio[currentLang].map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  }

  function formatCvPeriod(period) {
    const parts = period.split("-");
    const format = value => {
      if (value === "present") return currentLang === "zh" ? "至今" : "present";
      const [year, month] = value.split(".").map(Number);
      return currentLang === "zh" ? `${year}年${month}月` : new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(new Date(Date.UTC(year, month - 1, 1)));
    };
    return parts.map(format).join(currentLang === "zh" ? "—" : "–");
  }

  function renderCv() {
    const target = document.querySelector("[data-cv]");
    if (!target) return;
    target.innerHTML = data.cv
      .map(
        (item) => `
          <article class="timeline-item">
            <time>${escapeHtml(formatCvPeriod(item.years))}</time>
            <p>${escapeHtml(item[currentLang])}</p>
          </article>
        `
      )
      .join("");
  }

  function renderAwards() {
    const target = document.querySelector("[data-awards]");
    if (!target) return;
    target.innerHTML = data.awards
      .map(
        (item) => `
          <article class="award-item">
            <time>${escapeHtml(item.year)}</time>
            <p>${escapeHtml(item[currentLang])}</p>
          </article>
        `
      )
      .join("");
  }

  function renderThemes() {
    const target = document.querySelector("[data-research-themes]");
    if (!target) return;
    target.innerHTML = data.researchThemes
      .map((entry, index) => {
        const theme = entry[currentLang];
        return `
          <article class="theme-card">
            <div class="theme-media" ${theme.imageAlt ? "" : 'aria-hidden="true"'}>
              <img src="${escapeHtml(theme.image || "assets/hero-sesus-mangrove-2026.png")}" alt="${escapeHtml(theme.imageAlt || "")}" style="object-position: ${escapeHtml(theme.imagePosition || "50% 50%")}; transform: scale(${escapeHtml(theme.imageScale || "1")}); transform-origin: ${escapeHtml(theme.imagePosition || "50% 50%")};" />
              <span>${escapeHtml(theme.tag)}</span>
            </div>
            <div class="card-body">
              <h3><a class="theme-title-link" href="research.html#${["dynamics", "benefits", "planning", "nature-based-solutions"][index]}">${escapeHtml(theme.title)}</a></h3>
              <p>${escapeHtml(theme.summary)}</p>
              <ul>
                ${theme.details.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
              </ul>
            </div>
          </article>
        `;
      })
      .join("");
  }

  function renderPeople() {
    const target = document.querySelector("[data-people]");
    if (!target) return;
    target.innerHTML = data.peopleGroups
      .map(
        (group) => `
          <section class="people-group">
            <h3>${escapeHtml(group[currentLang])}</h3>
            <div class="people-grid">
              ${group.members
                .map(
                  (person) => {
                    const major = localized(person, "major");
                    const direction = localized(person, "direction");
                    const bio = localized(person, "bio");
                    const portraitStyle = person.portrait
                      ? ` style="--portrait-scale: ${person.portrait.scale}; --portrait-origin: ${person.portrait.origin};"`
                      : "";
                    const meta = [
                      major
                        ? `<div><dt>${escapeHtml(t("labels").major)}</dt><dd>${escapeHtml(major)}</dd></div>`
                        : "",
                      direction
                        ? `<div><dt>${escapeHtml(t("labels").direction)}</dt><dd>${escapeHtml(direction)}</dd></div>`
                        : ""
                    ].join("");

                    return `
                      <article class="person-card">
                        <div class="person-photo-frame">
                          <img class="person-photo ${person.image.includes("zelong-ma") ? "portrait-rotated" : ""}" src="${escapeHtml(person.image)}" alt="${escapeHtml(localized(person, "name"))}"${portraitStyle} />
                        </div>
                        <div>
                          <h4>${escapeHtml(localized(person, "name"))}</h4>
                          <p class="role">${escapeHtml(localized(person, "role"))}</p>
                          ${meta ? `<dl class="person-meta">${meta}</dl>` : ""}
                          ${bio ? `<details class="person-details"><summary>${escapeHtml(t("labels").viewProfile)}</summary><p>${escapeHtml(bio)}</p></details>` : ""}
                        </div>
                      </article>
                    `;
                  }
                )
                .join("")}
            </div>
          </section>
        `
      )
      .join("");
  }

  function renderProjectFilters() {
    const target = document.querySelector("[data-project-filters]");
    if (!target) return;
    target.innerHTML = Object.entries(t("projectFilters")).filter(([key]) => key === "all" || data.projects.some(project => project.category === key))
      .map(
        ([key, label]) => `
          <button class="chip ${key === projectFilter ? "active" : ""}" type="button" data-project-filter="${escapeHtml(key)}">
            ${escapeHtml(label)}
          </button>
        `
      )
      .join("");
    target.querySelectorAll("[data-project-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        projectFilter = button.dataset.projectFilter;
        renderProjects();
        renderProjectFilters();
      });
    });
  }

  function renderProjects() {
    const target = document.querySelector("[data-projects]");
    if (!target) return;
    const projects = projectFilter === "all" ? data.projects : data.projects.filter((project) => project.category === projectFilter);
    target.innerHTML = projects
      .map(
        (project) => `
          <article class="project-card" id="project-${escapeHtml(project.category)}">
            <p class="card-tag">${escapeHtml(t("projectFilters")[project.category])}</p>
            <h3>${escapeHtml(localized(project, "title"))}</h3>
            <dl>
              <div>
                <dt>${escapeHtml(t("labels").period)}</dt>
                <dd>${escapeHtml(project.period)}</dd>
              </div>
              <div>
                <dt>${escapeHtml(t("labels").role)}</dt>
                <dd>${escapeHtml(localized(project, "role"))}</dd>
              </div>
              <div>
                <dt>${escapeHtml(t("labels").funder)}</dt>
                <dd>${escapeHtml(localized(project, "funder"))}</dd>
              </div>
            </dl>
            ${localized(project, "summary") ? `<details class="project-details"><summary>${escapeHtml(t("labels").viewProject)}</summary><p>${escapeHtml(localized(project, "summary"))}</p></details>` : ""}
          </article>
        `
      )
      .join("");
  }

  function setupPublicationYearSelect() {
    const select = document.querySelector("[data-publication-year]");
    if (!select) return;
    const selectedValue = select.value || "all";
    const years = Array.from(new Set(data.publications.map((publication) => publication.year))).sort((a, b) => b - a);
    select.innerHTML = `<option value="all">${escapeHtml(t("allYears"))}</option>${years
      .map((year) => `<option value="${year}">${year}</option>`)
      .join("")}`;
    select.value = years.includes(Number(selectedValue)) ? selectedValue : "all";
  }

  function renderPublications() {
    const target = document.querySelector("[data-publications]");
    const searchInput = document.querySelector("[data-publication-search]");
    const yearSelect = document.querySelector("[data-publication-year]");
    if (!target || !searchInput || !yearSelect) return;
    const searchValue = searchInput.value.trim().toLowerCase();
    const selectedYear = yearSelect.value;
    const filtered = data.publications.filter((publication) => {
      const matchesType = publicationType === "all" || publication.type === publicationType;
      const matchesYear = selectedYear === "all" || String(publication.year) === selectedYear;
      const matchesSearch = !searchValue || publication.text.toLowerCase().includes(searchValue);
      return matchesType && matchesYear && matchesSearch;
    });

    if (!filtered.length) {
      target.innerHTML = `<p class="empty-state">${escapeHtml(t("noPublications"))}</p>`;
      return;
    }

    const grouped = filtered.reduce((acc, publication) => {
      acc[publication.year] = acc[publication.year] || [];
      acc[publication.year].push(publication);
      return acc;
    }, {});

    target.innerHTML = Object.keys(grouped)
      .sort((a, b) => Number(b) - Number(a))
      .map(
        (year) => `
          <section class="publication-year" aria-label="${escapeHtml(year)}">
            <h3>${year}</h3>
            <div>
              ${grouped[year]
                .map(
                  (publication) => `
                    <article id="${publicationAnchor(publication)}" class="publication-item ${publication.highlight ? "highlight" : ""}">
                      ${publicationMarkup(publication)}
                    </article>
                  `
                )
                .join("")}
            </div>
          </section>
        `
      )
      .join("");
  }

  function formatPublication(text) {
    return escapeHtml(text).replace(/Su, J\.(\*)?/g, "<strong>$&</strong>");
  }

  function publicationMarkup(publication, compact = false) {
    const match = publication.text.match(/^(.*?\(\d{4}\)\. )(.+?)(\. [A-Z].*)$/);
    const citation = match ? `<p class="publication-authors">${formatPublication(match[1])}</p><h4 class="publication-title">${escapeHtml(match[2])}.</h4><p class="publication-journal">${escapeHtml(match[3].slice(2))}</p>` : `<p>${formatPublication(publication.text)}</p>`;
    return (compact ? citation.replace(/<p class="publication-authors">.*?<\/p>/, "") : citation) + (publication.url ? `<a class="doi-link" href="${escapeHtml(publication.url)}" target="_blank" rel="noreferrer">${publication.url.includes('doi.org') ? 'DOI' : (currentLang === 'zh' ? '原文' : 'Article')} ↗<span class="sr-only">: ${escapeHtml(publication.text)}</span></a>` : '');
  }

  function publicationAnchor(publication) {
    const key = publication.url ? publication.url.replace("https://doi.org/", "") : `entry-${data.publications.indexOf(publication)}`;
    return `publication-${key.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/-$/, "")}`;
  }

  function renderResearchConnections() {
    document.querySelectorAll("[data-related-projects]").forEach(target => {
      const projects = target.dataset.relatedProjects.split(",").map(category => data.projects.find(project => project.category === category)).filter(Boolean);
      target.innerHTML = `<ul class="research-reference-list">${projects.map(project => `<li><span class="research-reference-meta">${escapeHtml(project.period)} · ${escapeHtml(localized(project, "funder"))}</span><a href="projects.html#project-${escapeHtml(project.category)}">${escapeHtml(localized(project, "title"))}</a></li>`).join("")}</ul>`;
    });
    document.querySelectorAll("[data-related-publications]").forEach(target => {
      const publications = target.dataset.relatedPublications.split("|").map(doi => data.publications.find(publication => publication.url?.endsWith(doi))).filter(Boolean);
      target.innerHTML = `<ul class="research-reference-list">${publications.map(publication => {
        const match = publication.text.match(/^(.*?\(\d{4}\)\. )(.+?)(\. [A-Z].*)$/);
        const title = match ? match[2] : publication.text;
        const journal = match ? match[3].slice(2) : "";
        return `<li><span class="research-reference-meta">${publication.year} · ${escapeHtml(journal)}</span><a href="publications.html#${publicationAnchor(publication)}">${escapeHtml(title)}</a><a class="research-doi" href="${escapeHtml(publication.url)}" target="_blank" rel="noopener noreferrer" aria-label="DOI: ${escapeHtml(title)}">DOI ↗</a></li>`;
      }).join("")}</ul>`;
    });
    document.querySelector(".research-contents")?.setAttribute("aria-label", t("researchContentsLabel"));
  }

  function renderHomeFeatures() {
    const pi = document.querySelector('[data-home-pi]');
    if (pi) pi.textContent = t("homePi");
    const selected = document.querySelector('[data-selected-publications]');
    if (selected) selected.innerHTML = ['10.1038/s43016-026-01410-4', '10.1038/s41467-024-46970-w', '10.1038/s41467-021-25349-1'].map(doi => data.publications.find(item => item.url?.endsWith(doi))).filter(Boolean).map(item => `<article class="publication-item highlight"><p class="card-tag">${item.year}</p>${publicationMarkup(item, true)}</article>`).join('');
    const news = document.querySelector('[data-home-news]');
    if (news) news.innerHTML = data.news.slice(0,3).map((item, index) => `<article class="news-card"><time>${escapeHtml(localized(item,'date'))}</time><h3><a href="news.html#${escapeHtml(newsAnchor(item, index))}">${escapeHtml(localized(item,'title'))}</a></h3></article>`).join('');
  }

  function setupPublicationFilters() {
    const searchInput = document.querySelector("[data-publication-search]");
    const yearSelect = document.querySelector("[data-publication-year]");
    if (!searchInput || !yearSelect) return;
    searchInput.addEventListener("input", renderPublications);
    yearSelect.addEventListener("change", renderPublications);
    document.querySelectorAll("[data-publication-type]").forEach((button) => {
      button.addEventListener("click", () => {
        publicationType = button.dataset.publicationType;
        document.querySelectorAll("[data-publication-type]").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        renderPublications();
      });
    });
  }

  function newsAnchor(item, index) {
    return item.anchor || `news-${index + 1}`;
  }

  function renderNews() {
    const target = document.querySelector("[data-news]");
    if (!target) return;
    target.innerHTML = data.news
      .map(
        (item, index) => `
          <article class="news-card wide" id="${escapeHtml(newsAnchor(item, index))}">
            <div class="news-overview">
              <div class="news-summary">
                <p class="card-tag">${escapeHtml(localized(item, "category"))}</p>
                <time>${localized(item, "dateLabel") ? `${escapeHtml(localized(item, "dateLabel"))}: ` : ""}${escapeHtml(localized(item, "date"))}</time>
                <h3>${escapeHtml(localized(item, "title"))}</h3>
                <p class="news-excerpt">${escapeHtml(localized(item, "summary"))}</p>
              </div>
              ${item.images.length ? `<img class="news-cover" src="${escapeHtml(item.images[0])}" alt="${escapeHtml(item.imageAlts?.[currentLang]?.[0] || localized(item, "title"))}" />` : ""}
            </div>
            <div>
              <details class="news-details"${window.location.hash === `#${newsAnchor(item, index)}` ? " open" : ""}>
                <summary>${escapeHtml(t("labels").viewNews)}</summary>
                <p>${escapeHtml(localized(item, "summary"))}</p>
                ${item.images.length ? `<div class="news-photos ${escapeHtml(item.galleryClass || "")}">${item.images.map((src, index) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(item.imageAlts?.[currentLang]?.[index] || localized(item, "title"))}" />`).join("")}</div>` : ""}
              </details>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderOpportunities() {
    const target = document.querySelector("[data-opportunities]");
    if (!target) return;
    target.innerHTML = data.opportunities
      .map(
        (item) => `
          <article class="opportunity-card">
            <h3>${escapeHtml(localized(item, "title"))}</h3>
            <p>${item.titleEn === "PhD students"
              ? escapeHtml(localized(item, "body")).replace(
                  currentLang === "zh" ? "奖学金" : "scholarships",
                  '<a class="text-link" href="https://admissions.xmu.edu.cn/Admissions/Doctoral_students.htm" target="_blank" rel="noopener noreferrer">' +
                    (currentLang === "zh" ? "奖学金" : "scholarships") + "</a>"
                )
              : escapeHtml(localized(item, "body"))}</p>
            <div class="materials">
              <strong>${escapeHtml(t("labels").materials)}</strong>
              <span>${escapeHtml(localized(item, "materials"))}</span>
            </div>
          </article>
        `
      )
      .join("");
  }

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("sesus-language", lang);
    applyStaticText();
    renderPiBio();
    renderHomeFeatures();
    renderCv();
    renderAwards();
    renderThemes();
    renderPeople();
    renderProjectFilters();
    renderProjects();
    setupPublicationYearSelect();
    renderPublications();
    renderNews();
    renderOpportunities();
    renderResearchConnections();
    revealLinkedContent();
  }

  function revealLinkedContent() {
    if (!location.hash || !["projects", "publications"].includes(document.body.dataset.page)) return;
    const linked = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!linked) return;
    linked.querySelector("details")?.setAttribute("open", "");
    requestAnimationFrame(() => linked.scrollIntoView({ block: "start" }));
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langButton));
  });

  setupPublicationFilters();
  setLanguage(currentLang);
  window.addEventListener("hashchange", revealLinkedContent);
})();
