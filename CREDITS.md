# Verwendete Fremdinhalte

Nachweis aller Inhalte, die nicht selbst erstellt wurden — damit bei einer
Nachfrage belegbar ist, woher sie stammen und unter welcher Lizenz sie hier
verwendet werden.

## Schriftart

**Instrument Sans** (variabel, normal und kursiv, Gewichte 400–700) — `assets/schriften/instrument-sans-*.woff2`
Copyright 2022 The Instrument Sans Project Authors, https://github.com/Instrument/instrument-sans
Lizenz: SIL Open Font License 1.1 — Volltext in [`assets/schriften/OFL-InstrumentSans.txt`](assets/schriften/OFL-InstrumentSans.txt)
Die Dateien werden vom eigenen Server ausgeliefert, nicht über die Google
Fonts API. Dadurch fließt beim Seitenaufruf keine IP-Adresse an einen
Drittanbieter ab (vgl. LG München I, 20.01.2022 – 3 O 17493/20).

## Icons

Die Social-Media-Icons (YouTube, Instagram, LinkedIn) liegen als
Inline-SVG in `app.js` und entsprechen den Pfaddaten aus
[Simple Icons](https://github.com/simple-icons/simple-icons) (CC0 1.0
Universal / Public Domain). Das Instagram-Icon ist um einen eigenen
Farbverlauf ergänzt.

Die übrigen Icons (Aktenkoffer, Chevron, Pfeil, Kreuz, Briefumschlag, die
Wechsel- und Zurück-Pfeile am Markenwechsler sowie Stoppuhr, Trichter,
Kreislauf-Pfeile und Kalender in der Speed2Lead-Liste) sind schlichte,
selbst gesetzte SVG-Pfade im Stil generischer Strichsymbole.

**Markenrecht:** Die Wort-/Bildmarken YouTube, Instagram und LinkedIn
gehören den jeweiligen Inhabern. Sie werden hier ausschließlich als Hinweis auf
die eigenen Profile bei diesen Diensten verwendet (zulässige Benutzung als
Bestimmungshinweis, § 23 Abs. 1 Nr. 2 und 3 MarkenG).

## Kundenlogos

`assets/referenzen/vdsolutions/*.webp` — Logos von MMD Golf, Laura Hess
Social Media Agentur, Fast Motors, Ernst Kröger, Maik Scholz
Immobilienmakler, balance pilates, pure quality, Brinker & Heimann,
Hausärztliche Gemeinschaftspraxis Dr. med. Lorenz & Dr. med. Jahnke,
Restaurant Buon Gusto, KFZ-Meisterbetrieb Autohaus Glasstadt und madika
Social Media Agentur im Laufband der VDSolutions-Ansicht. Vom Inhaber
bereitgestellt (`quellen/referenzen/vdsolutions/`); die Marken gehören den
jeweiligen Unternehmen. Zugeschnitten und als WebP gespeichert
(`quellen/skripte/referenzen-vdsolutions_erzeugen.js`); auf dem dunklen
Grund per CSS einfarbig weiß dargestellt.

`assets/referenzen/speed2lead/*.webp` — Referenzlogos von Speed2Lead:
Hochbauer Immobilien, Kreativ. Webdesign, Lukas Wegerer Personal Coach,
Sabine Neumann Immobilienmaklerin, Kluger Werbeagentur, Paul Kempf &
Partner, MMD Golf und Maik Scholz Immobilienmakler im Laufband der
Speed2Lead-Ansicht. Vom Inhaber bereitgestellt
(`quellen/referenzen/speed2lead/`); die Marken gehören den jeweiligen
Unternehmen. Einfarbig umgesetzt
(`quellen/skripte/referenzen-speed2lead_erzeugen.js`), auf dem dunklen
Grund per CSS weiß dargestellt.

## Platzhalter-Vorschaubilder

`assets/kundenstimmen/platzhalter-*.webp` — KI-generierte Bilder (ChatGPT,
Originale in `quellen/kundenstimmen/`) als vorläufige Vorschaubilder der
Kundenstimmen. Sie zeigen keine echten Kunden und tragen auf der Seite das
Schild „Platzhalter“, bis echte Videos da sind.

## Eigene Inhalte

- `assets/fotos/niclas-buehne-800.webp`, `assets/fotos/niclas-buehne-1200.webp`
  — Bühnenfoto oben auf der Seite (seit 25.10.2026 mit blauem Bühnenlicht),
  unten ausgeblendet (`quellen/skripte/buehnenfoto_erzeugen.js`);
  `assets/fotos/niclas-profil.jpg` — das frühere Bühnenfoto quadratisch als
  Profilbild für Suchmaschinen. Originale: `quellen/fotos/`. Die Rechte liegen vor, eine Urhebernennung ist nicht
  erforderlich (bestätigt am 19.10.2026).
- `assets/marken/vdsolutions/` — Logo im Header (eigenes Logo, Akzente
  in Kobalt umgefärbt), das VDS-Zeichen und das Calendly-Zeichen in Kobalt.
  `assets/marken/speed2lead/` — Logo (weiß/orange), das eigene
  Speed2Lead-Bildzeichen und das Calendly-Zeichen in Orange. Alle vom Inhaber
  geliefert, Originale in `quellen/marken/`. Das Calendly-Logo ist eine Marke
  der Calendly LLC und steht nur als Hinweis auf die Terminbuchung dort.
- Favicon und App-Icons (`favicon.svg`, `favicon.ico`, `apple-touch-icon.png`,
  `assets/icons/`) — eigenes NV-Monogramm, in Canva gestaltet (Originale in
  `quellen/icons/`, erzeugt mit `quellen/skripte/icons_erzeugen.js`).
- `assets/vorschau/link-vorschau.jpg` — Vorschaubild für geteilte Links
  (Bühnenfoto mit Name und Botschaft in Inter), in Canva gestaltet, Original
  in `quellen/vorschau/`. Mit einer Schrift erzeugte Grafiken fallen nicht
  unter die OFL (Präambel der Lizenz).
- Texte, Layout, CSS und JavaScript
