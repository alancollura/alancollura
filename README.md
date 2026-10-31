# AGGIORNAMENTO GA4 — alancollura.com

- ID Google Analytics: `G-PPYNVNX592`.
- Implementazione in `assets/analytics.js`: il codice Google è caricato **solo dopo il clic su Accetta** nel banner di consenso. Prima della scelta o dopo Rifiuta, non viene richiesta la libreria Google e non vengono installati cookie di analytics.
- `assets/analytics.js` è inserito in tutte le pagine in `<head>` con `defer`; rigenerando con `python build_site.py`, il riferimento rimane presente.
- Banner con pulsanti **Accetta** e **Rifiuta** e possibilità di cambiare idea da **Preferenze cookie** nel footer o nella pagina `/privacy/`.
- Informativa aggiornata per descrivere Analytics e consenso. **Completa comunque i dati del titolare, i contatti privacy e fai verificare la parte legale prima della pubblicazione.**
- Nessun cambio a DNS, Namecheap, sitemap, URL e dominio principale.
- Come test: apri il sito in navigazione privata, rifiuta e verifica che GA4 non riceva richieste; poi accetta e guarda la sezione Tempo reale su Google Analytics dopo aver navigato un po'. Se c'è un ad blocker, la richiesta potrebbe essere bloccata.
- Per aggiornare il sito esistente: estrai questo archivio e sostituisci i file del repository GitHub con il contenuto estratto, inclusi `assets/analytics.js`, `assets/styles.css` e `build_site.py`. Pubblica con commit; Vercel effettua il deploy se l'integrazione GitHub è attiva.

---

# ALAN COLLURA — EDIZIONE 02 / VIDEO + MOTION + SEO

**Questo è il sito completo (14 pagine), già pronto per l'aggiornamento del repository GitHub collegato a Vercel.** Homepage riprogettata con video autentico HTML5 sul lato destro (al posto del grande monogramma AC), animazioni di testo, entrate in scroll, microinterazioni, timeline editoriale, caso studio, FAQ leggibili e nuove palette navy / cobalt / lime. Nessun framework né installazione. Google Analytics 4 è caricato solo dopo il consenso esplicito.

## 🎬 Sostituire l'anteprima video con il tuo filmato

Lo ZIP include **`assets/alan-intro.mp4`**: un loop motion demo di 8 secondi, creato solo per non lasciare una sezione vuota durante le prove. **Non è un video personale di Alan** e va sostituito con il video montato definitivo.

