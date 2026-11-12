# Alan Collura — Cinematic Scroll V7 (fix iPhone)

Aggiornamento dell'ultima versione V6 senza cambiare le foto, la struttura commerciale, i loghi o i contenuti SEO.

## Correzioni
- Immagine originale con proporzioni corrette su smartphone.
- Animazione scorrimento native desktop e scroll touch sul sito pubblicato.
- Gesti touch sulla prima schermata collegati direttamente al progresso del video-scrub (anche in visualizzatori che non comunicano lo scroll nativo alla pagina).
- Barra di avanzamento trascinabile con dito per avanzare/riavvolgere.
- Link di prosecuzione dopo il vortice.
- Rispetto del sistema Riduci movimento: avvia le animazioni soltanto quando l'utente tocca/scorre intenzionalmente sulla scena.
- Cache busting degli script e stili V7.

## Importante per iPhone
Le preview HTML aperte all'interno di ChatGPT / anteprima File iOS potrebbero non autorizzare JavaScript. In tal caso nessuna animazione HTML può funzionare dalla preview del file: per provare lo scroll reale su iPhone apri la pagina **tramite un URL HTTPS** (ad esempio in preview su Vercel) in Safari. Non si tratta di un problema dello zoom: è una limitazione del visualizzatore. In Safari pubblicato la pagina riceve normalmente eventi touch e scroll. Questa versione aggiunge in più un controllo manuale tramite trascinamento sulla scena e sulla barra.

Nessun cambiamento apportato al sito online.
