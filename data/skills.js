/**
 * data/skills.js
 * ─────────────────────────────────────────────────────────────────────────────
 * PURPOSE
 *   Defines all technical skills grouped by category.
 *   In a future phase, these will be rendered as circular progress rings
 *   (or a bar/tag layout) in the Skills section on the page.
 *
 * HOW TO UPDATE
 *   Add or remove skill objects inside any category array.
 *   You do NOT need to touch index.html or index.js to add a new skill.
 *
 * SKILL OBJECT SHAPE
 *   {
 *     name    : string   — Display name of the skill  (e.g. "JavaScript")
 *     percent : number   — Proficiency level 0–100    (e.g. 85)
 *                          Used to animate the SVG progress ring.
 *     icon    : string   — Optional Font Awesome class or icon identifier.
 *                          Leave "" if no icon is needed.
 *   }
 *
 * CATEGORY KEYS  (add more categories as needed)
 *   programmingLanguages — Core languages you code in
 *   frontend             — UI / client-side technologies and frameworks
 *   backend              — Server-side technologies, APIs, frameworks
 *   mobile               — Mobile development platforms / frameworks
 *   databases            — SQL and NoSQL databases
 *   cloudAndDevOps       — Cloud platforms, CI/CD, containers
 *   aiAndData            — Machine learning, data science, analytics tools
 *   tools                — IDEs, version control, productivity tools, etc.
 *
 * NOTE
 *   All arrays are intentionally empty until you supply your real skill data.
 *   Do NOT invent skill names or percentages.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const skills = {

  /**
   * Programming Languages
   * e.g. { name: "Python", percent: 85, icon: "" }
   */
  programmingLanguages: [
    // { name: "", percent: 0, icon: "" },
  ],

  /**
   * Frontend — HTML, CSS, JavaScript frameworks, UI libraries, etc.
   * e.g. { name: "React", percent: 80, icon: "" }
   */
  frontend: [
    // { name: "", percent: 0, icon: "" },
  ],

  /**
   * Backend — server frameworks, REST APIs, authentication, etc.
   * e.g. { name: "Node.js", percent: 75, icon: "" }
   */
  backend: [
    // { name: "", percent: 0, icon: "" },
  ],

  /**
   * Mobile — native or cross-platform mobile development
   * e.g. { name: "Flutter", percent: 60, icon: "" }
   */
  mobile: [
    // { name: "", percent: 0, icon: "" },
  ],

  /**
   * Databases — relational and NoSQL databases
   * e.g. { name: "MySQL", percent: 80, icon: "" }
   */
  databases: [
    // { name: "", percent: 0, icon: "" },
  ],

  /**
   * Cloud, DevOps & Architecture
   * e.g. { name: "AWS", percent: 55, icon: "" }
   */
  cloudAndDevOps: [
    // { name: "", percent: 0, icon: "" },
  ],

  /**
   * AI, Machine Learning & Data Science
   * e.g. { name: "TensorFlow", percent: 65, icon: "" }
   */
  aiAndData: [
    // { name: "", percent: 0, icon: "" },
  ],

  /**
   * Tools — IDEs, version control, design tools, productivity software
   * e.g. { name: "Git", percent: 90, icon: "" }
   */
  tools: [
    // { name: "", percent: 0, icon: "" },
  ],

};
