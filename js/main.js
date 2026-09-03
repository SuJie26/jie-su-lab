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
    document.querySelector("[data-publication-search]").placeholder = t("publicationSearchPlaceholder");
    langButtons.forEach((button) => button.classList.toggle("active", button.dataset.langButton === currentLang));
  }

  function renderPiBio() {
    const target = document.querySelector("[data-pi-bio]");
    target.innerHTML = data.piBio[currentLang].map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join("");
  }

  function renderCv() {
    const target = document.querySelector("[data-cv]");
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
    target.innerHTML = data.researchThemes
      .map((entry) => {
        const theme = entry[currentLang];
        return `
          <article class="theme-card">
            <div class="media-placeholder" aria-hidden="true">
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
    target.innerHTML = data.peopleGroups
      .map(
        (group) => `
          <section class="people-group">
            <h3>${escapeHtml(group[currentLang])}</h3>
            <div class="people-grid">
              ${group.members
                .map(
                  (person) => `
                    <article class="person-card">
                      <img class="person-photo" src="${escapeHtml(person.image)}" alt="${escapeHtml(localized(person, "name"))}" />
                      <div>
                        <h4>${escapeHtml(localized(person, "name"))}</h4>
                        <p class="role">${escapeHtml(localized(person, "role"))}</p>
                        <dl class="person-meta">
                          <div>
                            <dt>${escapeHtml(t("labels").major)}</dt>
                            <dd>${escapeHtml(localized(person, "major"))}</dd>
                          </div>
                          <div>
                            <dt>${escapeHtml(t("labels").direction)}</dt>
                            <dd>${escapeHtml(localized(person, "direction"))}</dd>
                          </div>
                        </dl>
                      </div>
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

  function renderProjectFilters() {
    const target = document.querySelector("[data-project-filters]");
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
          </article>
        `
      )
      .join("");
  }

  function setupPublicationYearSelect() {
    const select = document.querySelector("[data-publication-year]");
    const selectedValue = select.value || "all";
    const years = Array.from(new Set(data.publications.map((publication) => publication.year))).sort((a, b) => b - a);
    select.innerHTML = `<option value="all">${escapeHtml(t("allYears"))}</option>${years
      .map((year) => `<option value="${year}">${year}</option>`)
      .join("")}`;
    select.value = years.includes(Number(selectedValue)) ? selectedValue : "all";
  }

  function renderPublications() {
    const target = document.querySelector("[data-publications]");
    const searchValue = document.querySelector("[data-publication-search]").value.trim().toLowerCase();
    const selectedYear = document.querySelector("[data-publication-year]").value;
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
                      <p>${escapeHtml(publication.text)}</p>
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

  function setupPublicationFilters() {
    document.querySelector("[data-publication-search]").addEventListener("input", renderPublications);
    document.querySelector("[data-publication-year]").addEventListener("change", renderPublications);
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
    target.innerHTML = data.news
      .map(
        (item) => `
          <article class="news-card wide">
            <div class="news-photos">
              ${item.images.map((src) => `<img src="${escapeHtml(src)}" alt="${escapeHtml(localized(item, "title"))}" />`).join("")}
            </div>
            <div>
              <p class="card-tag">${escapeHtml(localized(item, "category"))}</p>
              <time>${escapeHtml(localized(item, "date"))}</time>
              <h3>${escapeHtml(localized(item, "title"))}</h3>
              <p>${escapeHtml(localized(item, "summary"))}</p>
            </div>
          </article>
        `
      )
      .join("");
  }

  function renderOpportunities() {
    const target = document.querySelector("[data-opportunities]");
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
            <a class="text-link" href="mailto:jiesu@xmu.edu.cn">${escapeHtml(t("labels").applyByEmail)}: jiesu@xmu.edu.cn</a>
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
