/* =========================================================
   Zentrale Konfiguration
   Adressen und Links werden hier EINMAL gepflegt.
   ========================================================= */
const CONFIG = {
  email: "info@niclasvanderstraeten.com",
  // Optionaler Betreff / Text für die E-Mail (leer lassen = keine)
  emailSubject: "",
  emailBody: "",

  calendlyUrl: "https://calendly.com/niclasvdstr/kostenloses-erstgespraech",
  noviqUrl: "https://www.vdsolutions.ai",

  // Speed2Lead — HIER EINTRAGEN, sobald vorhanden. Solange leer, stehen die
  // Speed2Lead-Buttons sichtbar, aber nicht klickbar da. Für die Demo nie den
  // VDSolutions-Calendly-Link oben einsetzen: Speed2Lead hat einen eigenen Termin.
  speed2leadCalendlyUrl: "",
  // Eigenständige Speed2Lead-Landingpage
  speed2leadUrl: "",
};

/* =========================================================
   Marken
   VDSolutions ist der Standard und erscheint immer ohne Parameter.
   Speed2Lead zeigt der Wechsler über den Buttons oder ?brand=speed2lead.
   Texte und Inhalte beider Marken stehen im HTML (data-brand-only), die
   Farben in styles.css (Abschnitt „Markenwechsel“). Hier steht, was die
   Buttons brauchen: Beschriftung, Ziel, Zeichen. Ein Button ohne Ziel ist
   sichtbar, aber nicht klickbar.
   ========================================================= */
const BRANDS = {
  vdsolutions: {
    name: "VDSolutions",
    pageTitle: "Niclas van der Straeten · KI-Beratung",
    themeColor: "#141414",
    // Blaue Pille: der eine Termin-Button, der führt
    primary: {
      label: "Kostenloses Erstgespräch",
      url: CONFIG.calendlyUrl,
      badge: "assets/marken/vdsolutions/calendly.webp",
    },
    // Weiße Pille mit feiner Kontur — ruhig neben dem blauen Termin-Button
    secondary: {
      label: "Unsere Website besuchen",
      url: CONFIG.noviqUrl,
      badge: "assets/marken/vdsolutions/zeichen.webp",
      // Solange true: reine Ankündigung, nicht klickbar (nach Launch entfernen)
      soon: true,
    },
  },
  speed2lead: {
    name: "Speed2Lead",
    pageTitle: "Speed2Lead · Niclas van der Straeten",
    themeColor: "#141414",
    primary: {
      label: "Kostenloses Erstgespräch",
      url: CONFIG.speed2leadCalendlyUrl,
      badge: "assets/marken/speed2lead/calendly.webp",
    },
    secondary: {
      label: "Unsere Website besuchen",
      url: CONFIG.speed2leadUrl,
      badge: "assets/marken/speed2lead/zeichen.webp",
    },
  },
};
const DEFAULT_BRAND = "vdsolutions";

// Reihenfolge = Priorität: LinkedIn zuerst (B2B-Kanal), dann die Content-Kanäle.
// TikTok fehlt bewusst: der Kanal führt Reichweite hierher, nicht umgekehrt.
const socialLinks = [
  { title: "LinkedIn", url: "https://www.linkedin.com/in/niclasvanderstraeten", icon: "linkedin" },
  { title: "Instagram", url: "https://www.instagram.com/niclasvdstr?igsh=bXE1dXV2cnBzNm4y&utm_source=qr", icon: "instagram" },
  { title: "YouTube", url: "https://www.youtube.com/@niclasvdstr", icon: "youtube" },
];

/* =========================================================
   Kundenstimmen
   Pro Video: poster (Vorschaubild), video (Datei), name, company. Solange
   video fehlt, erscheint ein ausgewiesener Platzhalter. Keine erfundenen
   Namen oder Firmen eintragen, KI-Bilder nie als echte Kunden ausgeben.
   Die Vorschaubilder unten sind KI-generierte Platzhalter: Solange video
   leer ist, bleibt das Schild „Platzhalter“ darauf stehen.
   ========================================================= */
