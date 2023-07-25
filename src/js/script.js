import checkEmail from "./form.js";

const menuButtonElement = document.querySelector(".menu");
const headerElement = document.querySelector(".header");
const form = document.querySelector(".form");
const emailElem = document.querySelector("#email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const isEmailValid = checkEmail(emailElem);

  if (isEmailValid) {
    /*
      send data
    */
    emailElem.value = "";
  }
});
menuButtonElement.addEventListener("click", () => {
  headerElement.classList.toggle("header--collapsed");
});
