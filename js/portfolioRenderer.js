/**
 * js/portfolioRenderer.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Reusable, safe DOM renderer for portfolio projects.
 * Consumes data from data/projects.js and renders responsive project cards
 * matching existing CSS classes and MixItUp filter expectations.
 *
 * Security: Uses DOM APIs and textContent exclusively.
 * External links strictly require https:// protocol and noopener rel.
 * ─────────────────────────────────────────────────────────────────────────────
 */

/**
 * Validates that an external URL is safe and uses the https:// protocol.
 * Rejects javascript:, data:, http:, non-strings, and empty values.
 *
 * @param {unknown} url - The URL candidate to validate.
 * @returns {boolean} True if the URL is a safe HTTPS URL.
 */
function isValidExternalUrl(url) {
  return typeof url === "string" && url.trim().startsWith("https://");
}

/**
 * Validates that an image source path is safe (local resource/ path or safe HTTPS URL).
 *
 * @param {unknown} src - The image source candidate to validate.
 * @returns {boolean} True if the image path is safe to load.
 */
function isValidImagePath(src) {
  if (typeof src !== "string") return false;
  const trimmed = src.trim();
  return trimmed.startsWith("resource/") || trimmed.startsWith("https://");
}

/**
 * Default clean fallback SVG (embedded data URI) for missing/failed project images.
 * Keeps layout intact without broken image icons or external network dependencies.
 */
const FALLBACK_IMAGE_DATA_URI =
  "data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20400%20225%22%20width%3D%22100%25%22%20height%3D%22100%25%22%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23e5eef7%22%2F%3E%3Cpath%20d%3D%22M160%2090h80v45h-80z%22%20fill%3D%22none%22%20stroke%3D%22%2395afc0%22%20stroke-width%3D%223%22%2F%3E%3Ccircle%20cx%3D%22180%22%20cy%3D%22105%22%20r%3D%227%22%20fill%3D%22%2395afc0%22%2F%3E%3Cpath%20d%3D%22M168%20125l20-18%2014%2012%2016-16%2014%2018h-64z%22%20fill%3D%22%2395afc0%22%2F%3E%3Ctext%20x%3D%2250%25%22%20y%3D%22165%22%20dominant-baseline%3D%22middle%22%20text-anchor%3D%22middle%22%20fill%3D%22%2395afc0%22%20font-family%3D%22sans-serif%22%20font-size%3D%2214%22%3ENo%20Image%20Available%3C%2Ftext%3E%3C%2Fsvg%3E";

/**
 * Creates a single project card DOM element using safe DOM APIs.
 *
 * @param {object} project - The project data object.
 * @returns {HTMLElement} The constructed .portfolio-box element.
 */
