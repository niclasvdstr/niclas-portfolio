# Verwendete Fremdinhalte

Nachweis aller Inhalte, die nicht selbst erstellt wurden — damit bei einer
Nachfrage belegbar ist, woher sie stammen und unter welcher Lizenz sie hier
verwendet werden.

## Schriftart

**Instrument Sans** (variabel, normal und kursiv, Gewichte 400–700) — `assets/fonts/instrument-sans-*.woff2`
Copyright 2022 The Instrument Sans Project Authors, https://github.com/Instrument/instrument-sans
Lizenz: SIL Open Font License 1.1 — Volltext in [`assets/fonts/OFL-InstrumentSans.txt`](assets/fonts/OFL-InstrumentSans.txt)
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

`assets/logos/*.webp` — Logos von MMD Golf, Laura Hess Social Media
Agentur, Fast Motors, Ernst Kröger, Maik Scholz Immobilienmakler, balance
pilates, pure quality, Brinker & Heimann, Hausärztliche
Gemeinschaftspraxis Dr. med. Lorenz & Dr. med. Jahnke, Restaurant Buon
Gusto, KFZ-Meisterbetrieb Autohaus Glasstadt und madika Social Media
Agentur im Laufband oben im Kundenstimmen-Blatt. Vom Inhaber bereitgestellt; die Marken gehören
den jeweiligen Unternehmen. Für die Seite zugeschnitten und als WebP
gespeichert (`assets/_originals/kundenlogos_render.js`); auf dem dunklen
Grund per CSS einfarbig weiß dargestellt.

`assets/logos-s2l/*.webp` — Referenzlogos von Speed2Lead: Hochbauer
Immobilien, Kreativ. Webdesign, Lukas Wegerer Personal Coach, Sabine Neumann
Immobilienmaklerin, Kluger Werbeagentur, Paul Kempf & Partner, MMD Golf und
Maik Scholz Immobilienmakler im Laufband oben im weißen Speed2Lead-Blatt. Vom
Inhaber bereitgestellt (`assets/Logos von Referenzunternehmen/Referenzen
Speed2Lead/`); die Marken gehören den jeweiligen Unternehmen. Einfarbig
dunkel umgesetzt, Abstufungen mehrfarbiger Logos als Grautöne
(`assets/_originals/referenzen-s2l_render.js`).

## Platzhalter-Vorschaubilder

`assets/voices/platzhalter-*.webp` — KI-generierte Bilder (ChatGPT) als
vorläufige Vorschaubilder der Kundenstimmen. Sie zeigen keine echten Kunden
und tragen auf der Seite das Schild „Platzhalter“, bis echte Videos da sind.

## Eigene Inhalte

- `assets/niclas-hero-800.webp`, `assets/niclas-hero-1200.webp` — Bühnenfoto
  randlos oben auf der Seite, unten ausgeblendet
  (`assets/_originals/niclas-hero_render.js`); `assets/niclas-avatar.webp` —
  dasselbe Foto im quadratischen Zuschnitt (Profilbild für Suchmaschinen).
  Die Rechte liegen vor, eine Urhebernennung ist nicht erforderlich
  (bestätigt am 19.10.2026).
- `assets/icons-btn/calendly.webp`, `assets/icons-btn/vds-icon.webp` — runde
  Zeichen in den Buttons: das Calendly-Logo (Marke der Calendly LLC, als
  Hinweis auf die Terminbuchung dort) und das eigene VDS-Zeichen (blaue
  Raute aus `assets/VDS-Logo.png.svg`)
- `assets/icons-btn/calendly-s2l.webp`, `assets/icons-btn/s2l-icon.webp` —
  dieselben Zeichen für den Speed2Lead-Modus: das Calendly-Logo in Grün
  und das eigene Speed2Lead-Bildzeichen (beide grün). Beide vom Inhaber geliefert
  (`assets/Speed2Lead/`), zugeschnitten mit
  `assets/_originals/speed2lead-icons_render.js`.
- `assets/logos-header/vdsolutions.webp`, `assets/logos-header/speed2lead.webp` —
  die Logos im Header. VDSolutions aus dem eigenen blauen Logo
  (`assets/_originals/vdsolutions-logo-blau-neu.png`), für den hellen Header
  mit dunklem Schriftzug (`vdsolutions-neu-dunkel.webp`);
  Speed2Lead seit 22.10.2026 in Grün (`assets/logos-header/speed2lead-gruen.webp`,
  aus der gelieferten `assets/_originals/speed2lead_green_flat.png`, nur auf
  den Inhalt beschnitten); die frühere orange Fassung (`speed2lead.webp`)
  stammt aus `assets/_originals/speed2lead-logo-dunkel_2172x724.png`. Erzeugt mit `assets/_originals/header-logos_render.js`.
- Favicon und App-Icons (`favicon.ico`, `apple-touch-icon.png`, `assets/icons/`) —
  der Buchstabe N in Inter (Copyright 2016 The Inter Project Authors, SIL OFL
  1.1) auf Anthrazit; `assets/og-image.jpg` — Bühnenfoto mit Name und Rolle in
  Inter. Mit der Schrift erzeugte Grafiken fallen nicht unter
  die OFL (Präambel der Lizenz).
- Texte, Layout, CSS und JavaScript