// posterS2l: eigenes Vorschaubild in der Speed2Lead-Ansicht (sonst wie poster)
const VOICES = [
  { poster: "assets/kundenstimmen/platzhalter-1.webp", video: "", name: "", company: "" },
  { poster: "assets/kundenstimmen/platzhalter-3.webp", posterS2l: "assets/kundenstimmen/platzhalter-2.webp", video: "", name: "", company: "" },
  { poster: "assets/kundenstimmen/platzhalter-2.webp", posterS2l: "assets/kundenstimmen/platzhalter-3.webp", video: "", name: "", company: "" },
];

/* =========================================================
   Texte für die Teile, die erst JavaScript baut (Kundenstimmen-Karussell).
   Alles andere steht direkt im HTML.
   ========================================================= */
const TEXT = {
  voicesRegion: "Kundenvideos",
  voicesCarousel: "Karussell",
  voicesOf: "von",
  voicesPlaceholder: "Platzhalter",
  voicesSoon: "Video folgt in Kürze",
  voicesTitlePlaceholder: "Kundenstimme",
  voicesPlay: "Video abspielen",
};

/* =========================================================
   SVG-Icons (dekorativ, aria-hidden, currentColor)
   ========================================================= */
const ICONS = {
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  "mail-outline":
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  chevron:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  // Auf der roten Fläche genügt das weiße Play-Dreieck
  youtube:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 4.6c0-1.06 1.15-1.72 2.07-1.19l11.4 6.6c.92.53.92 1.85 0 2.38l-11.4 6.6C8.15 19.52 7 18.86 7 17.8V4.6Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="currentColor"><defs><linearGradient id="ig-gradient" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#ffdd55"/><stop offset="0.35" stop-color="#ff543e"/><stop offset="0.7" stop-color="#c837ab"/><stop offset="1" stop-color="#3f5bd9"/></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>',
  // Nur das „in“: das Quadrat drumherum ist jetzt die Fläche des Knopfs
  linkedin:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Zm1.782 13.019H3.555V9h3.564v11.452Z"/></svg>',
};

/* =========================================================
   Rendering
   ========================================================= */
const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

const ARROW =
  '<svg class="cta__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13.5M13 6.5l5.5 5.5-5.5 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// Schloss statt Pfeil, solange der Zweitbutton noch keinen Link hat
const LOCK_SECONDARY =
  '<svg class="btn-secondary__lock" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><rect x="4.5" y="8.5" width="11" height="8" rx="2"/><path d="M7 8.5V6.5a3 3 0 0 1 6 0v2"/></svg>';
const ARROW_SECONDARY =
  '<svg class="btn-secondary__icon" viewBox="0 0 20 20" aria-hidden="true" focusable="false"><path d="M4 10h11m-4.5-4.5L15 10l-4.5 4.5" /></svg>';

// Termin- und Zweitbutton tragen den Inhalt beider Marken: links das runde
// Zeichen (zwei Bilder übereinander), darüber je Marke Beschriftung und
// Pfeil. Beim Wechsel blendet CSS um, setBrandLinks() tauscht das Ziel. So
// bleibt die Pille selbst stehen — kein Neuaufbau, kein Springen.
function createBrandButton(kind, labelOverride) {
  const primary = kind === "primary";
  const li = document.createElement("li");
  const el = document.createElement("a");
  el.className = `${primary ? "cta" : "btn-secondary"} has-badge`;
  el.dataset.brandButton = kind;

  // Hülle um die Bilder, damit Glanz und Innenkante darüber liegen können;
  // rein schmückend, der Button trägt seinen Namen als Text
  const badge = document.createElement("span");
  badge.className = "btn-badge";
  badge.setAttribute("aria-hidden", "true");
  el.append(badge);

  Object.entries(BRANDS).forEach(([id, brand]) => {
    const cfg = brand[kind];
    const img = document.createElement("img");
    img.className = "swap-fade";
    img.dataset.brandOnly = id;
    img.src = cfg.badge;
    img.alt = "";
    img.width = 168;
    img.height = 168;
    badge.append(img);

    const content = document.createElement("span");
    content.className = `btn-content btn-content--${id}`;
    content.dataset.brandOnly = id;
    const label = document.createElement("span");
    label.className = primary ? "cta__label" : "btn-secondary__label";
    label.textContent = labelOverride || cfg.label;
    content.append(label);
    content.insertAdjacentHTML("beforeend", primary ? ARROW : ARROW_SECONDARY + LOCK_SECONDARY);
    el.append(content);
  });

  li.append(el);
  return li;
}

