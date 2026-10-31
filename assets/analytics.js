/* Google Analytics 4 (G-PPYNVNX592) - opt-in only.
   This file is shared across all static pages and is generated-independent.
   The Google script is NEVER fetched before the visitor accepts statistics. */
(() => {
  'use strict';
  const ID = 'G-PPYNVNX592';
  const KEY = 'alancollura_analytics_consent_v1';
  const MAX_AGE_MS = 180 * 24 * 60 * 60 * 1000; // renew after ~6 months
  let enabled = false;
  let banner = null;

  function getPreference() {
    try {
      const value = JSON.parse(localStorage.getItem(KEY));
      if (!value || !['accepted','rejected'].includes(value.value)) return null;
      if (!Number.isFinite(value.time) || Date.now() - value.time > MAX_AGE_MS) return null;
      return value.value;
    } catch (_) { return null; }
  }
  function savePreference(value) {
    try { localStorage.setItem(KEY, JSON.stringify({value, time: Date.now()})); }
    catch (_) { /* preferences cannot be persisted in this browser */ }
  }

  function activateGoogleAnalytics() {
    if (enabled) return;
    enabled = true;
    // Equivalent to Google's gtag.js snippet, delayed until explicit consent.
    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    window.gtag('config', ID);
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ID);
    document.head.appendChild(script);
  }

  function removeGoogleCookies() {
    // Best effort: delete first-party Google Analytics cookies on consent withdrawal.
    const candidates = document.cookie.split(';').map(x => x.trim().split('=')[0]).filter(n => /^_ga(?:_|$)/.test(n));
    for (const name of candidates) {
      const host = location.hostname;
      const domains = ['', host, '.' + host, 'alancollura.com', '.alancollura.com'];
      for (const domain of domains) {
        document.cookie = name + '=; Max-Age=0; path=/; SameSite=Lax' + (domain ? '; domain=' + domain : '');
      }
    }
  }

  function closeBanner() {
    if (banner) { banner.remove(); banner = null; }
  }

  function setChoice(choice) {
    const wasEnabled = enabled;
    savePreference(choice);
    closeBanner();
    if (choice === 'accepted') {
      activateGoogleAnalytics();
    } else if (wasEnabled) {
      removeGoogleCookies();
      // Removes the previously loaded Google library, so no more events can fire.
      location.reload();
    }
  }

  function showBanner() {
    if (banner) { banner.querySelector('[data-choice="rejected"]')?.focus(); return; }
    banner = document.createElement('aside');
    banner.className = 'ac-cookie-banner';
    banner.setAttribute('aria-label', 'Preferenze cookie e statistiche');
    banner.innerHTML = `
      <div class="ac-cookie-copy">
        <div class="ac-cookie-badge">PRIVACY & STATISTICHE</div>
        <strong>Decidi tu se attivare Analytics.</strong>
        <p>Usiamo Google Analytics 4 solo se accetti, per capire come viene visitato il sito. Rifiutare non limita la navigazione. <a href="/privacy/">Informativa privacy</a>.</p>
      </div>
      <div class="ac-cookie-actions">
        <button type="button" class="ac-cookie-no" data-choice="rejected">Rifiuta</button>
        <button type="button" class="ac-cookie-yes" data-choice="accepted">Accetta</button>
      </div>`;
    banner.querySelectorAll('[data-choice]').forEach(button => {
      button.addEventListener('click', () => setChoice(button.dataset.choice));
    });
    document.body.appendChild(banner);
  }

  const preference = getPreference();
  if (preference === 'accepted') activateGoogleAnalytics();
  if (preference === null) showBanner();
  document.querySelectorAll('[data-cookie-settings]').forEach(button => {
    button.addEventListener('click', showBanner);
  });
})();
