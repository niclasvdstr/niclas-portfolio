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
    subtitle: "Wird gewartet...",
    url: CONFIG.noviqUrl,
    type: "website",
    variant: "glass",
    image: "assets/VDSolutions-Logo.png",
    // Solange true: reine Ankündigung, nicht klickbar (nach Launch entfernen)
    soon: true,
  },
];

// wa.me erwartet die Nummer international und ohne Sonderzeichen
function whatsappUrl(message) {
  const base = `https://wa.me/${CONFIG.whatsappNumber}`;
  const text = message || CONFIG.whatsappMessage;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

const realEstateLinks = [
  {
    title: "VDS Immobilien",
    subtitle: "Ankauf & Vermittlung",
    url: CONFIG.immobilienUrl,
    type: "website",
    variant: "dark",
    image: "assets/VDS-Logo.png",
  },
  {
    title: "WhatsApp",
    subtitle: "Immobilie anbieten",
    // Vorformulierter Text senkt die Hemmschwelle der ersten Nachricht
    url: whatsappUrl("Hallo Niclas, ich möchte dir meine Immobilie anbieten."),
    type: "whatsapp",
    variant: "whatsapp",
    icon: "whatsapp",
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
   SVG-Icons (dekorativ, aria-hidden, currentColor)
   ========================================================= */
const ICONS = {
  mail:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  "mail-outline":
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
  chevron:
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
  whatsapp:
    '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>',
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

render();
wireAboutDialog();