// Ziel der Buttons für die aktive Marke. Ohne Ziel (oder solange „soon“)
// bleibt der Button sichtbar, ist aber kein Link: kein Fokus, kein Hüpfer.
function setBrandLinks(id) {
  document.querySelectorAll("[data-brand-button]").forEach((el) => {
    const cfg = BRANDS[id][el.dataset.brandButton];
    const live = Boolean(cfg.url) && !cfg.soon;
    if (live) {
      el.href = cfg.url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.removeAttribute("aria-disabled");
    } else {
      el.removeAttribute("href");
      el.removeAttribute("target");
      el.removeAttribute("rel");
      el.setAttribute("aria-disabled", "true");
    }
    el.classList.toggle(el.classList.contains("cta") ? "cta--soon" : "btn-secondary--soon", !live);
  });
}

function createButton({ title, subtitle, url, variant, icon, image, type, soon }) {
  const li = document.createElement("li");
  // "soon"-Kacheln sind reine Ankündigungen: kein Link, kein Fokus, kein Pfeil
  const a = document.createElement(soon ? "div" : "a");
  a.className = `btn btn--${variant}${soon ? " btn--soon" : ""}`;

  if (soon) {
    a.setAttribute("aria-disabled", "true");
  } else {
    a.href = url;

    // Externe Links (nicht mailto) in neuem Tab öffnen
    if (type !== "email") {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  }

  const iconSpan = document.createElement("span");
  iconSpan.setAttribute("aria-hidden", "true");
  if (image) {
    iconSpan.className = "btn__icon btn__icon--image";
    const img = document.createElement("img");
    img.src = image;
    img.alt = "";
    img.loading = "lazy";
    iconSpan.append(img);
  } else {
    iconSpan.className = `btn__icon btn__icon--${icon}`;
    iconSpan.innerHTML = ICONS[icon] || "";
  }

  const text = document.createElement("span");
  text.className = "btn__text";

  const titleEl = document.createElement("span");
  titleEl.className = "btn__title";
  titleEl.textContent = title;
  text.append(titleEl);

  if (subtitle) {
    const subEl = document.createElement("span");
    subEl.className = "btn__subtitle";
    subEl.textContent = subtitle;
    text.append(subEl);
  }

  a.append(iconSpan, text);

  if (!soon) {
    const chevron = document.createElement("span");
    chevron.className = "btn__chevron";
    chevron.setAttribute("aria-hidden", "true");
    chevron.innerHTML = ICONS.chevron;
    a.append(chevron);
  }

  li.append(a);
  return li;
}

function createSocial({ title, url, icon }) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.className = `social-btn social-btn--${icon}`;
  a.href = url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", title);

  const iconSpan = document.createElement("span");
  iconSpan.className = "social-btn__icon";
  iconSpan.setAttribute("aria-hidden", "true");
  iconSpan.innerHTML = ICONS[icon] || "";

  a.append(iconSpan);
  li.append(a);
  return li;
}

