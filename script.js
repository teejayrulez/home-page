/* ========== NAVBAR SCROLL EFFECT ========== */
const navbar = document.getElementById("navbar");

const handleScroll = () => {
  if (window.scrollY > 20) navbar.classList.add("scrolled");
  else navbar.classList.remove("scrolled");
};
window.addEventListener("scroll", handleScroll);
handleScroll(); // run on load

/* ========== MOBILE MENU TOGGLE ========== */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("open");
  document.body.style.overflow = navMenu.classList.contains("open") ? "hidden" : "";
});

/* Close menu when a link is clicked */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("open");
    document.body.style.overflow = "";
  });
});

/* ========== ACTIVE LINK ON SCROLL ========== */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const activeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);
sections.forEach((s) => activeObserver.observe(s));

/* ========== FLOATING CARD PARALLAX ========== */
const heroVisual = document.querySelector(".hero-visual");
const cardMain = document.querySelector(".card-main");
const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");

window.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 768) return;

  const x = (e.clientX / window.innerWidth - 0.5) * 2;
  const y = (e.clientY / window.innerHeight - 0.5) * 2;

  card1.style.transform = `translate(${x * 14}px, ${y * 14}px)`;
  card2.style.transform = `translate(${x * -14}px, ${y * -14}px)`;
});