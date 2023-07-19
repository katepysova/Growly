const menuButtonElement = document.querySelector(".menu");
const headerElement = document.querySelector(".header");

menuButtonElement.addEventListener("click", () => {
  headerElement.classList.toggle("header--collapsed");
});