function render() {
  const socialEl = document.getElementById("socials-list");

  socialLinks.forEach((l) => socialEl.append(createSocial(l)));

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

// Das Porträt öffnet den Text über mich. Esc und der Backdrop-Klick schließen
// ihn; beides bringt <dialog> mit, sobald es modal geöffnet wird.
function wireAboutDialog() {
  const dialog = document.getElementById("about-dialog");
  const openBtn = document.getElementById("about-open");
  const closeBtn = document.getElementById("about-close");

  openBtn.addEventListener("click", () => dialog.showModal());
  closeBtn.addEventListener("click", () => dialog.close());

  // Ein Druck neben den Dialog trifft das <dialog> selbst, nie seinen Inhalt.
  // pointerdown statt click: sonst schließt eine im Text begonnene Auswahl,
  // die außerhalb endet, den Dialog gleich wieder.
  dialog.addEventListener("pointerdown", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

// Kopfleiste: ganz oben deckend, sobald gescrollt wird dunkles Glas
function wireHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const update = () => header.classList.toggle("is-scrolled", window.scrollY > 4);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

// Buttons bauen: oben beide, am Ende des dunklen Blatts nur der Termin-Button
function renderLinks() {
  document.getElementById("main-links").append(createBrandButton("primary"), createBrandButton("secondary"));
  document.getElementById("closing-links").append(createBrandButton("primary"));
  // Am Ende der Geschichte persönlicher formuliert, gleicher Termin
  document.getElementById("about-links")?.append(createBrandButton("primary", "Persönlich kennenlernen"));
}

/* =========================================================
   Markenwechsel
   Die Marke steht als data-brand am <html>; CSS blendet Inhalte um und
   lässt die Farben fließen. Hier passiert nur, was CSS nicht kann: Ziele
   der Buttons tauschen, Höhenunterschiede weich ausgleichen (sonst sprängen
   Buttons und Blatt), Adresse und Verlauf pflegen.
   ========================================================= */
const BRAND_MORPH = { duration: 480, easing: "cubic-bezier(0.32, 0.72, 0, 1)" };
// Schrumpft ein Bereich, rückt seine Kante erst nach, wenn der alte Inhalt
// größtenteils ausgeblendet ist — sonst schnitte sie eine noch sichtbare
// Zeile mittendurch (z. B. die zweite Zeile der Botschaft bei 320 px)
const BRAND_COLLAPSE = { ...BRAND_MORPH, delay: 140, fill: "backwards" };
// Blau und Grün treffen sich auf halbem Weg in einem dunklen Blaugrün, einer
// Farbe, die keiner der beiden Marken gehört. Termin-Buttons, Name und
// Play-Knöpfe verlieren genau dann kurz ihre Sättigung und werden eine Spur
// heller: Das Blau löst sich ins Neutrale auf, aus dem das Grün kommt. Der
// Tiefpunkt (80 ms) liegt dort, wo die Farbe gerade die Mitte durchläuft.
// (Seit 27.10.2026 Grün statt Orange; Ablauf und Dauer unverändert.)
const BRAND_DIP = {
  keyframes: [
    { filter: "saturate(1) brightness(1)" },
    { filter: "saturate(0.35) brightness(1.08)", offset: 0.4 },
    { filter: "saturate(1) brightness(1)" },
  ],
  options: { duration: 200, easing: "linear" },
};
const brandFromUrl = () =>
  new URLSearchParams(location.search).get("brand") === "speed2lead" ? "speed2lead" : DEFAULT_BRAND;

function applyBrand(id, { animate = true } = {}) {
  if (!BRANDS[id]) id = DEFAULT_BRAND;
  const root = document.documentElement;
  const morph = animate && root.dataset.brand !== id && !reducedMotion();
  // Bereiche, deren Inhalt je Marke unterschiedlich hoch ist: Höhe vor dem
  // Wechsel merken, danach von dort zur neuen Höhe gleiten. Läuft schon ein
  // Wechsel, startet der neue aus der aktuellen Zwischenhöhe.
  const slots = morph ? [...document.querySelectorAll(".swap-flow")] : [];
  const from = slots.map((el) => el.getBoundingClientRect().height);
  slots.forEach((el) => el._morph?.cancel());

  root.dataset.brand = id;
  setBrandLinks(id);
  // Vorschaubilder der Kundenstimmen je Marke
  document.querySelectorAll(".voice__poster").forEach((img) => {
    const src = img.getAttribute(`data-poster-${id}`);
    if (src && img.getAttribute("src") !== src) img.src = src;
  });
  document.querySelectorAll("[data-brand-target]").forEach((b) => {
    b.setAttribute("aria-pressed", String(b.dataset.brandTarget === id));
  });
  // Referenzlogos von Speed2Lead laden erst, wenn die Marke gebraucht wird —
  // dann aber alle, sonst tauchten im Laufband Logos erst beim Hereinlaufen auf
  if (id === "speed2lead") {
    document.querySelectorAll('.sheet-s2l img[loading="lazy"]').forEach((img) => { img.loading = "eager"; });
  }
  const brand = BRANDS[id];
  document.title = brand.pageTitle;
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", brand.themeColor);

  if (morph) {
    document.querySelectorAll(".cta[data-brand-button], .name, .voice__play").forEach((el) => {
      el._dip?.cancel();
      el._dip = el.animate(BRAND_DIP.keyframes, BRAND_DIP.options);
    });
  }

  slots.forEach((el, i) => {
    const to = el.getBoundingClientRect().height;
    if (Math.abs(to - from[i]) < 0.5) return;
    el.classList.add("is-morphing");
    const anim = el.animate([{ height: `${from[i]}px` }, { height: `${to}px` }], to < from[i] ? BRAND_COLLAPSE : BRAND_MORPH);
    el._morph = anim;
    anim.finished.then(() => {
      if (el._morph === anim) el.classList.remove("is-morphing");
    }, () => {});
  });
}

function wireBrandSwitch() {
  const status = document.getElementById("brand-status");
  document.querySelector(".brand-seg").addEventListener("click", (e) => {
    const next = e.target.closest("[data-brand-target]")?.dataset.brandTarget;
    if (!next || next === document.documentElement.dataset.brand) return;
    applyBrand(next);
    status.textContent = `Ansicht gewechselt: ${BRANDS[next].name}`;
    // Die Adresse merkt sich die Marke: Zurück führt zur vorigen Ansicht,
    // ein geteilter Link öffnet direkt Speed2Lead. Kein Neuladen, kein
    // Springen der Scrollposition.
    const url = new URL(location.href);
    if (next === DEFAULT_BRAND) url.searchParams.delete("brand");
    else url.searchParams.set("brand", next);
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    history.pushState({ brand: next }, "", url);
  });
  addEventListener("popstate", () => {
    const id = brandFromUrl();
    if (id === document.documentElement.dataset.brand) return;
    applyBrand(id);
    status.textContent = `Ansicht gewechselt: ${BRANDS[id].name}`;
  });
}

/* =========================================================
   Kundenstimmen: Karussell
   ========================================================= */
const voices = { track: null, slides: [], dots: [], active: 0 };
const PLAY_ICON =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.5 5.6c0-.8.86-1.3 1.55-.9l9.1 5.6c.66.4.66 1.38 0 1.79l-9.1 5.6c-.7.42-1.55-.08-1.55-.9V5.6Z"/></svg>';

function buildVoices() {
  voices.track = document.getElementById("voices-track");
  const dotsEl = document.getElementById("voices-dots");
  if (!voices.track) return;

  VOICES.forEach((v, i) => {
    const slide = document.createElement("div");
    slide.className = "voice";
    slide.setAttribute("role", "group");
    slide.innerHTML = `
      <div class="voice__inner">
        <div class="voice__media">
          ${v.poster ? `<img class="voice__poster" src="${v.poster}" data-poster-vdsolutions="${v.poster}" data-poster-speed2lead="${v.posterS2l || v.poster}" alt="" loading="lazy" />` : ""}
          ${v.video ? "" : '<span class="voice__badge"></span>'}
          <button type="button" class="voice__play">${PLAY_ICON}</button>
          <div class="voice__caption"><p class="voice__title"></p><p class="voice__sub"></p></div>
        </div>
      </div>`;
    const play = slide.querySelector(".voice__play");
    if (v.video) play.addEventListener("click", () => playVoice(i));
    else play.setAttribute("aria-disabled", "true");
    // Klick auf einen Nachbarn holt ihn in die Mitte
    slide.addEventListener("click", () => {
      if (i !== voices.active) goToVoice(i);
    });
    voices.track.append(slide);
    voices.slides.push(slide);

    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "voices__dot";
    dot.addEventListener("click", () => goToVoice(i));
    dotsEl.append(dot);
    voices.dots.push(dot);
  });

  document.getElementById("voices-prev").addEventListener("click", (e) => {
    if (e.currentTarget.getAttribute("aria-disabled") !== "true") goToVoice(voices.active - 1);
  });
  document.getElementById("voices-next").addEventListener("click", (e) => {
    if (e.currentTarget.getAttribute("aria-disabled") !== "true") goToVoice(voices.active + 1);
  });

  // Aktiv ist das Video, dessen Mitte der Bühnenmitte am nächsten liegt —
  // höchstens einmal pro Frame neu bestimmen
  let queued = false;
  voices.track.addEventListener("scroll", () => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      queued = false;
      setActiveVoice(nearestVoice());
    });
  }, { passive: true });
  addEventListener("resize", () => goToVoice(voices.active, false));

  // Beim Laden steht das mittlere Video im Fokus, ohne Animation
  goToVoice(Math.floor(VOICES.length / 2), false);
}

