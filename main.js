/* SwipeUp Studios — interactions */

// ---------- Work data (from @swipeup.studios) ----------
const WORK = [
  {
    slug: "mutuals", title: "Mutuals", kind: "original", label: "Original",
    sub: "A café love story · 882K likes", ig: "reel/DWWbTowk-Vi",
    desc: "Two strangers, one café, and the slow realisation that they have more in common than mutual friends. Our most-loved original so far.",
    credits: [["Written & Directed", "@im__sai_kumar"], ["Cinematography", "@_just_bharath"], ["Edited by", "@sai_teja.edits"], ["Cast", "@koviiiiiiiiiii_ · @maadhuuu29"]]
  },
  {
    slug: "scribbles", title: "Scribbles", kind: "original", label: "Original",
    sub: "Love, coffee & notes · 375K likes", ig: "reel/DVBTUolE-FY",
    desc: "A barista, a regular, and the little notes scribbled between them. A quiet romance set to Electric Love.",
    credits: [["Written & Directed", "@nithin.movies"], ["Cinematography", "@sonu_glimmers"], ["Edited by", "@heymonth_kumaarr"], ["In Frame", "@shivaram.actor · @maadhuuu29"]]
  },
  {
    slug: "love-in-the-lift", title: "Love in the Lift", kind: "original", label: "Original Series",
    sub: "Apartment love story · 257K likes", ig: "reel/DOQoH_hE86I",
    desc: "Every ride up is a chance. A musical micro drama series about two neighbours who keep meeting in the lift.",
    credits: [["Written & Directed", "@deeppakdhharani"], ["Cinematography", "@lokeshsunny16"], ["Edited by", "@sai_teja09_"], ["Cast", "@deeppakdhharani · @himishachowdary"]]
  },
  {
    slug: "hare-krishna", title: "Hare Krishna", kind: "original", label: "Original",
    sub: "A devotional short · 103K likes", ig: "reel/DeHNWz9KUKT",
    desc: "A heartfelt devotional short made with the Hare Krishna Golden Temple.",
    credits: [["Written & Directed", "@deeppakdhharani"], ["Cinematography", "@lokeshsunny16"], ["Infographics", "@sai_teja.edits"]]
  },
  {
    slug: "girl-next-door", title: "The Girl Next Door", kind: "ad", label: "Ad Film · Peps",
    sub: "Peps Mattress Diwali campaign", ig: "reel/DfUoIpmKjpt",
    desc: "A Diwali story for Peps Mattress about the girl next door — and the comfort of home.",
    credits: [["Written & Directed", "@__prashanth_sai"], ["Cinematography", "@harish.k.dadi"], ["Edited by", "@sai_teja.edits"], ["Cast", "@margam_aditya · @pragnaaa.__"]]
  },
  {
    slug: "some-loves", title: "Some Loves", kind: "ad", label: "Ad Film · Peps",
    sub: "Peps Crystal Mattress", ig: "reel/DeB91VPqf0y",
    desc: "Some loves make you jealous. Some make sure you sleep well. Peps Crystal brings comfort to both sides of the bed.",
    credits: [["Written & Directed", "@ganesheffect"], ["Cinematography", "@lokeshsunny16"], ["Edited by", "@sai_teja.edits"], ["Cast", "@shivaram.actor · @sivaprasannagsp"]]
  },
  {
    slug: "with-you", title: "Always With You", kind: "ad", label: "Ad Film · Peps",
    sub: "500kms or 500m — Peps Mattress", ig: "reel/DcJJjTSzCm4",
    desc: "500 km or 500 m apart, always with you. A long-distance love story for Peps Mattress.",
    credits: [["Written & Directed", "@__prashanth_sai"], ["Cinematography", "@harish.k.dadi"], ["Edited by", "@a_4._.apple___"], ["Cast", "@k_kalyan_ · @riyaagram_12"]]
  },
  {
    slug: "the-gangsters", title: "The Gangsters", kind: "original", label: "Original",
    sub: "Our Diwali special", ig: "reel/DfeEl99q5K9",
    desc: "The whole SUP crew in front of the camera for a Diwali short full of crackers and chaos.",
    credits: [["Written & Directed", "@__prashanth_sai"], ["Cinematography", "@harish.k.dadi"], ["Screenplay & Edit", "@a_4._.apple___"]]
  }
];

const IG_BASE = "https://www.instagram.com/swipeup.studios/";

// ---------- Build work grid ----------
const grid = document.getElementById("workGrid");
grid.innerHTML = WORK.map((w, i) => `
  <button class="card" data-kind="${w.kind}" data-index="${i}" aria-label="Watch ${w.title}">
    <div class="card-media">
      <img src="/assets/work/${w.slug}.jpg" alt="${w.title}" loading="lazy" />
      <span class="card-tag">${w.label}</span>
      <span class="card-play" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="22" height="22"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>
      </span>
    </div>
    <div class="card-meta">
      <h3>${w.title}</h3><span class="rule"></span><p>${w.sub}</p>
    </div>
  </button>`).join("");

// ---------- Filters ----------
document.querySelectorAll(".filter").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b === btn));
    const f = btn.dataset.filter;
    grid.querySelectorAll(".card").forEach(c => {
      c.classList.toggle("hide", f !== "all" && c.dataset.kind !== f);
    });
  });
});

// ---------- Modal with Instagram embed ----------
const modal = document.getElementById("modal");
const frame = document.getElementById("modalFrame");
const info = document.getElementById("modalInfo");

function openModal(w) {
  const id = w.ig.split("/")[1];
  frame.innerHTML = `<iframe src="https://www.instagram.com/reel/${id}/embed/" allow="autoplay; encrypted-media; fullscreen" allowfullscreen loading="lazy" title="${w.title}"></iframe>`;
  info.innerHTML = `
    <span class="kind">${w.label}</span>
    <h3>${w.title}</h3>
    <p>${w.desc}</p>
    <ul>${w.credits.map(([k, v]) => `<li><b>${k}</b> — ${v}</li>`).join("")}</ul>
    <a href="${IG_BASE}${w.ig}/" target="_blank" rel="noopener">Watch on Instagram ↗</a>`;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}
function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  setTimeout(() => { frame.innerHTML = ""; }, 350);
}
grid.addEventListener("click", e => {
  const card = e.target.closest(".card");
  if (card) openModal(WORK[+card.dataset.index]);
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

// ---------- Header colour on scroll ----------
const header = document.querySelector(".site-header");
const hero = document.querySelector(".hero");
const heroTitle = document.querySelector(".hero-title");
function onScroll() {
  const y = window.scrollY;
  header.classList.toggle("dark", y > hero.offsetHeight - 60);
  // subtle hero parallax, like a pinned intro
  if (y < hero.offsetHeight) {
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
  if (el.classList.contains("card")) el.style.transitionDelay = `${(i % 2) * 90}ms`;
  io.observe(el);
});

function countUp(el) {
  const target = +el.dataset.count;
  const start = performance.now();
  const dur = 1400;
  (function tick(now) {
    const p = Math.min((now - start) / dur, 1);
    el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(tick);
  })(start);
}

// ---------- Hide images that fail to load (keeps layout clean) ----------
document.querySelectorAll("img").forEach(img => {
  img.addEventListener("error", () => { img.style.opacity = 0; }, { once: true });
});

document.getElementById("year").textContent = new Date().getFullYear();
