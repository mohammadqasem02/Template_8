const navBtn = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navBtn.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navBtn.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");
const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};

navLink.forEach((n) => n.addEventListener("click", linkAction));

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
  const scrollDown = window.scrollY;
  sections.forEach((current) => {
    const sectionHight = current.offsetHeight,
      sectionTop = current.offsetHeight - 58,
      sectionId = current.getAttribute("id"),
      sectionClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );
    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHight) {
      sectionClass.classList.add("active-link");
    } else {
      sectionClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/* Animation */

const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 400,
});
sr.reveal(`.home__card`, { delay: 600, distance: "100px", interval: 100 });
sr.reveal(`.about__data`, { origin: "right" });
sr.reveal(`.about__image`, { origin: "left" });
sr.reveal(`.popular__card`, { interval: 200 });
