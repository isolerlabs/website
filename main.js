document.querySelector('.nav-toggle').addEventListener('click', function () {
  const open = document.querySelector('.nav-links').classList.toggle('open');
  this.setAttribute('aria-expanded', String(open));
});
