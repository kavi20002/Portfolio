/**
 * data/personal.js
 * ─────────────────────────────────────────────────────────────────────────────
 * PURPOSE
 *   Single source of truth for all personal identity, contact, and
 *   social-link information shown across the portfolio.
 *
 * HOW TO UPDATE
 *   Fill in the empty strings below with your real information.
 *   Every field here will eventually be read by the rendering layer
 *   (index.js) and injected into the HTML — so you only ever need to
 *   update this one file when personal details change.
 *
 * FIELD GUIDE
 *   name        — Full display name  (used in hero h1, footer, page title)
 *   tagline     — Short one-liner that appears below the name in the hero
 *   title       — Animated role text in the hero section  (e.g. "Full Stack Developer")
 *   location    — City / Country  (shown in contact section or footer)
 *   email       — Primary contact email  (used for the "Hire Me" mailto link)
 *   phone       — Optional phone number  (leave "" to hide it)
 *   summary     — 2-4 sentence bio shown in the Hero section paragraph
 *   aboutText   — Slightly longer version of the bio for the About section
 *   cv          — Path or URL to the CV/résumé PDF
 *                 Example: "resource/cv/Kavidu-Keshan-CV.pdf"
 *
 * SOCIAL LINKS  (leave "" to hide the icon)
 *   github      — Full URL  e.g. "https://github.com/yourusername"
 *   linkedin    — Full URL  e.g. "https://linkedin.com/in/yourusername"
 *   instagram   — Full URL  e.g. "https://instagram.com/yourusername"
 *   facebook    — Full URL  e.g. "https://facebook.com/yourusername"
 *
 * NOTE
 *   All values are intentionally blank until you supply your real CV data.
 *   Do NOT invent placeholder values — leave them as empty strings.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const personal = {

  // ── Identity ──────────────────────────────────────────────────────────────

  /** Full name as it should appear on the site (e.g. "Kavidu Keshan") */
  name: "",

  /** Short animated role label shown in the hero section */
  title: "",

  /** One-line tagline / sub-heading (e.g. "Welcome To My World") */
  tagline: "",

  /** City and country (e.g. "Colombo, Sri Lanka") */
  location: "",

  // ── Contact ───────────────────────────────────────────────────────────────

  /** Primary email — used for the "Hire Me" mailto button */
  email: "",

  /** Phone number — optional. Leave "" to omit from the UI */
  phone: "",

  // ── Bio / Summary ─────────────────────────────────────────────────────────

  /**
   * Short bio paragraph for the HERO section (2–3 sentences).
   * Keep it concise — this appears above the fold.
   */
  summary: "",

  /**
   * Longer bio paragraph for the ABOUT section (3–5 sentences).
   * Can include more context about your background, interests, and goals.
   */
  aboutText: "",

  // ── CV / Résumé ───────────────────────────────────────────────────────────

  /**
   * Relative path to your CV PDF from the project root.
   * Example: "resource/cv/Kavidu-Keshan-CV.pdf"
   * Update this path whenever you replace the CV file.
   */
  cv: "",

  // ── Social Links ──────────────────────────────────────────────────────────

  /**
   * Full URLs for social platforms.
   * Leave "" to hide an icon from the UI.
   * Example: "https://github.com/yourusername"
   */
  github: "",
  linkedin: "",
  instagram: "",
  facebook: "",

};
