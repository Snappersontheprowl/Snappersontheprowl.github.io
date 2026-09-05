const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

const root = document.documentElement;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const finePointer = window.matchMedia(
  "(any-hover: hover) and (any-pointer: fine)",
);
const motionToggle = document.querySelector(".motion-toggle");
const hero = document.querySelector(".hero-section");
const cards = document.querySelectorAll(
  ".profile-panel, .primary-project, .project-card, .study-feature",
);
const entryAnimations = new Set();
const chinese = root.lang === "zh-CN";
let paused = false;
let pointerFrame = 0;

function motionEnabled() {
  return !paused && !reducedMotion.matches && !document.hidden;
}

function clearPointerEffects() {
  cancelAnimationFrame(pointerFrame);
  cards.forEach((card) => card.classList.remove("pointer-active"));
}

function syncMotion() {
  root.dataset.motion = motionEnabled() ? "running" : "paused";
  if (!motionEnabled()) {
    entryAnimations.forEach((animation) => animation.cancel());
    entryAnimations.clear();
    clearPointerEffects();
  }
  motionToggle.hidden = false;
  motionToggle.disabled = reducedMotion.matches;
  motionToggle.setAttribute(
    "aria-pressed",
    String(paused || reducedMotion.matches),
  );
  motionToggle.textContent = reducedMotion.matches
    ? chinese
      ? "系统已关闭动效"
      : "Motion disabled by system"
    : chinese
      ? paused
        ? "开启动效"
        : "暂停动效"
      : paused
        ? "Resume effects"
        : "Pause effects";
}

motionToggle.addEventListener("click", () => {
  paused = !paused;
  syncMotion();
});
reducedMotion.addEventListener("change", syncMotion);
finePointer.addEventListener("change", clearPointerEffects);
document.addEventListener("visibilitychange", syncMotion);
syncMotion();

const heroObserver = new IntersectionObserver(([entry]) => {
  hero.classList.toggle("is-visible", entry.isIntersecting);
});
heroObserver.observe(hero);

// Content starts visible; entry animations never gate reading or navigation.
const entryObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entryObserver.unobserve(entry.target);
      if (!motionEnabled()) return;
      const animation = entry.target.animate(
        [
          { opacity: 0.65, transform: "translateY(18px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: 650, easing: "cubic-bezier(0.2, 0.7, 0.2, 1)" },
      );
      entryAnimations.add(animation);
      animation.onfinish = () => entryAnimations.delete(animation);
    });
  },
  { threshold: 0.08 },
);
document
  .querySelectorAll(
    ".section-heading, .primary-project, .project-card, .study-feature, .contact-box",
  )
  .forEach((element) => entryObserver.observe(element));

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    if (
      !motionEnabled() ||
      !finePointer.matches ||
      event.pointerType === "touch"
    )
      return;
    cancelAnimationFrame(pointerFrame);
    const { clientX, clientY } = event;
    pointerFrame = requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--pointer-x", `${clientX - rect.left}px`);
      card.style.setProperty("--pointer-y", `${clientY - rect.top}px`);
      card.classList.add("pointer-active");
    });
  });
  card.addEventListener("pointerleave", clearPointerEffects);
});
