import checkEmail from "./form.js";

const menuButtonElement = document.querySelector(".menu");
const headerElement = document.querySelector(".header");
const formElement = document.querySelector(".form");
const emailElement = document.querySelector("#email");

const yearElement = document.querySelector("#year");

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
