// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  const open = links.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
links.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => links.classList.remove("open"))
);

// Project images: each card's data-img points to a file in images/.
// If the image exists it is shown; otherwise the grid-paper placeholder stays.
//   - Homepage cards: cropped thumbnail (background cover) for a uniform grid.
//   - Case-study hero/figures/galleries: a real <img> showing the ENTIRE photo
//     at its native proportions — no cropping, rendered at full quality.
document.querySelectorAll(".proj-media[data-img]").forEach((media) => {
  const src = media.dataset.img;
  const isFigure =
    media.classList.contains("case-hero") ||
    media.closest(".case-figure, .case-gallery") !== null;

  const probe = new Image();
  probe.onload = () => {
    if (isFigure) {
      const img = document.createElement("img");
      img.src = src;
      img.loading = "lazy";
      const cap = media.parentElement.querySelector(".fig-cap, figcaption");
      img.alt = cap ? cap.textContent.trim() : "";
      media.appendChild(img);
      media.classList.add("has-img", "has-photo");
    } else {
      // Set the background-image inline so the relative URL resolves against
      // the page (not the stylesheet) — works from both / and /projects/.
      media.style.backgroundImage = `url("${src}")`;
      media.classList.add("has-img");
    }
  };
  probe.src = src;
});

// Scroll reveal
const targets = document.querySelectorAll(".xp, .proj, .cap");
targets.forEach((el) => el.classList.add("reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        io.unobserve(e.target);
      }
    });
  },
  { threshold: 0.1 }
);
targets.forEach((el) => io.observe(el));
