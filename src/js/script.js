import checkEmail from "./form.js";

const menuButtonElement = document.querySelector(".menu");
const headerElement = document.querySelector(".header");
const formElement = document.querySelector(".form");
const emailElement = document.querySelector("#email");

const yearElement = document.querySelector("#year");
const navLinks = document.querySelectorAll(".nav__link");

yearElement.innerText = new Date().getFullYear();

formElement.addEventListener("submit", (event) => {
  event.preventDefault();
  const isEmailValid = checkEmail(emailElement);

  if (isEmailValid) {
    /*
      send data
    */
    emailElement.value = "";
  }
});

menuButtonElement.addEventListener("click", () => {
  headerElement.classList.toggle("header--collapsed");
});

window.addEventListener("resize", () => {
  if (headerElement.classList.contains("header--collapsed")) {
    headerElement.classList.remove("header--collapsed");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else if (href !== "#" && href.startsWith("#")) {
      const target = document.querySelector(href);
      target.scrollIntoView({
        behavior: "smooth",
      });
    }

    if (headerElement.classList.contains("header--collapsed")) {
      headerElement.classList.remove("header--collapsed");
    }
  });
});
