# alancollura.com — sito personale / SEO

Sito statico HTML/CSS/JS completo e multipagina, pronto per hosting statico su Vercel (o equivalenti). Nessun framework, nessuna installazione, nessuna dipendenza, nessun cookie o analytics incluso.

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

- **Foto autentica**: inserisci una fotografia professionale reale di Alan nella homepage e nella pagina bio, con alt text descrittivo, se disponibile. Il design attuale usa un monogramma originale, evitando ritratti generati o foto di persone diverse.
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
