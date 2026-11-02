"""V5 content overrides. Invoked before static page generation.
Canonical URLs and GA4 consent remain owned by build_site.py.
"""

HOME = r'''
<section class="v5-hero" aria-labelledby="hero-title">
  <div class="container v5-hero-layout">
    <div class="v5-hero-content reveal">
      <p class="v5-eyebrow"><span class="v5-blue-dot"></span> FOUNDER / SALES DIRECTOR / BUSINESS GROWTH</p>
      <h1 id="hero-title"><span class="v5-hero-name">Alan Collura.</span><span class="v5-hero-headline">Dalle vendite alla guida di <em>business multimilionari.</em></span></h1>
      <p class="v5-hero-summary">Da <strong>Sales con risultati da 20.000 € al mese</strong> a <strong>Founder</strong> che gestisce business multimilionari in <strong>Italia, USA e Spagna.</strong></p>
      <div class="v5-hero-buttons"><a class="v5-btn v5-btn-primary" href="#progetti">I miei progetti <span aria-hidden="true">↗</span></a><a class="v5-text-link" href="/contatti/">Parliamone <span aria-hidden="true">↗</span></a></div>
      <div class="v5-hero-location"><span class="v5-line"></span> 01 / SALES <span aria-hidden="true">·</span> 02 / DIREZIONE <span aria-hidden="true">·</span> 03 / FOUNDER</div>
    </div>
    <div class="v5-portrait-frame reveal">
      <img class="v5-portrait" src="/assets/alan-collura-conferenza.webp" srcset="/assets/alan-collura-conferenza-600.webp 600w, /assets/alan-collura-conferenza.webp 1000w" sizes="(max-width: 850px) 100vw, 46vw" width="1000" height="1250" alt="Alan Collura durante un intervento di formazione commerciale in conferenza" fetchpriority="high" decoding="async">
      <div class="v5-portrait-shade"></div>
      <div class="v5-photo-tag"><span class="v5-photo-tag-dot"></span> SALES / LEADERSHIP / EXECUTION</div>
      <div class="v5-photo-caption">ALAN COLLURA <span>— LIVE TRAINING</span></div>
    </div>
  </div>
  <div class="container v5-scroll-prompt"><span>SCOPRI IL PERCORSO</span><span aria-hidden="true">↓</span></div>
</section>
<section class="v5-proof" aria-label="Il percorso in numeri"><div class="container v5-proof-grid">
  <div class="v5-proof-cell"><span class="v5-proof-label">FATTURATO DELLE AZIENDE PARTNER</span><strong>+60<span>M€</span></strong><p>Generato complessivamente nei progetti con cui ho collaborato.</p></div>
  <div class="v5-proof-cell"><span class="v5-proof-label">TALENTI COMMERCIALI</span><strong><span data-count="1500" data-suffix="+">1.500+</span></strong><p>Venditori formati nel percorso professionale.</p></div>
  <div class="v5-proof-cell"><span class="v5-proof-label">MERCATI PRINCIPALI</span><strong>03</strong><p>Italia <span class="v5-metric-dot">·</span> Stati Uniti <span class="v5-metric-dot">·</span> Spagna</p></div>
</div></section>
<section class="v5-industries" aria-label="Settori di business gestiti">
  <div class="container v5-industries-label"><span class="v5-kicker">ESPERIENZA TRASVERSALE</span><h2>Le nicchie di business <em>in cui ho operato.</em></h2></div>
  <div class="v5-industries-window"><div class="v5-industries-track"><div class="v5-industries-set">FORMAZIONE LINGUISTICA <span>✳</span> FITNESS <span>✳</span> SALUTE <span>✳</span> IMMOBILIARE <span>✳</span> CONCESSIONARIE <span>✳</span> MEDICO <span>✳</span> MAKE MONEY <span>✳</span> BEAUTY <span>✳</span> ECOMMERCE <span>✳</span> MARKETING <span>✳</span> MENOPAUSA <span>✳</span></div><div class="v5-industries-set" aria-hidden="true">FORMAZIONE LINGUISTICA <span>✳</span> FITNESS <span>✳</span> SALUTE <span>✳</span> IMMOBILIARE <span>✳</span> CONCESSIONARIE <span>✳</span> MEDICO <span>✳</span> MAKE MONEY <span>✳</span> BEAUTY <span>✳</span> ECOMMERCE <span>✳</span> MARKETING <span>✳</span> MENOPAUSA <span>✳</span></div></div></div>
</section>
<section class="v5-section v5-journey" id="percorso" aria-labelledby="v5-journey-title"><div class="container">
  <div class="v5-heading reveal"><div><span class="v5-kicker">01 / IL PERCORSO</span><h2 id="v5-journey-title">Tre fasi.<br><em>Un'evoluzione concreta.</em></h2></div><p>Dalla performance individuale alla costruzione di team, fino alla guida di realtà e progetti imprenditoriali.</p></div>
  <div class="v5-journey-grid">
    <a class="v5-stage reveal" href="/la-mia-storia/#sales"><span class="v5-stage-num">01</span><span class="v5-stage-index">LE ORIGINI</span><h3>Sales<span>.</span></h3><p>Trattative, disciplina e risultati sul campo. Dai primi risultati da 20.000 € al mese alla crescita delle responsabilità.</p><span class="v5-card-link">La mia storia <b>↗</b></span></a>
    <a class="v5-stage reveal" href="/la-mia-storia/#inglese-per-negati"><span class="v5-stage-num">02</span><span class="v5-stage-index">LA SVOLTA</span><h3>Direttore<br>commerciale<span>.</span></h3><p>Con <strong>Inglese per Negati</strong>, l'evoluzione verso persone, processi e gestione della crescita, fino al traguardo aziendale di 1M€ al mese.</p><span class="v5-card-link">Il caso di crescita <b>↗</b></span></a>
    <a class="v5-stage reveal" href="/progetti/"><span class="v5-stage-num">03</span><span class="v5-stage-index">OGGI</span><h3>Founder<span>.</span></h3><p>Gestione di business internazionali e creazione di nuovi progetti per aziende e talenti commerciali.</p><span class="v5-card-link">I progetti <b>↗</b></span></a>
  </div>
</div></section>
<section class="v5-section v5-method" id="metodo" aria-labelledby="v5-method-title"><div class="container">
  <div class="v5-heading v5-heading-light reveal"><div><span class="v5-kicker">02 / SALES OPERATIONS</span><h2 id="v5-method-title">Il reparto non si improvvisa.<br><em>Si progetta.</em></h2></div><p>Ogni fase del funnel ha un responsabile. Ogni numero deve portare a una decisione.</p></div>
  <div class="v5-method-grid">
    <div class="v5-method-card reveal"><span>01 / BUSINESS METRIC</span><h3>VPL <em>Clean.</em></h3><p>Misurare il valore reale per lead sui risultati effettivi, non solo sui volumi dichiarati.</p></div>
    <div class="v5-method-card reveal"><span>02 / FUNNEL</span><h3>Conversion Rate <em>end-to-end.</em></h3><p>Ottimizzare il percorso da lead a incassato, non soltanto il booking delle call.</p></div>
    <div class="v5-method-card reveal"><span>03 / OUTBOUND</span><h3>Massima <em>produttività.</em></h3><p>Velocità, segmentazione, follow-up e recupero delle opportunità nel CRM.</p></div>
    <div class="v5-method-card reveal"><span>04 / ORGANIZZAZIONE</span><h3>Ruoli <em>senza sovrapposizioni.</em></h3><p>Il setter qualifica e prenota. Il sales vende. Il manager guida il sistema.</p></div>
  </div>
  <a class="v5-method-link" href="/metodo-commerciale/">Approfondisci il mio metodo <span aria-hidden="true">↗</span></a>
</div></section>
<section class="v5-section v5-projects" id="progetti" aria-labelledby="v5-project-title"><div class="container">
  <div class="v5-heading reveal"><div><span class="v5-kicker">03 / LE REALTÀ CHE HO CREATO</span><h2 id="v5-project-title">Dalle aziende<br><em>ai nuovi talenti.</em></h2></div><p>Due realtà differenti, una visione comune: rendere il lavoro commerciale più efficace.</p></div>
  <div class="v5-project-grid">
    <article class="v5-project-card v5-project-rf reveal"><span class="v5-project-label">01 / PER LE AZIENDE</span><div class="v5-project-content"><h3>Recupero<br>Fatturato<span>.</span></h3><p>Recuperiamo opportunità già presenti nel CRM: <strong>lead non convertiti, no-show, trattative ferme</strong>. Un reparto operativo di setting e sales, focalizzato sul valore già acquisito.</p><a href="https://recuperofatturato.com/" target="_blank" rel="noopener noreferrer" class="v5-project-link">Visita Recupero Fatturato <span aria-hidden="true">↗</span></a></div></article>
    <article class="v5-project-card v5-project-mv reveal"><span class="v5-project-label">02 / FORMAZIONE E OPPORTUNITÀ</span><div class="v5-project-content"><h3>Metodo<br>Vendita<span>.</span></h3><p>Una realtà nata da poco che <strong>forma e sviluppa nuovi talenti commerciali</strong>, con competenze pratiche e un percorso verso l'inserimento nelle aziende partner.</p><a href="https://metodovendita.it/" target="_blank" rel="noopener noreferrer" class="v5-project-link">Visita MetodoVendita <span aria-hidden="true">↗</span></a></div></article>
  </div>
</div></section>
<section class="v5-section v5-sectors" aria-labelledby="v5-sectors-title"><div class="container v5-sectors-wrap"><div class="reveal"><span class="v5-kicker">04 / ALTRE ESPERIENZE</span><h2 id="v5-sectors-title">Un metodo.<br><em>Mercati diversi.</em></h2><p>Strutture commerciali e funnel adattati alle specificità di ogni settore.</p><a href="/chi-sono/" class="v5-subtle-link">Chi è Alan Collura <span>↗</span></a></div><div class="v5-sector-chips reveal"><span>Fitness &amp; Beauty</span><span>Menopausa &amp; Salute</span><span>Ecommerce</span><span>Marketing</span><span>Studi dentistici</span><span>Osteopati</span><span>Fisioterapisti</span><span>Immobiliare</span><span>Concessionarie</span><span>Formazione online</span></div></div></section>
<section class="v5-contact-band" aria-labelledby="v5-contact-title"><div class="container v5-contact-inner"><div><span class="v5-kicker">05 / CONTATTI</span><h2 id="v5-contact-title">Parliamo di <em>crescita.</em></h2><p>Una conversazione diretta, senza passaggi inutili.</p></div><a href="https://wa.me/34692306638" class="v5-btn v5-btn-white" target="_blank" rel="noopener noreferrer">Scrivimi su WhatsApp <span aria-hidden="true">↗</span></a></div></section>
'''

