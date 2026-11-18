/* SwipeUp Studios — interactions */

const IG = "https://www.instagram.com/swipeup.studios/";
const HEART = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><path fill="currentColor" d="M12 21s-7.5-4.6-9.6-9.3C.9 8.4 3 4.5 6.8 4.5c2.2 0 3.7 1.2 5.2 3 1.5-1.8 3-3 5.2-3 3.8 0 5.9 3.9 4.4 7.2C19.5 16.4 12 21 12 21z"/></svg>';
const PLAY = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>';
const REEL_ICON = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M10 9v6l5-3z" fill="currentColor"/></svg>';

// ---------- Featured films (from @swipeup.studios) ----------
const WORK = [
  { slug: "mutuals", loop: true, title: "Mutuals", kind: "original", label: "Original", likes: "882K",
    sub: "A café love story", ig: "reel/DWWbTowk-Vi",
    desc: "Two strangers, one café, and the slow realisation that they have more in common than mutual friends. Our most-loved original so far.",
    credits: [["Written & Directed", "@im__sai_kumar"], ["Cinematography", "@_just_bharath"], ["Edited by", "@sai_teja.edits"], ["Cast", "@koviiiiiiiiiii_ · @maadhuuu29"]] },
  { slug: "scribbles", loop: true, title: "Scribbles", kind: "original", label: "Original", likes: "375K",
    sub: "Love, coffee & notes", ig: "reel/DVBTUolE-FY",
    desc: "A barista, a regular, and the little notes scribbled between them. A quiet romance set to Electric Love.",
    credits: [["Written & Directed", "@nithin.movies"], ["Cinematography", "@sonu_glimmers"], ["Edited by", "@heymonth_kumaarr"], ["In Frame", "@shivaram.actor · @maadhuuu29"]] },
  { slug: "love-in-the-lift", loop: true, title: "Love in the Lift", kind: "original", label: "Original Series", likes: "257K",
    sub: "Apartment love story", ig: "reel/DOQoH_hE86I",
    desc: "Every ride up is a chance. A musical micro drama series about two neighbours who keep meeting in the lift.",
    credits: [["Written & Directed", "@deeppakdhharani"], ["Cinematography", "@lokeshsunny16"], ["Edited by", "@sai_teja09_"], ["Cast", "@deeppakdhharani · @himishachowdary"]] },
  { slug: "hare-krishna", loop: true, title: "Hare Krishna", kind: "original", label: "Original", likes: "103K",
    sub: "A devotional short", ig: "reel/DeHNWz9KUKT",
    desc: "A heartfelt devotional short made with the Hare Krishna Golden Temple.",
    credits: [["Written & Directed", "@deeppakdhharani"], ["Cinematography", "@lokeshsunny16"], ["Infographics", "@sai_teja.edits"]] },
  { slug: "girl-next-door", loop: false, title: "The Girl Next Door", kind: "ad", label: "Ad Film · Peps", likes: "6.6K",
    sub: "Peps Mattress Diwali campaign", ig: "reel/DfUoIpmKjpt",
    desc: "A Diwali story for Peps Mattress about the girl next door — and the comfort of home.",
    credits: [["Written & Directed", "@__prashanth_sai"], ["Cinematography", "@harish.k.dadi"], ["Edited by", "@sai_teja.edits"], ["Cast", "@margam_aditya · @pragnaaa.__"]] },
  { slug: "some-loves", loop: true, title: "Some Loves", kind: "ad", label: "Ad Film · Peps", likes: "756",
    sub: "Peps Crystal Mattress", ig: "reel/DeB91VPqf0y",
    desc: "Some loves make you jealous. Some make sure you sleep well. Peps Crystal brings comfort to both sides of the bed.",
    credits: [["Written & Directed", "@ganesheffect"], ["Cinematography", "@lokeshsunny16"], ["Edited by", "@sai_teja.edits"], ["Cast", "@shivaram.actor · @sivaprasannagsp"]] },
  { slug: "with-you", loop: true, title: "Always With You", kind: "ad", label: "Ad Film · Peps", likes: "1.1K",
    sub: "500kms or 500m — Peps Mattress", ig: "reel/DcJJjTSzCm4",
    desc: "500 km or 500 m apart, always with you. A long-distance love story for Peps Mattress.",
    credits: [["Written & Directed", "@__prashanth_sai"], ["Cinematography", "@harish.k.dadi"], ["Edited by", "@a_4._.apple___"], ["Cast", "@k_kalyan_ · @riyaagram_12"]] },
  { slug: "the-gangsters", loop: true, title: "The Gangsters", kind: "original", label: "Original", likes: "467",
    sub: "Our Diwali special", ig: "reel/DfeEl99q5K9",
    desc: "The whole SUP crew in front of the camera for a Diwali short full of crackers and chaos.",
    credits: [["Written & Directed", "@__prashanth_sai"], ["Cinematography", "@harish.k.dadi"], ["Screenplay & Edit", "@a_4._.apple___"]] },
  { slug: "amma-trailer", loop: false, title: "Amma Nanna Aata", kind: "original", label: "New Series · Nov 21", likes: "New",
    sub: "14 days, 14 episodes", ig: "reel/Df4orq1qnkk",
    desc: "Our new Telugu series: 14 episodes over 14 days, starting November 21. Watch the trailer now.",
    credits: [["Written & Directed", "@nithin.movies"], ["Cinematography", "@lokeshsunny16"], ["Edited by", "@sai_teja.edits"], ["In Frame", "@margam_aditya · @jeswanth__jeswanth · @vanditha.manohar"]] }
];

