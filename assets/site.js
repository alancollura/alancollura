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

/* ALAN COLLURA — progressive homepage motion and accessible video controls. */
(() => {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // Content always exists in the HTML: motion enhances it, never generates it.
  if (!reduced && 'IntersectionObserver' in window) {
    document.body.classList.add('motion-on');
    const revealer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -35px 0px', threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));
  }

  const target = document.getElementById('ac-typewriter');
  if (target && !reduced) {
    const words = [
      'il potenziale in risultati.',
      'i contatti in opportunità.',
      'le persone in un team.',
      'il processo in crescita.'
    ];
    let word = 0, letters = words[0].length, deleting = false;
    let timer;
    const tick = () => {
      const value = words[word];
      target.textContent = value.slice(0, letters);
      if (!deleting && letters === value.length) {
        deleting = true;
        timer = setTimeout(tick, 1900);
      } else if (deleting && letters === 0) {
        deleting = false;
        word = (word + 1) % words.length;
        timer = setTimeout(tick, 380);
      } else {
        letters += deleting ? -1 : 1;
        timer = setTimeout(tick, deleting ? 30 : 55);
      }
    };
    timer = setTimeout(tick, 2000);
    document.addEventListener('visibilitychange', () => {
      clearTimeout(timer);
      if (!document.hidden) timer = setTimeout(tick, 350);
    });
  }

  if (!reduced && 'IntersectionObserver' in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const goal = Number(el.dataset.count);
        if (Number.isNaN(goal)) return;
        const duration = 1350;
        const formatter = new Intl.NumberFormat('it-IT');
        const from = performance.now();
        const run = time => {
          const t = Math.min(1, (time - from) / duration);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = formatter.format(Math.round(goal * eased)) + (el.dataset.suffix || '');
          if (t < 1) requestAnimationFrame(run);
        };
        requestAnimationFrame(run);
        io.unobserve(el);
      });
    }, { threshold: .5 });
    document.querySelectorAll('[data-count]').forEach(el => io.observe(el));
  }

  const video = document.getElementById('alan-intro-video');
  const sound = document.getElementById('video-sound');
  const expand = document.getElementById('video-expand');
  if (video) {
    video.defaultMuted = true;
    video.muted = true;
    if (reduced) {
      video.pause();
    } else {
      video.play().catch(() => { /* poster remains visible when autoplay is restricted */ });
    }
    if (sound) sound.addEventListener('click', () => {
      video.muted = !video.muted;
      const active = !video.muted;
      sound.setAttribute('aria-pressed', String(active));
      sound.setAttribute('aria-label', active ? 'Disattiva audio del video' : 'Attiva audio del video');
      const label = sound.querySelector('span');
      if (label) label.textContent = active ? 'Disattiva audio' : 'Attiva audio';
      if (video.paused) video.play().catch(() => {});
    });
    if (expand) expand.addEventListener('click', () => {
      if (video.requestFullscreen) video.requestFullscreen().catch(() => {});
      else if (video.webkitEnterFullscreen) video.webkitEnterFullscreen();
    });
  }
})();
