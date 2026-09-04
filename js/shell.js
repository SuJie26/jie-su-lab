(function () {
  const page = document.body.dataset.page || "home";
  const navItems = [
    ["about", "index.html#about", "navAbout"],
    ["research", "index.html#research", "navResearch"],
    ["people", "people.html", "navPeople"],
    ["projects", "projects.html", "navProjects"],
    ["publications", "publications.html", "navPublications"],
    ["news", "news.html", "navNews"],
    ["join", "join.html", "navJoin"],
    ["contact", "contact.html", "navContact"]
  ];

  const navLinks = navItems
    .map(
      ([key, href, label]) =>
        `<a href="${href}" data-i18n="${label}"${page === key ? ' class="active" aria-current="page"' : ""}>${label}</a>`
    )
    .join("");

  document.querySelector("[data-site-header]").innerHTML = `
    <header class="site-header" data-header>
      <nav class="nav-shell" aria-label="Primary navigation">
        <a class="brand" href="index.html" aria-label="SESuS Lab home">
          <span class="brand-mark">SESuS</span>
          <span><strong>SESuS Lab</strong><small data-i18n="brandSubtitle">Xiamen University</small></span>
        </a>
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-menu" data-nav-toggle>
          <span></span><span></span><span></span><span class="sr-only" data-i18n="openNav">Open navigation</span>
        </button>
        <div class="nav-links" id="site-menu" data-nav-menu>${navLinks}</div>
        <div class="language-switch" aria-label="Language switch">
          <button class="lang-button active" type="button" data-lang-button="en">EN</button>
          <button class="lang-button" type="button" data-lang-button="zh">中文</button>
        </div>
      </nav>
    </header>`;

  document.querySelector("[data-site-footer]").innerHTML = `
    <footer class="site-footer">
      <div class="container footer-grid">
        <div><strong>SESuS Lab</strong><p data-i18n="footerCopy">Social-Ecological System Sustainability Lab, Xiamen University.</p></div>
        <div class="footer-links" aria-label="Footer navigation">
          <a href="index.html#research" data-i18n="navResearch">Research</a>
          <a href="people.html" data-i18n="navPeople">People</a>
          <a href="publications.html" data-i18n="navPublications">Publications</a>
          <a href="contact.html" data-i18n="navContact">Contact</a>
        </div>
      </div>
    </footer>`;
})();
