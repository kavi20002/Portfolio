/**
 * data/projects.js
 * ─────────────────────────────────────────────────────────────────────────────
 * PURPOSE
 *   Single source of truth for all portfolio project information.
 *   In a future phase, each entry will be rendered as a filterable card
 *   in the Portfolio section.
 *
 * HOW TO ADD A NEW PROJECT
 *   1. Copy the copy-paste template at the bottom of this file.
 *   2. Paste it as a new object inside the projects array (above the closing ]).
 *   3. Fill in every field using the field definitions below.
 *   4. Place the project image in: resource/images/projects/
 *   5. Save the file — no other files need to be changed.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PROJECT OBJECT — ALL 11 FIELDS
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  1. id : string
 *       Unique URL-safe identifier for this project.
 *       Rules: lowercase letters, numbers, and hyphens only. No spaces.
 *       Example: "movie-explorer"
 *       Used internally to reference this project from links or other modules.
 *
 *  2. title : string
 *       Human-readable display name shown on the portfolio card.
 *       Example: "Movie Explorer"
 *
 *  3. category : string
 *       Technical or domain category. Drives the portfolio filter system.
 *       Use lowercase, no spaces. Must match a data-filter button in index.html.
 *       Approved values (do not add others without updating index.html):
 *         "web"     — Web Development
 *         "app"     — Mobile / Desktop Application
 *         "ai"      — AI / Machine Learning
 *         "data"    — Data / Analytics / Database
 *         "backend" — Backend / API / Server-side
 *
 *  4. type : string
 *       Project origin and context. Does NOT describe the technology used.
 *       Approved values (use exactly as written — do not create new ones):
 *         "professional" — Built during a job, internship, or client engagement
 *         "personal"     — A self-initiated side project or passion project
 *         "academic"     — Built for a university module, assignment, or research
 *
 *  5. shortDescription : string
 *       Concise 1–2 sentence summary shown on the portfolio card.
 *       Keep it brief — this is the first thing a visitor reads.
 *
 *  6. description : string
 *       Longer project explanation for a future detail view or modal.
 *       Can include the problem, your role, key decisions, and outcomes.
 *       May match shortDescription if a longer version is not yet written.
 *
 *  7. technologies : string[]
 *       Array of technology and tool names used in this project.
 *       Use the same display names as in data/skills.js for consistency.
 *       Example: ["React.js", "Node.js", "MongoDB"]
 *       Leave [] when no technologies are listed yet.
 *
 *  8. image : string
 *       Relative path to the project thumbnail image from the project root.
 *       Approved directory: resource/images/projects/
 *       Preferred format: WebP or PNG.
 *       Example: "resource/images/projects/movie-explorer.webp"
 *       Leave "" when no image has been added yet.
 *
 *  9. repository : { platform: string, url: string }
 *       Source code repository information. Stored as an object so that
 *       the schema is not locked to a single hosting provider.
 *
 *       repository.platform : string
 *           Name of the hosting platform.
 *           Approved values: "GitHub" | "GitLab" | "Bitbucket" | ""
 *           Use "" when no public repository is available.
 *
 *       repository.url : string
 *           Full verified URL to the repository. Leave "" when unavailable.
 *           Example (GitHub):    "https://github.com/yourusername/repo-name"
 *           Example (GitLab):    "https://gitlab.com/yourusername/repo-name"
 *           Never use placeholder hash links — always use "" when unavailable.
 *
 * 10. demo : string
 *       Full verified URL to the live deployed version of the project.
 *       Example: "https://yourproject.netlify.app"
 *       Leave "" when no live demo is available.
 *       Never use placeholder hash links — always use "" when unavailable.
 *
 * 11. featured : boolean
 *       Set true to mark this project as featured / highlighted.
 *       Featured projects may receive special styling in the UI.
 *       Use sparingly — reserve for your strongest work.
 *       Value must be exactly true or false (not a string, not null).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * QUICK REFERENCE
 * ─────────────────────────────────────────────────────────────────────────────
 *
 *  category values       : "web" | "app" | "ai" | "data" | "backend"
 *  type values           : "professional" | "personal" | "academic"
 *  featured values       : true | false
 *  repository.platform   : "GitHub" | "GitLab" | "Bitbucket" | ""
 *  repository.url        : full verified URL or ""
 *  demo                  : full verified URL or ""
 *  image                 : "resource/images/projects/<filename>" or ""
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * CHANGE HISTORY
 *   Phase 1  (Oct 2026) — File created. Initial schema.
 *   Phase 2B (Oct 2026) — Added: id, type, shortDescription.
 *                          Split description into shortDescription + description.
 *   Phase 2C (Oct 2026) — Replaced github: string with repository: { platform, url }
 *                          to support GitHub, GitLab, Bitbucket, and other platforms.
 *   Phase 2D (Oct 2026) — Added Movie Explorer record with verified GitLab repository,
 *                          Vercel live demo, and local project image asset.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const projects = [
  {
    id: "movie-explorer",
    title: "Movie Explorer",
    category: "web",
    type: "personal",
    shortDescription:
      "A responsive movie discovery web application that allows users to explore trending movies, search films, view detailed movie information, and save favorites using real-time TMDb API data.",
    description:
      "Movie Explorer is a responsive movie discovery application built with React.js and the TMDb API. The application allows users to explore trending movies, search for movies with infinite scrolling, view detailed information including genres, ratings, cast, runtime, overview, and trailers, and manage a personal favorites list. Redux Toolkit is used for centralized state management, while LocalStorage provides persistence for favorites and recent searches. The application also includes genre, year, and rating filters, light/dark mode, responsive navigation, and graceful API error handling. The application is deployed as a production web application using Vercel.",
    technologies: [
      "React.js",
      "Redux Toolkit",
      "Axios",
      "Material-UI (MUI)",
      "React Router",
      "TMDb API",
      "JavaScript",
      "LocalStorage",
      "Vercel"
    ],
    image: "resource/images/projects/movie-explorer.png",
    repository: {
      platform: "GitLab",
      url: "https://gitlab.com/KaviduKeshan/movie-explorer"
    },
    demo: "https://movie-explorer-theta-murex.vercel.app",
    featured: true
  },
  {
    id: "petty-cash-management-system",
    title: "Petty Cash Management System",
    category: "web",
    type: "professional",
    shortDescription:
      "A petty cash management component implemented within Tokyo Cement's existing Farmers Management System to support claim, reimbursement, and IOU processes.",
    description:
      "Implemented a Petty Cash component within Tokyo Cement's existing Farmers Management System to support claim, reimbursement, and IOU processes. The module was developed as part of the internship using the MERN stack and integrated into the existing system rather than being built as a standalone application.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js"
    ],
    image: "",
    repository: {
      platform: "",
      url: ""
    },
    demo: "",
    featured: false
  }
];

// ─────────────────────────────────────────────────────────────────────────────
// COPY-PASTE TEMPLATE
// Copy the block below, paste it inside the projects array above,
// and fill in every field. Add a trailing comma after } if more items follow.
// ─────────────────────────────────────────────────────────────────────────────
//
// {
//   id:               "",        // e.g. "my-project-name"  (lowercase, hyphens)
//   title:            "",        // e.g. "My Project Name"
//   category:         "",        // "web" | "app" | "ai" | "data" | "backend"
//   type:             "",        // "professional" | "personal" | "academic"
//
//   shortDescription: "",        // 1–2 sentences for the portfolio card
//   description:      "",        // Longer explanation for a future detail view
//
//   technologies:     [],        // e.g. ["React.js", "Node.js", "MongoDB"]
//
//   image:            "",        // e.g. "resource/images/projects/my-project.webp"
//
//   repository: {
//     platform:       "",        // "GitHub" | "GitLab" | "Bitbucket" | ""
//     url:            "",        // e.g. "https://github.com/yourusername/repo"
//   },
//
//   demo:             "",        // e.g. "https://yourproject.netlify.app"
//
//   featured:         false,     // true = highlighted project
// },