PROJECTS = r'''
<section class="v5-section v5-projectpage"><div class="container"><div class="v5-project-grid">
<article class="v5-project-card v5-project-rf" id="recupero-fatturato"><span class="v5-project-label">01 / FOUNDER · PER LE AZIENDE</span><div class="v5-project-content"><h2>Recupero<br>Fatturato<span>.</span></h2><p><strong>Il CRM non è vuoto. È pieno di fatturato fermo.</strong></p><p>Valorizziamo lead già acquisiti: contatti non lavorati, no-show, trattative bloccate e vecchie opportunità. Un intervento operativo su <strong>setting, sales, processi e KPI</strong>, senza dover partire per forza da nuove campagne.</p><a class="v5-project-link" href="https://recuperofatturato.com/" target="_blank" rel="noopener noreferrer">Apri recuperofatturato.com ↗</a><a class="v5-more-link" href="/approfondimenti/recupero-lead-crm/">Come funziona il recupero CRM →</a></div></article>
<article class="v5-project-card v5-project-mv" id="metodovendita"><span class="v5-project-label">02 / FOUNDER · PER I TALENTI</span><div class="v5-project-content"><h2>Metodo<br>Vendita<span>.</span></h2><p><strong>Formiamo e creiamo nuovi talenti commerciali.</strong></p><p>Un progetto recente dedicato alla formazione di sales online, con pratica, confronto e preparazione all'inserimento in aziende partner. Un ponte tra <strong>competenze commerciali e opportunità professionali</strong>.</p><a class="v5-project-link" href="https://metodovendita.it/" target="_blank" rel="noopener noreferrer">Apri metodovendita.it ↗</a><a class="v5-more-link" href="/formazione-venditori/">Il mio approccio alla formazione →</a></div></article>
</div><div class="v5-project-note"><span class="v5-kicker">UN'ESPERIENZA CHE HA SEGNATO IL PERCORSO</span><h2>Inglese per Negati.</h2><p>La crescita commerciale di Inglese per Negati fino al traguardo aziendale di circa <strong>1 milione di euro al mese</strong> ha segnato il mio passaggio dalla vendita alla direzione.</p><a class="v5-subtle-link" href="/alan-collura-inglese-per-negati/">Leggi il caso →</a></div></div></section>
'''