const isTouch = window.matchMedia("(hover: none)").matches;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---------- Work grid ----------
const grid = document.getElementById("workGrid");
grid.innerHTML = WORK.map((w, i) => `
  <button class="card" data-kind="${w.kind}" data-index="${i}" aria-label="Watch ${w.title}">
    <div class="card-media">
      <img src="/assets/work/${w.slug}.jpg" alt="${w.title}" loading="lazy" />
      ${w.loop ? `<video data-src="/assets/loops/${w.slug}.mp4" muted loop playsinline preload="none"></video>` : ""}
      <span class="card-tag">${w.label}</span>
      <span class="card-stat">${HEART}${w.likes}</span>
      <span class="card-play" aria-hidden="true">${PLAY}</span>
    </div>
    <div class="card-meta">
      <h3>${w.title}</h3><span class="rule"></span><p>${w.sub}</p>
    </div>
  </button>`).join("");

function playCard(card) {
  const v = card.querySelector("video");
  if (!v || reduceMotion) return;
  if (!v.src) v.src = v.dataset.src;
  v.play().then(() => card.classList.add("playing")).catch(() => {});
}
function stopCard(card) {
  const v = card.querySelector("video");
  if (!v) return;
  v.pause();
  card.classList.remove("playing");
}
grid.querySelectorAll(".card").forEach(card => {
  if (!isTouch) {
    card.addEventListener("mouseenter", () => playCard(card));
    card.addEventListener("mouseleave", () => stopCard(card));
  }
});
// On touch screens, play the loop when the card is mostly on screen.
if (isTouch) {
  const vio = new IntersectionObserver(entries => {
    entries.forEach(e => e.isIntersecting ? playCard(e.target) : stopCard(e.target));
  }, { threshold: 0.65 });
  grid.querySelectorAll(".card").forEach(c => vio.observe(c));
}

document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    grid.querySelectorAll(".card").forEach(c => c.classList.toggle("hide", f !== "all" && c.dataset.kind !== f));
  });
});

// ---------- Now showing strip (looped twice for a seamless marquee) ----------
const nowTrack = document.getElementById("nowTrack");
const strip = WORK.filter(w => w.loop);
const phoneHTML = (w, i) => `
  <button class="phone" data-index="${WORK.indexOf(w)}" aria-label="Watch ${w.title}" ${i >= strip.length ? 'aria-hidden="true" tabindex="-1"' : ""}>
    <video src="/assets/loops/${w.slug}.mp4" poster="/assets/loops/${w.slug}.jpg" muted loop playsinline autoplay preload="metadata"></video>
    <span class="ph-likes">♥ ${w.likes}</span>
    <span class="ph-title">${w.title}<small>${w.label}</small></span>
  </button>`;
nowTrack.innerHTML = [...strip, ...strip].map(phoneHTML).join("");
nowTrack.addEventListener("click", e => {
  const p = e.target.closest(".phone");
  if (p) openWork(WORK[+p.dataset.index]);
});
// Pause strip videos when the strip is off screen to save battery.
const nowIO = new IntersectionObserver(([e]) => {
  nowTrack.querySelectorAll("video").forEach(v => e.isIntersecting && !reduceMotion ? v.play().catch(() => {}) : v.pause());
}, { threshold: 0.05 });
nowIO.observe(nowTrack);

// ---------- All stories gallery ----------
const storiesGrid = document.getElementById("storiesGrid");
const loadMoreBtn = document.getElementById("loadMore");
const PAGE = 24;
let ALL = [], view = [], shown = 0;

