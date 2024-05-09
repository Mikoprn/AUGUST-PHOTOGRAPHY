// Navigation
const navMenuBtn = document.querySelector(".nav__menu-btn");
const navMenu = document.querySelector(".nav__menu");
const navLink = document.querySelectorAll(".nav__link");

navMenuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navLink.forEach((link) =>
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  })
);

// click outside
document.addEventListener("click", (e) => {
  if (!navMenuBtn.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});

// FAQS Accordion section active
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", () => {
    accordions.forEach((accordion) => accordion.classList.remove("active"));
    accordion.classList.add("active");
  });
});

// Footer year
const year = document.getElementById("year");
year.innerText = new Date().getFullYear();
