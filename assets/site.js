/* No tracking or cookies. Accessible navigation only. */
(() => {
  const button = document.querySelector('.menu-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (button && mobileNav) {
    function closeMenu() {
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Apri il menu');
      mobileNav.hidden = true;
    }
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      button.setAttribute('aria-expanded', String(open));
      button.setAttribute('aria-label', open ? 'Chiudi il menu' : 'Apri il menu');
      mobileNav.hidden = !open;
    });
    mobileNav.addEventListener('click', event => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', event => {
      if (event.key === 'Escape' && !mobileNav.hidden) {
        closeMenu();
        button.focus();
      }
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth > 980) closeMenu();
    });
  }
})();