CONTACTS = r'''
<section class="v5-section v5-contact-page"><div class="container"><div class="v5-contact-heading"><h2>Parliamo direttamente.</h2><p>Per collaborazioni, progetti o informazioni commerciali scegli il canale giusto.</p></div><div class="v5-contact-grid">
<a class="v5-contact-tile v5-contact-feature" href="https://wa.me/34692306638" target="_blank" rel="noopener noreferrer"><span>01 / WHATSAPP LAVORO</span><strong>+34 692 306 638</strong><small>Scrivimi su WhatsApp</small><b>↗</b></a>
<a class="v5-contact-tile" href="mailto:info@recuperofatturato.com"><span>02 / RECUPERO FATTURATO</span><strong>info@recuperofatturato.com</strong><small>Per aziende, CRM e direzione commerciale</small><b>↗</b></a>
<a class="v5-contact-tile" href="mailto:info@metodovendita.it"><span>03 / METODO VENDITA</span><strong>info@metodovendita.it</strong><small>Per formazione e nuovi talenti sales</small><b>↗</b></a>
</div></div></section>
'''

METHOD = r'''
<section class="v5-section v5-method-article"><div class="container"><div class="v5-heading reveal"><div><span class="v5-kicker">IL METODO / ARCHITETTURA COMMERCIALE</span><h2>Misurare meglio.<br><em>Assegnare meglio. Vendere meglio.</em></h2></div><p>La direzione commerciale deve ottimizzare l'intero percorso cliente, non un singolo numero isolato.</p></div><div class="v5-method-grid v5-method-grid-light">
<div class="v5-method-card"><span>01 / VPL CLEAN</span><h3>Valore per lead <em>reale.</em></h3><p>Guardo il valore effettivamente prodotto da ogni lead, distinguendo fatturato dichiarato, incassato e qualità del dato.</p></div>
<div class="v5-method-card"><span>02 / CONVERSION RATE</span><h3>Funnel <em>completo.</em></h3><p>Lead → contatto → appuntamento → presentazione → vendita → incasso. Il book rate da solo non basta.</p></div>
<div class="v5-method-card"><span>03 / OUTBOUND</span><h3>Ogni opportunità <em>conta.</em></h3><p>Segmentazione, tempi di risposta, follow-up, riattivazione e recupero dei lead nel CRM.</p></div>
<div class="v5-method-card"><span>04 / DIVISIONE DEI RUOLI</span><h3>Specializzazione <em>operativa.</em></h3><p>Il setter non fa il sales. Il sales non fa il setter. I manager misurano, formano e correggono.</p></div>
</div><div class="v5-method-summary"><h3>La metrica decisiva non è una singola percentuale.</h3><p>È la capacità del reparto commerciale di generare incassi sostenibili, con ruoli chiari e una pipeline leggibile.</p><a class="v5-subtle-link" href="/approfondimenti/kpi-commerciali/">Approfondisci i KPI commerciali ↗</a></div></div></section>
'''

