# alancollura.com — V5 (GitHub / Vercel)

Sito personale statico con **15 pagine**, dedicato ad Alan Collura.

## Cosa è cambiato

- Homepage ridisegnata con **foto originale della conferenza**, al posto del video.
- Palette blu notte, azzurro e bianco; favicon `AC` azzurro.
- Hero essenziale e tre passaggi: **Sales → Direttore commerciale → Founder**.
- Sezione metriche: oltre 60M€ riferiti alle aziende partner, 1.500+ venditori formati, Italia/USA/Spagna.
- Scroll dei settori con etichetta chiara, blocco KPI con VPL Clean / CR del funnel / outbound / distinzione setter-sales.
- Pagine Progetti, Contatti, Chi sono, La mia storia, Metodo e Risultati riscritte e semplificate.
- Pulsanti «Visita» dei progetti portano direttamente ai rispettivi siti **in una nuova scheda**.
- WhatsApp `+34 692 306 638` e email `info@recuperofatturato.com`, `info@metodovendita.it`.
- Metadati SEO, dati strutturati Person/ProfilePage, canonical, sitemap, OG con foto.
- GA4 ID **G-PPYNVNX592**, mantenuto con consenso preventivo tramite `assets/analytics.js`.

## Come pubblicare

1. Estrai lo ZIP e **carica tutti i file e le cartelle del suo contenuto** nella root del repository GitHub già collegato a Vercel. Non caricare soltanto lo ZIP e non mettere un'altra cartella come root.
2. Fai commit sul branch di produzione. Vercel dovrebbe distribuire automaticamente il sito.
3. Verifica `https://alancollura.com/`, `/progetti/`, `/contatti/` e `/sitemap.xml`.
4. Non è necessario modificare i record DNS già funzionanti su Namecheap.
5. Test GA4: dopo aver dato consenso ai cookie, controlla Tempo reale su Analytics. Prima del consenso non viene caricato gtag.js.

## Struttura

- `index.html` e cartelle con `index.html`: pagine pubblicate.
- `assets/styles.css`: CSS esistente per le pagine e i componenti storici.
- `assets/redesign.css`: stile V5, caricato **dopo** il CSS esistente.
- `assets/alan-collura-conferenza.webp`: fotografia responsive hero e biografia.
- `assets/og-alan-collura.png`: immagine anteprima social.
- `assets/favicon.svg`, `assets/apple-touch-icon.png`: identità AC azzurra.
- `assets/analytics.js`: consenso cookie e codice GA4; **non duplicare** lo script Analytics.
- `assets/site.js`: menu e animazioni progressive accessibili.
- `build_site.py` + `redesign_content.py`: sorgenti di generazione delle pagine statiche; rigenerare con `python build_site.py` se necessario.
- `vercel.json`: configurazione hosting statico, URL pulite.

## Prima di pubblicare definitivamente

- I numeri **20.000 €/mese, +60M€ e 1.500+** provengono dalle informazioni fornite dal titolare: verificare autorizzazioni, significato preciso, periodo e documenti di supporto prima di utilizzarli pubblicamente.
- Completare **il titolare e i dati legali** nell'informativa `/privacy/`; verificare il trattamento privacy con un professionista competente.
- Se aggiungi profili personali verificati, aggiornare `sameAs` dei dati strutturati senza confonderli con profili aziendali o di omonimi.
- Il sito non include font di terzi, framework JS né servizi esterni oltre a GA4 dopo consenso e link volontari.

## SEO

Cerca e invia in Search Console: `https://alancollura.com/sitemap.xml`.
Le pagine hanno titoli autonomi, un solo H1, URL canonici e dati strutturati. Questo non garantisce una posizione specifica su Google.
