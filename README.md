# ALAN COLLURA — CINEMATIC V9 | 12 novembre 2026

Versione completa pronta per pubblicazione statica su Vercel.

## Cosa cambia
- Homepage V8 cinematic conservata: fotografia corretta su mobile, zoom, vortice, menu e sezioni già approvate.
- Restyling completo di tutte le 14 pagine secondarie: header/footer coordinati alla homepage, sfondi scuri, accenti verde lime, hero cinematografici, tipografia uniforme, adattamento 320/390/1440 px.
- Utilizzati i loghi ufficiali dei progetti nelle pagine pertinenti.
- SEO: title e meta description specifici, Open Graph/Twitter coerenti, canonical self-referencing, JSON-LD e breadcrumb originali conservati e aggiornati, sitemap con date di ultima modifica, link interni aggiuntivi e immagini lazy-load.
- Zero fotografie con auto al di fuori della homepage.

## Pubblicazione
1. Caricare il CONTENUTO dello ZIP come root del progetto statico su Vercel.
2. Verificare che cleanUrls e trailingSlash siano applicati dal file vercel.json.
3. Controllare il dominio live su Safari iPhone e Chrome desktop.
4. In Google Search Console, inviare https://alancollura.com/sitemap.xml e ispezionare le URL principali.
5. Eseguire test Rich Results, PageSpeed Insights e Web Vitals sul dominio pubblico dopo il deploy.

## Nota tecnica
- Non sostituire assets/cinematic.js, assets/cinematic.css o scroll-02-hd.webp con versioni vecchie.
- I CSS/JS delle pagine secondarie sono assets/editorial-cinematic.css e assets/editorial-cinematic.js (versione query ?v=9).
- GA4 rimane subordinato al consenso come nella versione originale.
- La privacy policy contiene un paragrafo DA COMPLETARE: aggiungere dati legali del titolare prima di considerarla definitiva.
- Le affermazioni numeriche e i case study sono ripresi dal testo del sito fornito; non sono stati verificati con documentazione contabile esterna.
- Metadati e sitemap facilitano la scoperta delle pagine, ma non garantiscono indicizzazione o posizionamento.