function nearestVoice() {
  const mid = voices.track.scrollLeft + voices.track.clientWidth / 2;
  let best = 0, dist = Infinity;
  voices.slides.forEach((el, i) => {
    const d = Math.abs(el.offsetLeft + el.offsetWidth / 2 - mid);
    if (d < dist) { dist = d; best = i; }
  });
  return best;
}

function goToVoice(i, smooth = true) {
  i = Math.max(0, Math.min(voices.slides.length - 1, i));
  const el = voices.slides[i];
  voices.track.scrollTo({
    left: el.offsetLeft + el.offsetWidth / 2 - voices.track.clientWidth / 2,
    behavior: smooth && !reducedMotion() ? "smooth" : "instant",
  });
  setActiveVoice(i);
}

function setActiveVoice(i) {
  if (i !== voices.active) {
    // Beim Wechsel läuft nichts im Hintergrund weiter
    voices.slides.forEach((el) => el.querySelector("video")?.pause());
  }
  voices.active = i;
  voices.slides.forEach((el, n) => {
    el.classList.toggle("is-active", n === i);
    el.classList.toggle("is-before", n < i);
    el.classList.toggle("is-after", n > i);
  });
  voices.dots.forEach((d, n) => {
    if (n === i) d.setAttribute("aria-current", "true");
    else d.removeAttribute("aria-current");
  });
  document.getElementById("voices-prev").setAttribute("aria-disabled", String(i === 0));
  document.getElementById("voices-next").setAttribute("aria-disabled", String(i === voices.slides.length - 1));
}

