# niclasvanderstraeten.com

Linkseite von Niclas van der Straeten mit zwei Marken: **VDSolutions**
(Standard, Petrol) und **Speed2Lead** (Orange, `?brand=speed2lead`).
Reines HTML/CSS/JS ohne Build. Jeder Push auf `main` geht über Vercel live.

## Ordnerstruktur

```
index.html            Startseite
impressum.html        Impressum
datenschutz.html      Datenschutzerklärung
styles.css            Gestaltung der Startseite
legal.css             Zusatz für Impressum und Datenschutz
app.js                Links, Buttons, Markenwechsel, Kundenstimmen
                      (Links und Calendly-Adressen ganz oben in CONFIG)

favicon.svg / .ico    Browser-Icon (NV)          ─┐ müssen im Hauptordner
apple-touch-icon.png  Homescreen-Icon (iPhone)    │ liegen, so suchen
site.webmanifest      Web-App-Angaben (Android)   │ Browser und Google
robots.txt            Regeln für Suchmaschinen    │ danach
sitemap.xml           Seitenliste für Google     ─┘
vercel.json           Hosting-Einstellungen (saubere Adressen ohne .html)
CREDITS.md            Nachweis aller fremden Inhalte (Logos, Schrift, Bilder)

assets/               alles, was die Seite online lädt
  fotos/              Bühnenfoto (800/1200 px) und Profilbild für Google
  marken/
    vdsolutions/      logo.webp · zeichen.webp · calendly.webp
    speed2lead/       logo.webp · zeichen.webp · calendly.webp
  referenzen/
    vdsolutions/      Kundenlogos im Laufband (VDSolutions)
    speed2lead/       Kundenlogos im Laufband (Speed2Lead)
  kundenstimmen/      Vorschaubilder der Videos (noch Platzhalter)
  icons/              App-Icons 192/512 px und Favicon 48 px
  schriften/          Instrument Sans + Lizenz
  vorschau/           Bild für geteilte Links (WhatsApp, LinkedIn …)

quellen/              Originale und Skripte — NICHT online (gitignored)
                      siehe quellen/README.md
```

## Neue Bilder einsetzen

Original in den passenden Ordner unter `quellen/` legen und das zugehörige
Skript aus `quellen/skripte/` laufen lassen — es schreibt die fertige Datei
nach `assets/`. Wie die Marken-Dateien entstanden sind, steht in
`quellen/README.md`.

## Vorschau lokal

`node .claude/server.js` → http://localhost:5599 (bildet die sauberen
Adressen von Vercel nach).
