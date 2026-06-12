// ============================================================
// Samuel Kaz — Design Portfolio
// Small bits of interactivity: mobile menu, project images,
// and a gentle scroll-reveal animation.
// ============================================================

// --- Mobile menu toggle ---
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});

// Close the menu after clicking a link (on mobile)
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// --- Project images ---
// Each project card has a data-img attribute pointing to a file in
// the images/ folder. If that image exists, use it as the card's
// background; if not, the card keeps its teal gradient fallback.
document.querySelectorAll(".project-media[data-img]").forEach((media) => {
  const src = media.dataset.img;
  const probe = new Image();
  probe.onload = () => {
    media.style.setProperty("--img", `url("${src}")`);
    media.classList.add("has-img");
  };
  probe.src = src;
});

// --- Scroll reveal ---
const revealTargets = document.querySelectorAll(
  ".project, .timeline-item, .skill-card"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
revealTargets.forEach((el) => observer.observe(el));
