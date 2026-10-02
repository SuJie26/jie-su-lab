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
    document.title = currentLang === "zh" ? "SESuS Lab | 厦门大学" : "SESuS Lab | Xiamen University";
    document.querySelectorAll("[data-i18n]").forEach((node) => {
      node.textContent = t(node.dataset.i18n);
    });
    const searchInput = document.querySelector("[data-publication-search]");
    if (searchInput) searchInput.placeholder = t("publicationSearchPlaceholder");
    langButtons.forEach((button) => { button.classList.toggle("active", button.dataset.langButton === currentLang); button.setAttribute("aria-pressed", String(button.dataset.langButton === currentLang)); });
  }

  function renderPiBio() {
    const target = document.querySelector("[data-pi-bio]");
    if (!target) return;
    target.innerHTML = data.piBio[currentLang].map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  }

  function renderCv() {
    const target = document.querySelector("[data-cv]");
    if (!target) return;
    target.innerHTML = data.cv
      .map(
        (item) => `
          <article class="timeline-item">
            <time>${escapeHtml(item.years)}</time>
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
      .map((entry) => {
        const theme = entry[currentLang];
        return `
          <article class="theme-card">
            <div class="theme-media" ${theme.imageAlt ? "" : 'aria-hidden="true"'}>
              <img src="${escapeHtml(theme.image || "assets/hero-sesus-mangrove-2026.png")}" alt="${escapeHtml(theme.imageAlt || "")}" style="object-position: ${escapeHtml(theme.imagePosition || "50% 50%")}; transform: scale(${escapeHtml(theme.imageScale || "1")}); transform-origin: ${escapeHtml(theme.imagePosition || "50% 50%")};" />
              <span>${escapeHtml(theme.tag)}</span>
            </div>
            <div class="card-body">
              <p class="card-tag">${escapeHtml(theme.tag)}</p>
              <h3>${escapeHtml(theme.title)}</h3>
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
    target.innerHTML = Object.entries(t("projectFilters"))
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
          <article class="project-card">
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
                    <article class="publication-item ${publication.highlight ? "highlight" : ""}">
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

  function renderHomeFeatures() {
    const pi = document.querySelector('[data-home-pi]');
    if (pi) pi.textContent = currentLang === "en" ? data.piBio.en[0].split(". ")[0] + "." : data.piBio.zh[0].split("教授")[0] + "教授。";
    const selected = document.querySelector('[data-selected-publications]');
    if (selected) selected.innerHTML = ['A systematic review of the climatic impacts', 'Meta-analysis of coastal defence options', 'A meta-analysis of the ecological and economic'].map(title => data.publications.find(item => item.text.includes(title))).filter(Boolean).map(item => `<article class="publication-item highlight"><p class="card-tag">${item.year}</p>${publicationMarkup(item, true)}</article>`).join('');
    const news = document.querySelector('[data-home-news]');
    if (news) news.innerHTML = data.news.slice(0,3).map(item => `<article class="news-card"><time>${escapeHtml(localized(item,'date'))}</time><h3><a href="news.html">${escapeHtml(localized(item,'title'))}</a></h3></article>`).join('');
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

  function renderNews() {
    const target = document.querySelector("[data-news]");
    if (!target) return;
    target.innerHTML = data.news
      .map(
        (item) => `
          <article class="news-card wide"${item.anchor ? ` id="${escapeHtml(item.anchor)}"` : ""}>
            <div class="news-overview">
              <div class="news-summary">
                <p class="card-tag">${escapeHtml(localized(item, "category"))}</p>
                <time>${escapeHtml(localized(item, "date"))}</time>
                <h3>${escapeHtml(localized(item, "title"))}</h3>
                <p class="news-excerpt">${escapeHtml(localized(item, "summary"))}</p>
              </div>
              ${item.images.length ? `<img class="news-cover" src="${escapeHtml(item.images[0])}" alt="${escapeHtml(item.imageAlts?.[currentLang]?.[0] || localized(item, "title"))}" />` : ""}
            </div>
            <div>
              <details class="news-details"${item.anchor && window.location.hash === `#${item.anchor}` ? " open" : ""}>
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
            <p>${escapeHtml(localized(item, "body"))}</p>
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
  }

  langButtons.forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.langButton));
  });

  setupPublicationFilters();
  setLanguage(currentLang);
})();