// Das Video lädt erst nach dem Klick — vorher nur das Vorschaubild
function playVoice(i) {
  const v = VOICES[i];
  const media = voices.slides[i].querySelector(".voice__media");
  let video = media.querySelector("video");
  if (!video) {
    video = document.createElement("video");
    video.className = "voice__video";
    video.src = v.video;
    if (v.poster) video.poster = v.poster;
    video.controls = true;
    video.playsInline = true;
    media.append(video);
  }
  video.play();
}

function updateVoiceTexts() {
  const T = TEXT;
  const stage = document.getElementById("voices-stage");
  if (!stage) return;
  stage.setAttribute("aria-label", T.voicesRegion);
  stage.setAttribute("aria-roledescription", T.voicesCarousel);
  const n = VOICES.length;
  voices.slides.forEach((el, i) => {
    const v = VOICES[i];
    el.setAttribute("aria-label", `${i + 1} ${T.voicesOf} ${n}`);
    el.querySelector(".voice__title").textContent =
      v.video && v.name ? v.name : `${T.voicesTitlePlaceholder} ${String(i + 1).padStart(2, "0")}`;
    el.querySelector(".voice__sub").textContent = v.video && v.company ? v.company : T.voicesSoon;
    const badge = el.querySelector(".voice__badge");
    if (badge) badge.textContent = T.voicesPlaceholder;
    el.querySelector(".voice__play").setAttribute("aria-label", v.video ? T.voicesPlay : T.voicesSoon);
  });
  voices.dots.forEach((d, i) => d.setAttribute("aria-label", `Video ${i + 1} ${T.voicesOf} ${n}`));
}

render();
buildVoices();
renderLinks();
updateVoiceTexts();
wireAboutDialog();
wireHeaderScroll();
applyBrand(brandFromUrl(), { animate: false });
wireBrandSwitch();