1. Esporta il tuo montaggio dal programma di editing in **MP4 / H.264**, preferibilmente **verticale 4:5 (1080 × 1350)**, 24–30 fps. Anche il 9:16 è utilizzabile: tieni volti e testo nella zona centrale, poiché `object-fit: cover` può tagliare parte del video.
2. Assegna al file il nome esatto **`alan-intro.mp4`**.
3. Sostituisci **`assets/alan-intro.mp4`** mantenendo lo stesso percorso nel repository GitHub. Il video apparirà immediatamente nel riquadro di destra alla successiva pubblicazione Vercel. Non modificare gli URL nel codice.
4. Facoltativo: sostituisci `assets/video-poster.svg` con una tua locandina (o aggiorna il percorso `poster=` nell'homepage **e nel generatore**). Il poster viene mostrato finché il browser non avvia il video.

**Comportamento già integrato:** autoplay, loop, `muted` e `playsinline` (necessari per la riproduzione automatica sulle principali piattaforme); pulsante **Attiva audio** e pulsante **Schermo intero**. Il video si riproduce **automaticamente senza audio**, perché i browser non permettono di garantire l'autoplay con sonoro. Dopo il clic il visitatore può attivarlo. Chi ha impostato *Riduci movimento* non subisce l'autoplay forzato. Il poster rimane come fallback se il browser blocca la riproduzione.

**Consiglio creativo:** un reel cinematico di 20–35 secondi con te in call, durante sessioni di training, durante analisi di KPI e durante riunioni, con **sottotitoli incorporati**. Montalo pensando al fatto che la prima visione parte senza audio. Per un video definitivo con parlato, predispone anche sottotitoli o una trascrizione accessibile.

## 🧭 Modificare il testo e le animazioni

- Il testo visibile, le pagine e i metadati SEO sono nel generatore **`build_site.py`**. Dopo una modifica al generatore puoi rigenerare le 14 pagine con `python build_site.py` e pubblicare il nuovo commit.
- Il codice statico della homepage è già in `index.html`: per cambiare solo il video ti basta sostituire il file MP4, senza eseguire Python.
- Testi che si digitano in sequenza: **`assets/site.js`** → array `words`. Animazioni e colori: **`assets/styles.css`**, sezione `ALAN COLLURA / EDITION 02` in fondo al file.
- Dati da verificare prima del lancio definitivo: claim top 1%, traguardo aziendale di Inglese per Negati a 1M€/mese e numero di venditori formati. In pagina i risultati sono attribuiti al contesto di squadra, senza garanzie future.

## ▲ Aggiornare il sito GIÀ pubblicato con GitHub e Vercel

1. Estrai lo ZIP sul computer.
2. Entra nel repository GitHub già collegato al progetto Vercel di `alancollura.com`.
3. Carica il **contenuto estratto** nella root del repository, **sovrascrivendo** i file omonimi (`index.html`, `assets/styles.css`, `assets/site.js`, `build_site.py`, ecc.) e aggiungendo i nuovi `assets/alan-intro.mp4` e `assets/video-poster.svg`.
4. Esegui **Commit changes** sul branch di produzione. Vercel pubblicherà automaticamente la nuova versione attraverso l'integrazione GitHub se il deploy automatico è attivo.
5. Controlla homepage e menu da smartphone, più `https://alancollura.com/sitemap.xml`. **Non cambiare i DNS di Namecheap:** restano quelli già collegati a Vercel.

**Configurazione Vercel:** framework `Other`, root `./`, sito statico, nessun build command, nessuna variabile d'ambiente. `vercel.json` è già incluso (URL puliti e slash finale).

## 🔎 SEO: cosa ho incluso

HTML con contenuti completi direttamente nel sorgente (non dipendono dalle animazioni), H1 unico, titoli e description dedicati, canonical coerenti con `https://alancollura.com/`, tag Open Graph e Twitter, anteprima sociale 1200 × 630, JSON-LD `Person`, `ProfilePage`, `WebSite`, `BreadcrumbList`, `BlogPosting` e FAQ pubbliche, link interni contestuali, 14 pagine indicizzabili, `sitemap.xml`, `robots.txt`, 404 con noindex, CSS e JS locali e rispetto dell'impostazione *Riduci movimento*. Il video demo è leggero (~118 KB).

**Da fare dopo il deploy:** verifica Google Search Console, controlla l'indicizzazione, completa la privacy policy con il titolare corretto, aggiungi progressivamente fonti pubbliche / testimonianze con consenso e, quando disponibile, una foto reale nella biografia. Il sito può migliorare le basi tecniche e editoriali, non garantisce automaticamente posizioni Google.

---

# alancollura.com — sito personale / SEO

Sito statico HTML/CSS/JS completo e multipagina, pronto per hosting statico su Vercel (o equivalenti). Nessun framework o installazione. Google Analytics 4 con consenso preventivo, implementato in assets/analytics.js.

## Contenuti inclusi

1. `/` — homepage, posizionamento personale e narrazione principale
2. `/chi-sono/` — biografia, esperienza e competenze
3. `/la-mia-storia/` — percorso: sales → Inglese per Negati → business internazionali → oggi
4. `/metodo-commerciale/` — approccio e cinque pilastri operativi
5. `/risultati/` — contesto dei traguardi e caso Inglese per Negati
6. `/progetti/` — Recupero Fatturato, MetodoVendita, Inglese per Negati
7. `/direttore-commerciale/` — guida evergreen per ricerche SEO informative
8. `/formazione-venditori/` — guida evergreen su formazione sales
9. `/approfondimenti/` — indice guide
10. `/approfondimenti/kpi-commerciali/` — articolo tecnico
11. `/approfondimenti/come-scalare-team-sales/` — articolo tecnico
12. `/approfondimenti/recupero-lead-crm/` — articolo tecnico
13. `/contatti/` — link ufficiali e indirizzo del team
14. `/privacy/` — informazioni tecniche + sezione **da completare con i dati legali**

In più: 404 personalizzato, robots.txt, sitemap.xml, llms.txt, favicon, Open Graph 1200×630, JSON-LD Person/ProfilePage/BreadcrumbList/BlogPosting/FAQPage, manifest e configurazione Vercel.

## Deployment su Vercel

1. Estrai lo ZIP e carica i file in un repository Git.
2. Su Vercel crea un nuovo progetto e importa il repository.
3. Scegli preset **Other**, directory principale `./`, nessun comando di build e nessuna directory output diversa dalla root. Se Vercel identifica automaticamente come sito statico, conferma l'impostazione proposta.
4. Esegui deploy e collega **alancollura.com** dal pannello Domains di Vercel.
5. Imposta i record DNS come indicato da Vercel e, quando configurati, verifica HTTPS.
6. Apri `https://alancollura.com/sitemap.xml` e `https://alancollura.com/robots.txt`.
7. Aggiungi il dominio come proprietà **Domain** in Google Search Console, verifica via DNS e invia la sitemap `https://alancollura.com/sitemap.xml`.

### URL senza `.html`
Ogni pagina è una cartella con `index.html`: gli indirizzi pubblici sono `/chi-sono/`, `/risultati/`, ecc. Il file `vercel.json` specifica `trailingSlash: true` e `cleanUrls: true`. Non viene richiesto agli utenti di visitare URL con suffisso `.html`.

## Prima di pubblicare: checklist essenziale

- **Foto autentica**: se disponibile, inserisci una fotografia professionale reale nella pagina bio. La homepage usa una sezione video modificabile, non un ritratto generato.
- **Verifica dei claim**: controlla i riferimenti a “top 1%”, alla crescita di Inglese per Negati a 1M€/mese, al numero di professionisti formati e alla descrizione del contributo diretto. Sul sito sono presentati con contesto, non come garanzie. Disponendo di prove, testimonianze attribuite con consenso o fonti pubbliche, è utile aggiungerle alle pagine relative.
- **Dati legali**: completa la pagina privacy con titolare corretto, dati di contatto privacy e dettagli reali di hosting/log. Se aggiungi analytics, moduli, pixel o cookie, aggiorna informativa e consensi quando richiesto.
- **Contatti**: al momento il contatto professionale è `info@recuperofatturato.com` (team). Sostituiscilo se attivi un indirizzo personale sul nuovo dominio. **Non** è stato inventato un indirizzo personale non configurato.
- **Profili social**: collega solo gli account personali autentici; non sono stati inseriti profili LinkedIn/Instagram trovati sul web perché potrebbero appartenere a omonimi.

## Come modificare i contenuti

Le pagine HTML sono interamente statiche e modificabili. Il file `build_site.py` contiene le sorgenti testuali e genera tutti gli HTML, sitemap e metadati; dopo modifiche al generatore esegui `python build_site.py` nella cartella principale. Le modifiche fatte direttamente agli HTML saranno sovrascritte da una nuova generazione.

I file di stile e interazione sono `assets/styles.css` e `assets/site.js`. Le immagini social sono `assets/og-alan-collura.png`, `assets/favicon.svg` e `assets/apple-touch-icon.png`.

## SEO: cosa è incluso e cosa non si può garantire

Sono già inclusi titoli e description unici, gerarchia di heading, link interni contestuali, struttura pulita, dati strutturati corretti, Open Graph e sitemap. Non è possibile garantire un ranking: la visibilità organica dipende anche da indicizzazione, concorrenza, segnali di reputazione, contenuti autentici e menzioni/link da fonti autorevoli. Il sito è un punto di partenza tecnico-editoriale, non una scorciatoia automatica verso il primo posto.

## GitHub → Vercel (procedura guidata)

**Non caricare il file ZIP come singolo file nel repository.** Estrai prima lo ZIP, poi carica **il suo contenuto** nella root del repository (a fianco di `README.md`):

```text
alancollura/                   ← root del repository GitHub
├── index.html                 ← fondamentale: deve essere qui
├── chi-sono/index.html
├── la-mia-storia/index.html
├── ...altre pagine/index.html
├── assets/styles.css
├── assets/site.js
├── assets/og-alan-collura.png
├── vercel.json
├── sitemap.xml
├── robots.txt
├── .gitignore
├── build_site.py             ← facoltativo: per rigenerare le pagine
└── README.md
```

### 1. Caricamento su GitHub (senza terminale)

1. Crea un nuovo repository, ad esempio `alancollura`.
2. Entra nel repository vuoto e scegli **Add file → Upload files**.
3. Trascina i **file e le cartelle estratti** dallo ZIP (non il file ZIP e non una cartella esterna `alancollura_site`). Verifica che `index.html` appaia nella root del repository.
4. Conferma con **Commit changes** sul branch `main`.

Per upload con Git da terminale (alternativo):

```bash
git init
git add .
git commit -m "Sito personale Alan Collura"
git branch -M main
git remote add origin https://github.com/TUO-USERNAME/alancollura.git
git push -u origin main
```

### 2. Import su Vercel

1. Apri [Vercel Dashboard](https://vercel.com/dashboard) → **Add New → Project**.
2. Collega GitHub, scegli `alancollura`, poi **Import**.
3. Impostazioni: **Framework Preset: Other**; **Root Directory: `./`**; **Build Command: disattivato / vuoto**; **Output Directory: `.`** (root). Nessuna variabile d'ambiente necessaria.
4. **Deploy**. Apri il dominio temporaneo `*.vercel.app` per controllare homepage, pagina `/chi-sono/`, menu mobile e `/sitemap.xml`.
5. In **Project → Settings → Domains**, aggiungi `alancollura.com` e `www.alancollura.com`; scegli il primo come dominio canonico, con redirect dal `www`.
6. Aggiorna il DNS **esattamente** con i record proposti dalla schermata Domains di Vercel presso il registrar. Non copiare alla cieca record A/CNAME presi da istruzioni generiche: la configurazione può essere diversa per dominio o account.
7. Controlla HTTPS attivo e prova le URL canoniche senza `.html` (ad esempio `https://alancollura.com/chi-sono/`).

### 3. Google Search Console

Registra la proprietà Domain `alancollura.com` e verifica il record TXT DNS richiesto da Google. Invia la sitemap `https://alancollura.com/sitemap.xml`. La scansione e il posizionamento non sono immediati né garantiti.

### Problemi comuni

- **Vercel mostra 404**: normalmente `index.html` non è nella root che Vercel sta pubblicando; controlla Root Directory `./` e Output Directory `.`.
- **La homepage funziona ma una sottopagina no**: controlla che sia stata caricata la cartella con il suo `index.html` e che non ci siano errori nei nomi dei percorsi.
- **CSS mancante**: controlla `assets/styles.css` e che il progetto sia pubblicato dalla root corretta.
- **Gli aggiornamenti non si vedono**: conferma di aver eseguito commit sul branch collegato a Vercel e apri l'ultimo deployment.


## Brand SEO v3 (31/10/2026)
- Homepage H1: now explicitly says `Alan Collura` (visible). Branded title/description refined.
- New targeted biography / role page: `/alan-collura-inglese-per-negati/` (linked from main story and results).
- Consistent `Person` identity (`@id` across pages), `WebSite` name, canonical paths and sitemap.
- No unverified profile URLs in `sameAs` and NO fake job credentials. Add only confirmed public personal URLs to `sameAs`.
- A real portrait is still NEEDED: use a genuine photograph, give it a descriptive alt and add its crawlable URL to `Person.image`. Do NOT call the current decorative OG graphic a photograph.
- Publish a credible independently verifiable reference / interview for the Inglese per Negati experience if possible.
- Submit `/sitemap.xml` in Search Console, inspect and request indexing for homepage, `/chi-sono/`, and the Inglese per Negati case page.
- This package can be deployed through the already configured GitHub→Vercel pipeline. It does not change DNS.
