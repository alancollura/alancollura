# Audit SEO e controllo visual V10 — 14/11/2026

## Ambito
Analisi dei file statici della V10, **non** dei dati Search Console o della versione live indicizzata da Google.

## Risultati
- **15 pagine** in archivio e **15 URL** in sitemap, corrispondenza verificata.
- **15 title distinti** e **15 meta description distinte**.
- **15/15 H1 unici per pagina**; canonical HTTPS e trailing slash controllati.
- JSON-LD presente e parsabile, OG/Twitter e immagini locali controllati.
- **14 grafiche SVG originali** a tema (13 eroi secondari + 1 grafica biografica); **14 copertine OG JPEG distinte**.
- Fotografie usate nel contenuto: Lamborghini solo homepage, evento solo homepage, conferenza solo Chi sono. La stessa foto non compare due volte.
- Test layout Chromium con simulazione viewport 1440px, 390px e 320px sulle sette pagine chiave: nessuna immagine non caricata, nessuno scroll orizzontale, nessun errore JavaScript dopo il caricamento con script in ordine deferred corretto.
- Le pagine secondarie hanno CTA contestuali e grafiche differenziate; home cinematico e SEO testuale preservati.

## Problemi rilevati
Nessuna criticità *statica* bloccante rilevata nei controlli eseguiti.

## Verifiche ancora necessarie dopo deploy
- Google Search Console: copertura, URL Inspection, invio sitemap, query, indicizzazione e eventuali redirect non desiderati.
- Lighthouse / PageSpeed sul dominio pubblico, inclusi LCP, CLS, INP e gestione dei file fotografici mobile.
- Test su Safari reale e navigazione completa di tutto il sito, compreso menu e consenso cookie.
- Dati aziendali/claim case study (0 → 900.000 € al mese e tre anni di gestione) dichiarati nel contenuto: verificare disponibilità di fonti documentali o prove pubbliche prima di usarli per acquisizione organica. Non costituiscono una garanzia di risultati.
- Privacy page: verificare i dati identificativi del titolare e aggiornare le informazioni legali con consulente competente.
- URL live alancollura.com non raggiungibile da questa sessione web: il controllo non prova l’attuale indicizzazione del dominio.

## Note
La grafica editoriale viene servita con SVG leggeri e dimensioni esplicite, senza testo SEO nascosto o navigazione dipendente da JavaScript. La fotografia e il case study sono attribuiti alle attività del progetto, non dichiarati risultati personali garantiti.
