document.querySelector('.nav-toggle').addEventListener('click', function () {
  const open = document.querySelector('.nav-links').classList.toggle('open');
  this.setAttribute('aria-expanded', String(open));
});

(function () {
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('/#')) return;
    const linkPath = href.split('#')[0];
    if (path === linkPath || path.startsWith(linkPath.replace('.html', '/'))) {
      link.classList.add('active');
    }
  });
})();
