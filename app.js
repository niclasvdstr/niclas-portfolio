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
  // Unterseite auf VDSolutions mit der ausführlichen Vorstellung.
  // Solange leer, steht der Verweis im Über-mich-Dialog da, ist aber nicht klickbar.
  aboutUrl: "",
  noviqUrl: "https://www.vdsolutions.ai",
};

/* =========================================================
   Link-Daten
   ========================================================= */
const mainLinks = [
  {
    title: { de: "Kostenloses Erstgespräch", en: "Free intro call" },
    url: CONFIG.calendlyUrl,
    type: "calendly",
    // Pille statt Kachel: eine Zeile, Pfeil rechts, kein Logo
    variant: "cta",
  },
  {
    title: "VDSolutions",
    // Das Logo ist die Beschriftung; title bleibt als Bildtext
    logo: "assets/vdsolutions-logo-weiss.webp",
    url: CONFIG.noviqUrl,
    type: "website",
    // Dunkle Pille: gleiche Form wie der Termin-Button, aber ohne Blau —
    // das bleibt dem Termin vorbehalten
    variant: "dark",
    // Solange true: reine Ankündigung, nicht klickbar (nach Launch entfernen)
    soon: true,
  },
];

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
   ========================================================= */
const VOICES = [
  { poster: "", video: "", name: "", company: "" },
  { poster: "", video: "", name: "", company: "" },
  { poster: "", video: "", name: "", company: "" },
];

/* =========================================================
   Texte auf Englisch
   Deutsch steht im HTML (data-i18n-Schlüssel), damit die Seite auch ohne
   JavaScript vollständig ist. Hier liegen beide Sprachen, damit der Schalter
   in beide Richtungen wechseln kann.
   ========================================================= */
const TEXT = {
  de: {
    skip: "Zum Inhalt springen",
    founder: "Gründer",
    about: "Über mich",
    role: "KI-Beratung",
    services: "Ich schaffe mit KI messbaren Wert in Ihrem Unternehmen",
    imprint: "Impressum",
    privacy: "Datenschutz",
    aboutTitle: "Vom Fitnessstudio zur KI-Beratung",
    close: "Schließen",
    t0: "Einstieg als Fitnesstrainer",
    t1: "Fitnesstrainer B-Lizenz",
    t2: "Quereinstieg Immobilienbüro",
    t3: "Vertrieb als Makler",
    t4: "Gründung von VDSolutions",
    t5: "Vollzeit in der KI-Beratung",
    aboutMore: "Mehr über mich auf VDSolutions",
    voicesEyebrow: "Kundenstimmen",
    voicesTitle: 'Erfahrungen, die für sich <em class="voices__gold">sprechen.</em>',
    voicesLead: "Erfahren Sie <em>aus erster Hand</em>, wie unsere Kunden die Zusammenarbeit mit VDSolutions erleben.",
    voicesRegion: "Kundenvideos",
    voicesCarousel: "Karussell",
    voicesPrev: "Vorheriges Video",
    voicesNext: "Nächstes Video",
    voicesOf: "von",
    voicesPlaceholder: "Platzhalter",
    voicesSoon: "Video folgt in Kürze",
    voicesTitlePlaceholder: "Kundenstimme",
    voicesPlay: "Video abspielen",
  },
  en: {
    skip: "Skip to content",
    founder: "Founder",
    about: "About me",
    role: "AI Consulting",
    services: "I create measurable value with AI in your business",
    // Die Rechtstexte selbst bleiben deutsch — das sagt der Hinweis gleich mit
    imprint: "Legal notice (DE)",
    privacy: "Privacy (DE)",
    aboutTitle: "From the gym to AI consulting",
    close: "Close",
    t0: "Started as a fitness trainer",
    t1: "Fitness trainer B license",
    t2: "Career change to real estate",
    t3: "Sales as a broker",
    t4: "Founded VDSolutions",
    t5: "Full-time in AI consulting",
    aboutMore: "More about me on VDSolutions",
    voicesEyebrow: "Testimonials",
    voicesTitle: 'Experiences that speak for <em class="voices__gold">themselves.</em>',
    voicesLead: "Hear <em>first-hand</em> how our clients experience working with VDSolutions.",
    voicesRegion: "Customer videos",
    voicesCarousel: "carousel",
    voicesPrev: "Previous video",
    voicesNext: "Next video",
    voicesOf: "of",
    voicesPlaceholder: "Placeholder",
    voicesSoon: "Video coming soon",
    voicesTitlePlaceholder: "Testimonial",
    voicesPlay: "Play video",
  },
};

let lang = new URLSearchParams(location.search).get("lang") === "en" ? "en" : "de";
const t = (value) => (typeof value === "object" ? value[lang] : value);

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
  youtube:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814ZM9.545 15.568V8.432L15.818 12l-6.273 3.568Z"/></svg>',
  instagram:
    '<svg viewBox="0 0 24 24" fill="currentColor"><defs><linearGradient id="ig-gradient" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#ffdd55"/><stop offset="0.35" stop-color="#ff543e"/><stop offset="0.7" stop-color="#c837ab"/><stop offset="1" stop-color="#3f5bd9"/></linearGradient></defs><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069ZM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z"/></svg>',
  // Outline statt Vollfläche: sonst wiegt LinkedIn optisch schwerer als die
  // drei anderen Kanäle daneben.
  linkedin:
    '<svg viewBox="0 0 24 24"><rect x="1.1" y="1.1" width="21.8" height="21.8" rx="4.6" fill="none" stroke="currentColor" stroke-width="2.1"/><g fill="currentColor" transform="translate(12 12) scale(0.74) translate(-12 -12)"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286Z"/><path d="M5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065Z"/><path d="M7.119 20.452H3.555V9h3.564v11.452Z"/></g></svg>',
};

