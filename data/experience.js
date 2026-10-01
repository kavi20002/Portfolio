/**
 * data/experience.js
 * ─────────────────────────────────────────────────────────────────────────────
 * PURPOSE
 *   Stores all professional work experience, internships, and part-time
 *   roles. In a future phase, each entry will be rendered as a card or
 *   timeline item inside the About → Experience tab.
 *
 * HOW TO UPDATE
 *   Add a new object to the array for each position you want to show.
 *   The most recent role should appear FIRST (newest-to-oldest order).
 *
 * EXPERIENCE OBJECT SHAPE
 *   {
 *     company      : string   — Company or organisation name
 *     role         : string   — Your job title or role
 *     type         : string   — Employment type:
 *                               "Full-time" | "Part-time" | "Internship"
 *                               | "Freelance" | "Contract" | "Volunteer"
 *     period       : string   — Date range displayed to users
 *                               e.g. "Jun 2024 – Aug 2024"  or  "Present"
 *     location     : string   — City, Country  OR  "Remote"
 *     description  : string[] — Array of bullet-point strings describing
 *                               your responsibilities and achievements.
 *                               Each string becomes one bullet point.
 *     technologies : string[] — Technologies/tools used in this role.
 *                               e.g. ["React", "Node.js", "PostgreSQL"]
 *   }
 *
 * OPTIONAL FIELDS
 *   All fields are expected, but leave as "" or [] if unknown.
 *   "technologies" is optional — an empty array [] is fine.
 *
 * NOTE
 *   Array is intentionally empty until you supply your real CV data.
 *   Do NOT invent any company names, roles, dates, or descriptions.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const experience = [

  // ── Template (copy and fill in for each real position) ────────────────────
  //
  // {
  //   company: "",
  //   role: "",
  //   type: "",          // e.g. "Internship"
  //   period: "",        // e.g. "Jun 2024 – Aug 2024"
  //   location: "",      // e.g. "Colombo, Sri Lanka"  or  "Remote"
  //   description: [
  //     "",              // Bullet point 1
  //     "",              // Bullet point 2
  //   ],
  //   technologies: [],  // e.g. ["React", "Node.js"]
  // },

];
