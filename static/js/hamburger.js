function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('open');
}

document.addEventListener('click', function(e) {
  const menu = document.getElementById('menu');
  const btn = document.getElementById('hamburger-btn');
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove('open');
  }
});