function createProjectCard(project) {
  const card = document.createElement("div");
  card.classList.add("portfolio-box", "mix");

  // MixItUp category class (e.g. web, app, ai, etc.)
  if (typeof project.category === "string" && project.category.trim()) {
    card.classList.add(project.category.trim().toLowerCase());
  }

  // Metadata attributes
  if (project.id) {
    card.setAttribute("data-project-id", String(project.id).trim());
  }
  if (project.type) {
    card.setAttribute("data-project-type", String(project.type).trim());
  }

  // Featured hook
  if (project.featured === true) {
    card.classList.add("featured-project");
  }

  // Content container
  const content = document.createElement("div");
  content.classList.add("portfolio-content");

  // Title (safe textContent)
  const title = document.createElement("h3");
  title.textContent = project.title || "Untitled Project";
  content.appendChild(title);

  // Short description (safe textContent)
  const description = document.createElement("p");
  description.textContent = project.shortDescription || "";
  content.appendChild(description);

  // Action links container (only populated if valid URLs exist)
  let actions = null;

  // Live Demo link
  if (isValidExternalUrl(project.demo)) {
    if (!actions) {
      actions = document.createElement("div");
      actions.classList.add("portfolio-actions");
    }
    const demoLink = document.createElement("a");
    demoLink.setAttribute("href", project.demo.trim());
    demoLink.setAttribute("target", "_blank");
    demoLink.setAttribute("rel", "noopener noreferrer");
    demoLink.classList.add("read-more");
    demoLink.textContent = "Live Demo";
    demoLink.setAttribute(
      "aria-label",
      `View live demo for ${project.title || "Movie Explorer"}`
    );
    actions.appendChild(demoLink);
  }

  // Repository link
  if (project.repository && isValidExternalUrl(project.repository.url)) {
    if (!actions) {
      actions = document.createElement("div");
      actions.classList.add("portfolio-actions");
    }
    const repoLink = document.createElement("a");
    repoLink.setAttribute("href", project.repository.url.trim());
    repoLink.setAttribute("target", "_blank");
    repoLink.setAttribute("rel", "noopener noreferrer");
    repoLink.classList.add("read-more", "btn-repo");
    const platformLabel = (project.repository.platform || "Code").trim();
    repoLink.textContent = platformLabel || "Code";
    repoLink.setAttribute(
      "aria-label",
      `View ${platformLabel || "code"} repository for ${project.title || "Movie Explorer"}`
    );
    actions.appendChild(repoLink);
  }

  // Only append actions container if at least one link was created
  if (actions) {
    content.appendChild(actions);
  }

  card.appendChild(content);

  // Image container
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("portfolio-img");

  const img = document.createElement("img");
  img.setAttribute("alt", `${project.title || "Project"} preview screenshot`);
  img.setAttribute("loading", "lazy");

  if (isValidImagePath(project.image)) {
    img.setAttribute("src", project.image.trim());
    // Graceful fallback if image file fails to load
    img.addEventListener(
      "error",
      () => {
        img.setAttribute("src", FALLBACK_IMAGE_DATA_URI);
      },
      { once: true }
    );
  } else {
    img.setAttribute("src", FALLBACK_IMAGE_DATA_URI);
  }

  imgContainer.appendChild(img);
  card.appendChild(imgContainer);

  return card;
}

/**
 * Validates that an individual project entry has minimum required properties.
 *
 * @param {unknown} project - The project candidate object.
 * @returns {boolean} True if the project entry is valid.
 */
function isValidProjectEntry(project) {
  return (
    project !== null &&
    typeof project === "object" &&
    typeof project.id === "string" &&
    project.id.trim().length > 0 &&
    typeof project.title === "string" &&
    project.title.trim().length > 0 &&
    typeof project.category === "string" &&
    project.category.trim().length > 0 &&
    typeof project.shortDescription === "string" &&
    project.shortDescription.trim().length > 0
  );
}

/**
 * Renders an array of projects into the provided gallery container element.
 *
 * @param {Array<object>} projects - Array of project objects from data/projects.js.
 * @param {HTMLElement} container - The DOM element (e.g. .portfolio-gallery).
 * @returns {number} The count of rendered projects.
 */
export function renderPortfolio(projects, container) {
  // Safe container validation
  if (!container || !(container instanceof HTMLElement)) {
    return 0;
  }

  // Safely clear existing content
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Empty state handling
  if (!Array.isArray(projects) || projects.length === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.classList.add("portfolio-empty");
    emptyMsg.textContent = "Projects currently being updated. Check back soon!";
    container.appendChild(emptyMsg);
    return 0;
  }

  const fragment = document.createDocumentFragment();
  let renderedCount = 0;

  for (const project of projects) {
    if (isValidProjectEntry(project)) {
      const card = createProjectCard(project);
      fragment.appendChild(card);
      renderedCount++;
    }
  }

  // If array contained entries but none were valid, show empty state
  if (renderedCount === 0) {
    const emptyMsg = document.createElement("p");
    emptyMsg.classList.add("portfolio-empty");
    emptyMsg.textContent = "Projects currently being updated. Check back soon!";
    container.appendChild(emptyMsg);
    return 0;
  }

  container.appendChild(fragment);
  return renderedCount;
}