/* =========================================================
   Rendering
   ========================================================= */
const ARROW =
  '<svg class="cta__arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 12h13.5M13 6.5l5.5 5.5-5.5 5.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

function createButton({ title, subtitle, url, variant, icon, image, logo, type, soon }) {
  const li = document.createElement("li");
  if (variant === "cta" || variant === "dark") {
    // Angekündigtes ist kein Link: kein Fokus, kein Pfeil
    const el = document.createElement(soon ? "div" : "a");
    el.className = `cta${variant === "dark" ? " cta--dark" : ""}${soon ? " cta--soon" : ""}`;
    // Logo oder Schrift als Beschriftung
    const name = logo
      ? `<img class="cta__logo" src="${logo}" alt="" width="612" height="84" />`
      : '<span class="cta__label"></span>';
    if (soon) {
      el.setAttribute("aria-disabled", "true");
      el.innerHTML = name;
    } else {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.innerHTML = `${name}${ARROW}`;
    }
    if (logo) el.querySelector(".cta__logo").alt = t(title);
    li.append(el);
    return li;
  }
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
  titleEl.textContent = t(title);
  text.append(titleEl);

  if (subtitle) {
    const subEl = document.createElement("span");
    subEl.className = "btn__subtitle";
    subEl.textContent = t(subtitle);
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

  // Ohne href ist der Verweis sichtbar, aber weder klick- noch fokussierbar —
  // genau das Verhalten, das wir wollen, solange die Zielseite fehlt.
  const cta = document.getElementById("about-cta");
  if (CONFIG.aboutUrl) cta.href = CONFIG.aboutUrl;

  // Ein Druck neben den Dialog trifft das <dialog> selbst, nie seinen Inhalt.
  // pointerdown statt click: sonst schließt eine im Text begonnene Auswahl,
  // die außerhalb endet, den Dialog gleich wieder.
  dialog.addEventListener("pointerdown", (event) => {
    if (event.target === dialog) dialog.close();
  });
}

// Sprache anwenden: Texte, Kacheln, lang-Attribut, Schalterzustand. Die Wahl
// steht danach in der Adresse (?lang=en) — teilbar, und nichts landet auf
// dem Gerät.
function applyLanguage() {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = TEXT[lang][el.dataset.i18n];
  });
  // Nur feste Texte aus TEXT — nie Eingaben von außen
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    el.innerHTML = TEXT[lang][el.dataset.i18nHtml];
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    el.setAttribute("aria-label", TEXT[lang][el.dataset.i18nAria]);
  });
  // Kacheln einmal bauen, danach nur den Text tauschen: neu gebaut würden
  // sie ihre Einblendung wiederholen und kurz verschwinden
  const mainEl = document.getElementById("main-links");
  if (!mainEl.children.length) mainLinks.forEach((l) => mainEl.append(createButton(l)));
  [...mainEl.children].forEach((li, i) => {
    const l = mainLinks[i];
    const label = li.querySelector(".btn__title, .cta__label");
    if (label) label.textContent = t(l.title);
    const sub = li.querySelector(".btn__subtitle");
    if (sub) sub.textContent = t(l.subtitle);
  });

  const sw = document.getElementById("lang-switch");
  sw.setAttribute("aria-checked", String(lang === "en"));
  document.querySelectorAll("[data-lang-label]").forEach((el) => {
    el.classList.toggle("is-active", el.dataset.langLabel === lang);
  });

  updateVoiceTexts();

  const url = new URL(location.href);
  if (lang === "en") url.searchParams.set("lang", "en");
  else url.searchParams.delete("lang");
  history.replaceState(null, "", url);
}

function wireLanguage() {
  document.getElementById("lang-switch").addEventListener("click", () => {
    lang = lang === "en" ? "de" : "en";
    applyLanguage();
  });
  // Auch die Buchstaben daneben schalten — sie sehen anklickbar aus
  document.querySelectorAll("[data-lang-label]").forEach((el) => {
    el.addEventListener("click", () => {
      if (lang !== el.dataset.langLabel) {
        lang = el.dataset.langLabel;
        applyLanguage();
      }
    });
  });
}

/* =========================================================
   Kundenstimmen: Karussell
   ========================================================= */
const voices = { track: null, slides: [], dots: [], active: 0 };
const PLAY_ICON =
  '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8.5 5.6c0-.8.86-1.3 1.55-.9l9.1 5.6c.66.4.66 1.38 0 1.79l-9.1 5.6c-.7.42-1.55-.08-1.55-.9V5.6Z"/></svg>';
const reducedMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

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
          ${v.poster ? `<img class="voice__poster" src="${v.poster}" alt="" loading="lazy" />` : ""}
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
  const T = TEXT[lang];
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
applyLanguage();
wireLanguage();
wireAboutDialog();