BIO = r'''
<section class="v5-section v5-bio-page"><div class="container v5-bio-grid"><div class="v5-bio-image"><img src="/assets/alan-collura-conferenza.webp" width="1000" height="1250" alt="Alan Collura relatore a una conferenza sulla formazione commerciale" loading="lazy"></div><div class="v5-bio-text"><span class="v5-kicker">CHI È ALAN COLLURA</span><h2>Prima Sales.<br>Poi Direttore.<br><em>Oggi Founder.</em></h2><p>Ho iniziato vendendo, con risultati da 20.000 € mensili. Poi sono passato alla gestione dei team, contribuendo alla crescita commerciale di Inglese per Negati fino a circa 1M€ mensile del business.</p><p>Oggi lavoro con aziende e team in <strong>Italia, Spagna e Stati Uniti</strong>, su direzione commerciale, funnel, outbound, processi e performance.</p><p>Ho fondato <a href="/progetti/#recupero-fatturato">Recupero Fatturato</a> e <a href="/progetti/#metodovendita">MetodoVendita</a>: due modi diversi di investire nella qualità delle vendite.</p><a class="v5-subtle-link" href="/la-mia-storia/">Il mio percorso completo ↗</a></div></div></section>
'''

STORY = r'''
<section class="v5-section v5-story-page"><div class="container"><div class="v5-story-entry" id="sales"><span class="v5-story-count">01</span><div><span class="v5-kicker">SALES / LE ORIGINI</span><h2>20.000 € al mese.<br><em>La scuola delle vendite.</em></h2><p>Ho iniziato sul campo: trattative, negoziazione, obiezioni, ascolto e follow-up. Ho imparato a misurare la qualità del lavoro e a crescere attraverso i risultati.</p></div></div>
<div class="v5-story-entry" id="inglese-per-negati"><span class="v5-story-count">02</span><div><span class="v5-kicker">DIREZIONE / LA SVOLTA</span><h2>Dalla call al <em>reparto.</em></h2><p>L'esperienza in <strong>Inglese per Negati</strong> mi ha portato dalla performance individuale alla gestione di processi, formazione, team e KPI, durante la crescita del business fino a circa <strong>1 milione di euro al mese</strong>. Un traguardo del progetto e delle persone coinvolte.</p><a class="v5-subtle-link" href="/alan-collura-inglese-per-negati/">Leggi l'approfondimento ↗</a></div></div>
<div class="v5-story-entry" id="founder"><span class="v5-story-count">03</span><div><span class="v5-kicker">FOUNDER / LA DIREZIONE DI OGGI</span><h2>Business diversi.<br><em>Metodo condiviso.</em></h2><p>Dopo quell'esperienza ho guidato attività commerciali tra Italia, USA e Spagna, fino a creare <strong>Recupero Fatturato</strong> e <strong>MetodoVendita</strong>.</p><a class="v5-subtle-link" href="/progetti/">I progetti che seguo ↗</a></div></div></div></section>
'''

