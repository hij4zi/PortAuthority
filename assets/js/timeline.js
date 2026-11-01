/* ==========================================================
   PORT OF ENTRY — Capital Plan section + milestone timeline
   Renders into any <section class="plan" data-plan="air|land|rail|sea">
   using window.PLAN from plan-data.js. Mirrors the milestone
   timeline on the agency's LGA and Midtown Bus Terminal pages.
   ========================================================== */
(function () {
  "use strict";
  const P = window.PLAN;
  if (!P) return;
  const COLOR = { air: "var(--air)", land: "var(--land)", rail: "var(--rail)", sea: "var(--sea)", wtc: "#17a89b", agency: "var(--paper)" };
  const NAME = { air: "Air", land: "Land", rail: "Rail", sea: "Sea", wtc: "World Trade Center", agency: "Agency" };
  const ERA = { last: "2017–2025 · finished", new: "2026–2035 · the plan", next: "2036 onward" };

  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;"); }

  function renderPlan(el) {
    const key = el.dataset.plan, m = P.modes[key];
    if (!m) return;
    const own = P.milestones.map((x, i) => i).filter((i) => P.milestones[i][2] === key || P.milestones[i][2] === "agency");
    let selected = own.find((i) => P.milestones[i][6] === "new" && P.milestones[i][2] === key);
    if (selected === undefined) selected = own[0];

    el.innerHTML = `
      <div class="plan__chip"><span>2026–2035 Capital Plan</span><span>${esc(m.name)} · ${esc(m.budget)}</span></div>
      <svg class="plan__cube" viewBox="0 0 54 54" aria-hidden="true"><path d="M27 4l12 7v14l-12 7-12-7V11z M15 11l12 7 12-7 M27 18v14"/><path d="M27 28l12 7v14l-12 7-12-7V35z M15 35l12 7 12-7 M27 42v12"/></svg>
      <div class="plan__head">
        <div>
          <span class="label">What the plan builds here</span>
          <h2 class="plan__title sign">${esc(m.headline)}</h2>
          <p class="plan__summary">${esc(m.summary)}</p>
        </div>
        <ul class="plan__projects">${m.projects.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
      </div>
      <div class="plan__stats">
        <div class="stat"><span class="stat__num">${esc(m.budget)}</span><span class="stat__label">${esc(m.share)} of the $42B plan</span></div>
        ${m.stats.map((s) => `<div class="stat"><span class="stat__num">${esc(s[0])}</span><span class="stat__label">${esc(s[1])}</span></div>`).join("")}
      </div>
      <div class="tl">
        <button class="tl__nav tl__nav--prev" aria-label="Previous milestone">&lsaquo;</button>
        <button class="tl__nav tl__nav--next" aria-label="Next milestone">&rsaquo;</button>
        <div class="tl__scroll"><div class="tl__track" role="tablist" aria-label="${esc(m.name)} milestones"></div></div>
      </div>
      <div class="tl__detail" role="tabpanel" aria-live="polite"></div>
      <p class="plan__foot label">Filled nodes are complete; open nodes are in the plan. Agency-wide milestones in white. <a href="${el.dataset.root || ".."}/timeline/index.html">Full timeline for all modes</a></p>`;

    const track = el.querySelector(".tl__track"), detail = el.querySelector(".tl__detail");
    let lastEra = null;
    own.forEach((i) => {
      const x = P.milestones[i];
      if (x[6] !== lastEra) { const e = document.createElement("span"); e.className = "tl__era"; e.textContent = ERA[x[6]]; track.appendChild(e); lastEra = x[6]; }
      const b = document.createElement("button");
      b.className = "node" + (x[3] === "done" ? " node--done" : ""); b.setAttribute("role", "tab"); b.dataset.i = i;
      b.style.setProperty("--k", COLOR[x[2]]);
      b.innerHTML = `<span class="node__year">${esc(x[0])}<small>${esc(x[1]) || "&nbsp;"}</small></span><span class="node__title">${esc(x[4])}</span>`;
      b.addEventListener("click", () => select(i, true));
      track.appendChild(b);
    });
    // Place era labels over the first node of each era.
    let px = 0;
    Array.from(track.children).forEach((c) => { if (c.classList.contains("tl__era")) c.style.left = px + "px"; else px += c.offsetWidth; });

    function show(i) {
      const x = P.milestones[i];
      detail.style.setProperty("--k", COLOR[x[2]]);
      detail.innerHTML = `<div><span class="tl__k"><i></i>${esc(NAME[x[2]])} · ${esc(x[0])}${x[1] ? " " + esc(x[1]) : ""}</span><h3>${esc(x[4])}</h3><p>${esc(x[5])}</p></div>
        <span class="tl__status${x[3] === "done" ? " is-done" : ""}">${x[3] === "done" ? "COMPLETED" : (x[6] === "next" ? "NEXT PLAN" : "IN THE PLAN")}</span>`;
    }
    function select(i, scrollTo) {
      selected = i;
      track.querySelectorAll(".node").forEach((n) => n.setAttribute("aria-selected", String(+n.dataset.i === i)));
      show(i);
      if (scrollTo) centerNode(i, true);
    }
    function step(d) { const k = own.indexOf(selected); select(own[Math.min(own.length - 1, Math.max(0, k + d))], true); }
    el.querySelector(".tl__nav--prev").addEventListener("click", () => step(-1));
    el.querySelector(".tl__nav--next").addEventListener("click", () => step(1));
    track.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") { e.preventDefault(); step(e.key === "ArrowRight" ? 1 : -1); const n = track.querySelector('.node[aria-selected="true"]'); if (n) n.focus(); }
    });
    // Centre a node inside the strip by moving the strip's own scrollLeft, so the page never jumps.
    const scroller = el.querySelector(".tl__scroll");
    function centerNode(i, smooth) {
      const n = track.querySelector(`.node[data-i="${i}"]`); if (!n) return;
      const left = n.offsetLeft - (scroller.clientWidth - n.offsetWidth) / 2;
      if (smooth && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) scroller.scrollTo({ left, behavior: "smooth" });
      else scroller.scrollLeft = left;
    }
    select(selected, false);
    centerNode(selected, false);
  }

  document.querySelectorAll(".plan[data-plan]").forEach(renderPlan);
})();
