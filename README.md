# AlanCollura.com — Fix mobile V8 (12 novembre 2026)

Questa versione corregge la deformazione della fotografia nel primo schermo su Safari iPhone: la foto è sempre un elemento IMG con object-fit:cover e zoom CSS uniforme. Il canvas trasparente produce soltanto il vortice.

Per pubblicare: crea un nuovo deployment su Vercel caricando il contenuto di questa cartella (index.html, assets/, pagine e vercel.json) nella ROOT del progetto.

Per verificare: in Safari su iPhone apri https://alancollura.com/?v=8 dopo il deployment. Se si vede ancora la foto distorta, il deployment non è stato applicato oppure è servita una versione precedente dalla cache. Controlla che il sorgente HTML richiami cinematic.css?v=8 e cinematic.js?v=8.

La ZIP contiene tutte le pagine e gli asset precedenti. SEO e consenso GA4 invariati. Non viene effettuata alcuna pubblicazione dal file ZIP.
