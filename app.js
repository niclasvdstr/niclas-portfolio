/* =========================================================
   Zentrale Konfiguration
   Telefonnummer und E-Mail werden hier EINMAL gepflegt.
   ========================================================= */
const CONFIG = {
  // Telefonnummer mit Ländervorwahl, nur Ziffern (z. B. 4915112345678)
  whatsappNumber: "4915129686979",
  // Optionale vorformulierte WhatsApp-Nachricht (leer lassen = keine)
  whatsappMessage: "",

  email: "info@niclasvanderstraeten.de",
  // Optionaler Betreff / Text für die E-Mail (leer lassen = keine)
  emailSubject: "",
  emailBody: "",

  calendlyUrl: "https://calendly.com/niclasvdstr/kostenloses-erstgespraech",
  noviqUrl: "https://www.vdsolutions.ai",
  immobilienUrl: "https://www.vanderstraeten-immobilien.de",
};

/* =========================================================
   Link-Daten
   ========================================================= */
const mainLinks = [
  {
    title: "Erstgespräch buchen",
    subtitle: "Kostenlos & unverbindlich",
    url: CONFIG.calendlyUrl,
    type: "calendly",
    variant: "primary",
    image: "assets/Calendly-Logo.png",
  },
  {
    title: "VDSolutions",
    subtitle: "Website bald verfügbar",
    url: CONFIG.noviqUrl,
    type: "website",
    variant: "glass",
    image: "assets/VDSolutions-Logo.png",
    // Solange true: reine Ankündigung, nicht klickbar (nach Launch entfernen)
    soon: true,
  },
];

const realEstateLinks = [
  {
    title: "VDS Immobilien",
    subtitle: "Ankauf & Vermittlung",
    url: CONFIG.immobilienUrl,
    type: "website",
    variant: "glass",
    image: "assets/VDS-Logo.png",
  },
];

// Reihenfolge = Priorität: LinkedIn zuerst (B2B-Kanal), dann die Content-Kanäle
const socialLinks = [
  { title: "LinkedIn", url: "https://www.linkedin.com/in/niclasvanderstraeten", icon: "linkedin" },
  { title: "Instagram", url: "https://www.instagram.com/niclasvdstr?igsh=bXE1dXV2cnBzNm4y&utm_source=qr", icon: "instagram" },
  { title: "YouTube", url: "https://www.youtube.com/@niclasvdstr", icon: "youtube" },
  { title: "TikTok", url: "https://www.tiktok.com/@niclasvdstr?_r=1&_t=ZG-97pdwhVVfWa", icon: "tiktok" },
];

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
  // Dreilagig wie die Originalmarke: Cyan versetzt nach oben, Magenta nach
  // unten, das schwarze Zeichen deckend darüber.
  tiktok:
    '<svg viewBox="0 0 24 24"><g fill="currentColor"><path class="tiktok-cyan" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z" transform="translate(-1 -1)"/><path class="tiktok-magenta" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z" transform="translate(1 1)"/><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z"/></g></svg>',
};

/* =========================================================
   Rendering
   ========================================================= */
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
  const mainEl = document.getElementById("main-links");
  const realEstateEl = document.getElementById("realestate-links");
  const socialEl = document.getElementById("socials-list");

  mainLinks.forEach((l) => mainEl.append(createButton(l)));
  realEstateLinks.forEach((l) => realEstateEl.append(createButton(l)));
  socialLinks.forEach((l) => socialEl.append(createSocial(l)));

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
}

render();