RESULTS = r'''
<section class="v5-section v5-results-page"><div class="container"><div class="v5-results-big"><div><span class="v5-kicker">BUSINESS PARTNER / RISULTATI COMPLESSIVI</span><strong>+60M€</strong><p>Fatturato generato nel tempo dalle aziende partner con cui ho collaborato. È un dato complessivo dei business, non un risultato attribuibile a una sola persona.</p></div><div><span class="v5-kicker">FORMAZIONE COMMERCIALE</span><strong>1.500+</strong><p>Venditori formati lungo il percorso professionale.</p></div><div><span class="v5-kicker">MERCATI PRINCIPALI</span><strong>03</strong><p>Italia, USA e Spagna: contesti in cui ho lavorato sulla gestione commerciale.</p></div></div><div class="v5-result-feature"><span class="v5-kicker">CASE STUDY / INGLESE PER NEGATI</span><h2>Da fase iniziale a <em>1M€ al mese.</em></h2><p>Un passaggio chiave della mia carriera nella costruzione e gestione della struttura commerciale. Il traguardo di fatturato si riferisce al progetto, grazie al contributo congiunto delle persone coinvolte.</p><a class="v5-subtle-link" href="/alan-collura-inglese-per-negati/">Il caso Inglese per Negati ↗</a></div></div></section>
'''