function tileHTML(s, i) {
  return `<button class="tile" data-i="${i}" style="animation-delay:${(i % PAGE) * 25}ms" aria-label="${escapeHTML(s.title)}">
    <img src="${s.img}" alt="" loading="lazy" />
    ${s.type === "reel" ? `<span class="t-icon">${REEL_ICON}</span>` : ""}
    <span class="t-over"><b>${escapeHTML(s.title)}</b><span>♥ ${s.likes || "—"} · ${s.date.replace(/, \d{4}$/, "")}</span></span>
  </button>`;
}
function renderMore() {
  const next = view.slice(shown, shown + PAGE);
  storiesGrid.insertAdjacentHTML("beforeend", next.map((s, k) => tileHTML(s, shown + k)).join(""));
  shown += next.length;
  loadMoreBtn.hidden = shown >= view.length;
}
function setStoryFilter(type) {
  view = type === "all" ? ALL : ALL.filter(s => s.type === type);
  storiesGrid.innerHTML = ""; shown = 0;
  document.getElementById("storyCount").textContent = view.length;
  renderMore();
}
fetch("/gallery.json").then(r => r.json()).then(data => { ALL = data; setStoryFilter("all"); });
loadMoreBtn.addEventListener("click", renderMore);
document.querySelectorAll(".sfilter").forEach(btn => btn.addEventListener("click", () => {
  document.querySelectorAll(".sfilter").forEach(b => b.classList.toggle("active", b === btn));
  setStoryFilter(btn.dataset.type);
}));
storiesGrid.addEventListener("click", e => {
  const t = e.target.closest(".tile");
  if (t) openStory(view[+t.dataset.i]);
});

function escapeHTML(str) {
  return String(str).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

// ---------- Modal with Instagram embed ----------
const modal = document.getElementById("modal");
const frame = document.getElementById("modalFrame");
const info = document.getElementById("modalInfo");

function embed(type, code, title) {
  const kind = type === "reel" ? "reel" : "p";
  frame.className = "modal-frame" + (type === "reel" ? "" : " post");
  frame.innerHTML = `<iframe src="https://www.instagram.com/${kind}/${code}/embed/" allow="autoplay; encrypted-media; fullscreen; clipboard-write" allowfullscreen title="${escapeHTML(title)}"></iframe>`;
}
function showModal() {
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function openWork(w) {
  embed("reel", w.ig.split("/")[1], w.title);
  info.innerHTML = `
    <span class="kind">${w.label}</span>
    <h3>${w.title}</h3>
    <p>${w.desc}</p>
    <ul>${w.credits.map(([k, v]) => `<li><b>${k}</b> — ${v}</li>`).join("")}</ul>
    <a href="${IG}${w.ig}/" target="_blank" rel="noopener">Watch on Instagram ↗</a>`;
  showModal();
}
function openStory(s) {
  embed(s.type, s.code, s.title);
  info.innerHTML = `
    <span class="kind">${s.type === "reel" ? "Reel" : "Post"}</span>
    <h3>${escapeHTML(s.title)}</h3>
    <p class="meta">♥ ${s.likes || "—"} · ${s.date}</p>
    <a href="${s.url}" target="_blank" rel="noopener">Open on Instagram ↗</a>`;
  showModal();
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  setTimeout(() => { frame.innerHTML = ""; }, 350);
}
grid.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (card) openWork(WORK[+card.dataset.index]);
});
modal.addEventListener("click", e => { if (e.target.closest("[data-close]")) closeModal(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape") { closeModal(); setMenu(false); }
});

// ---------- Menu ----------
const menuBtn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".menu-overlay");
function setMenu(open) {
  document.body.classList.toggle("menu-open", open);
  menuBtn.setAttribute("aria-expanded", open);
  overlay.setAttribute("aria-hidden", !open);
}
menuBtn.addEventListener("click", () => setMenu(!document.body.classList.contains("menu-open")));
overlay.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));

// ---------- Header colour + hero parallax ----------
const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-title");
function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("dark", y > hero.offsetHeight - 60);
  if (y < hero.offsetHeight && !reduceMotion) {
    heroTitle.style.transform = `translateY(${y * 0.25}px) scale(${1 - y / hero.offsetHeight * 0.08})`;
  }
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// ---------- Reveal on scroll + counters ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target;
    el.classList.add("in");
    const num = el.querySelector && el.querySelector("[data-count]");
    if (num) countUp(num);
    io.unobserve(el);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal, .card").forEach((el, i) => {
  if (el.classList.contains("card")) el.style.transitionDelay = `${(i % 3) * 90}ms`;
  io.observe(el);
});
function countUp(el) {
  const target = +el.dataset.count;
  const start = performance.now();
  (function tick(now) {
    const p = Math.min((now - start) / 1400, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

document.getElementById("year").textContent = new Date().getFullYear();
