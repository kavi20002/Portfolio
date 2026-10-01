/**
 * data/projects.js
 * ─────────────────────────────────────────────────────────────────────────────
 * PURPOSE
 *   Stores all portfolio project information.
 *   In a future phase, each entry will be rendered as a card in the
 *   Portfolio section, with MixItUp filtering by category.
 *
 * HOW TO UPDATE
 *   Add a new object to the array for each project.
 *   Featured projects (featured: true) may be highlighted differently.
 *
 * PROJECT OBJECT SHAPE
 *   {
 *     title        : string   — Display name of the project
 *     category     : string   — Filter category. Must match a MixItUp
 *                               data-filter value. Use lowercase, no spaces.
 *                               Allowed values (extend as needed):
 *                               "web" | "app" | "uiux" | "data" | "ai"
 *     description  : string   — 1–2 sentence description shown on the card
 *     technologies : string[] — Tech stack used  e.g. ["React", "Firebase"]
 *     image        : string   — Path to the project thumbnail image
 *                               e.g. "resource/images/projects/my-project.webp"
 *                               Leave "" to show a placeholder.
 *     github       : string   — Full GitHub repository URL.
 *                               Leave "" to hide the GitHub link.
 *     demo         : string   — Full URL to live demo / deployed site.
 *                               Leave "" to hide the demo link.
 *     featured     : boolean  — Set true to mark as a featured project.
 *                               Featured projects may get special styling.
 *   }
 *
 * CATEGORY VALUES (must match the data-filter buttons in index.html)
 *   "web"   → Web Development   (matches button data-filter=".web")
 *   "app"   → App Development   (matches button data-filter=".app")
 *   "uiux"  → UI/UX Design      (matches button data-filter=".uiux")
 *   Add more categories here if you add matching filter buttons in HTML.
 *
 * IMAGE PATHS
 *   Place project images in:  resource/images/projects/
 *   Use WebP format for best performance.
 *   Reference as:             "resource/images/projects/filename.webp"
 *
 * NOTE
 *   Array is intentionally empty until you supply your real project data.
 *   Do NOT invent project titles, GitHub URLs, or demo links.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const projects = [

  // ── Template (copy and fill in for each real project) ─────────────────────
  //
  // {
  //   title: "",
  //   category: "",          // "web" | "app" | "uiux" | "data" | "ai"
  //   description: "",
  //   technologies: [],      // e.g. ["React", "Node.js", "MongoDB"]
  //   image: "",             // e.g. "resource/images/projects/project-name.webp"
  //   github: "",            // e.g. "https://github.com/yourusername/repo"
  //   demo: "",              // e.g. "https://yourproject.netlify.app"
  //   featured: false,
  // },

];