def apply_redesign(P):
    P['/'].update(title='Alan Collura | Founder e Direttore Commerciale',description='Chi è Alan Collura: da Sales a Founder e direttore commerciale. Business multimilionari, MetodoVendita, Recupero Fatturato, Italia, USA e Spagna.',body=HOME,faq=None)
    P['/progetti/'].update(title='Progetti Alan Collura | MetodoVendita e Recupero Fatturato',description='Scopri i progetti fondati da Alan Collura: Recupero Fatturato per valorizzare il CRM e MetodoVendita per formare nuovi talenti sales.',headline='Due progetti. <em>Due problemi reali da risolvere.</em>',lead='Recupero Fatturato per le aziende. MetodoVendita per i nuovi talenti commerciali.',body=PROJECTS)
    P['/contatti/'].update(title='Contatti Alan Collura | WhatsApp e Email Ufficiali',description='Contatta Alan Collura su WhatsApp +34 692 306 638. Email Recupero Fatturato e MetodoVendita per collaborazioni, sales e formazione.',headline='Parliamone. <em>Senza passaggi inutili.</em>',lead='WhatsApp per il lavoro, email dedicate per i progetti.',body=CONTACTS)
    P['/metodo-commerciale/'].update(title='Metodo Commerciale Alan Collura | VPL Clean, Funnel, Sales',description='Il metodo commerciale di Alan Collura: VPL Clean, conversion rate di tutto il funnel, outbound, gestione CRM e divisione di ruoli tra setter e sales.',headline='I risultati non si sperano. <em>Si costruiscono.</em>',lead='VPL Clean, funnel end-to-end, outbound e ruoli chiari. Un approccio operativo alla direzione commerciale.',body=METHOD,faq=None)
    P['/chi-sono/'].update(title='Chi è Alan Collura? | Biografia di un Founder e Direttore Commerciale',description='Chi è Alan Collura: da sales da 20.000 € al mese a direttore commerciale e founder, tra Italia, Spagna e USA. Biografia e progetti.',headline='Alan Collura. <em>Dalle vendite al business.</em>',lead='Sales, direzione commerciale e impresa. Un percorso costruito sul campo.',body=BIO)
    P['/la-mia-storia/'].update(title='La storia di Alan Collura | Sales, Direttore Commerciale, Founder',description='Il percorso di Alan Collura: Sales da 20.000 euro mensili, direzione commerciale in Inglese per Negati e founder di MetodoVendita e Recupero Fatturato.',headline='Da Sales. <em>A Direttore. A Founder.</em>',lead='Tre fasi di un percorso, con la vendita sempre al centro.',body=STORY)
    P['/risultati/'].update(title='Risultati Alan Collura | 60M€, 1.500+ Venditori e 3 Mercati',description='Percorso e risultati raccontati da Alan Collura: oltre 60M€ complessivi dei business partner, 1.500+ venditori formati, Italia, USA e Spagna.',headline='I numeri hanno senso. <em>Quando hanno contesto.</em>',lead='I dati dei business e dei team con cui ho lavorato: senza attribuzioni fuorvianti.',body=RESULTS)
    # Keep the long-form articles indexed and accessible as editorial content.
    P['/direttore-commerciale/']['description']='Cosa fa un direttore commerciale: KPI, VPL Clean, conversion rate end-to-end, team setter e sales, outbound e processi, secondo Alan Collura.'
    P['/approfondimenti/kpi-commerciali/']['description']='KPI commerciali: VPL Clean, conversion rate dell’intero funnel, incassato, show-up, outbound e gestione dei ruoli sales e setter.'
