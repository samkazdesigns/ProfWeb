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
// If the image exists it becomes the card background; otherwise the
// card keeps its grid-paper placeholder.
document.querySelectorAll(".proj-media[data-img]").forEach((media) => {
  const probe = new Image();
  probe.onload = () => {
    media.style.setProperty("--img", `url("${media.dataset.img}")`);
    media.classList.add("has-img");
  };
  probe.src = media.dataset.img;
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
