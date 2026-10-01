/**
 * data/education.js
 * ─────────────────────────────────────────────────────────────────────────────
 * PURPOSE
 *   Stores all academic qualifications — degrees, diplomas, certifications,
 *   and online courses. In a future phase, each entry will be rendered
 *   inside the About → Education tab.
 *
 * HOW TO UPDATE
 *   Add a new object to the array for each qualification.
 *   List in newest-to-oldest order (current degree first).
 *
 * EDUCATION OBJECT SHAPE
 *   {
 *     institution  : string   — University, school, or platform name
 *                               e.g. "University of Kelaniya"
 *     degree       : string   — Full qualification title
 *                               e.g. "BSc (Hons) in Software Engineering"
 *     period       : string   — Date range shown to users
 *                               e.g. "2022 – Present"  or  "2018 – 2022"
 *     location     : string   — City, Country  or  "Online"
 *     gpa          : string   — GPA or classification (OPTIONAL).
 *                               e.g. "3.8 / 4.0"  or  "First Class"
 *                               Leave "" to hide.
 *     description  : string[] — Optional bullet points or highlights.
 *                               e.g. notable modules, thesis, achievements.
 *                               Leave [] if not needed.
 *   }
 *
 * CERTIFICATIONS
 *   Use the same structure for professional certifications or online courses.
 *   Set `degree` to the certification name and `institution` to the
 *   issuing platform (e.g. "Coursera", "AWS", "Google").
 *
 * NOTE
 *   Array is intentionally empty until you supply your real CV data.
 *   Do NOT invent institution names, degree titles, or dates.
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const education = [

  // ── Template (copy and fill in for each qualification) ────────────────────
  //
  // {
  //   institution: "",
  //   degree: "",
  //   period: "",        // e.g. "2022 – Present"
  //   location: "",      // e.g. "Colombo, Sri Lanka"  or  "Online"
  //   gpa: "",           // Optional — leave "" to hide
  //   description: [
  //     "",              // e.g. "Relevant modules: ..."
  //     "",              // e.g. "Dean's List 2023"
  //   ],
  // },

];
