/* Figure loops: muted, looping, playing only while on screen; poster when motion is reduced. */
(function () {
  "use strict";
  const vids = Array.from(document.querySelectorAll("video.figure__v"));
  if (!vids.length) return;
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
  const safePlay = (v) => { const p = v.play(); if (p && p.catch) p.catch(() => {}); };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      const v = e.target;
      if (e.isIntersecting && !reduce.matches) { v.muted = true; safePlay(v); }
      else v.pause();
    });
  }, { rootMargin: "120px 0px", threshold: 0.1 });
  vids.forEach((v) => {
    v.muted = true; v.defaultMuted = true; io.observe(v);
    v.addEventListener("canplay", () => { const r = v.getBoundingClientRect(); if (!reduce.matches && v.paused && r.bottom > -120 && r.top < innerHeight + 120) safePlay(v); });
  });
  reduce.addEventListener("change", () => vids.forEach((v) => { if (reduce.matches) { v.pause(); v.load(); } }));
  // Browsers that hold autoplay until the page is touched.
  const nudge = () => { if (!reduce.matches) vids.forEach((v) => { const r = v.getBoundingClientRect(); if (r.bottom > 0 && r.top < innerHeight && v.paused) safePlay(v); }); };
  ["pointerdown", "keydown", "touchstart"].forEach((t) => document.addEventListener(t, nudge, { once: true, passive: true }));
  document.addEventListener("visibilitychange", () => { if (!document.hidden) nudge(); });
})();
