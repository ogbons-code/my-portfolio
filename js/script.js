const button = document.querySelector("#hamburger-btn");
const mobileNav = document.getElementById("menu");
const changeColor = document.getElementById("dark-mode");
const fullPage = document.getElementById("full-section");
const projectSection = document.querySelector("#projects");
const cvSection = document.getElementById("my-resume");
const contactSection = document.getElementById("contact-me");

button.addEventListener("click", () => {
  button.classList.toggle("open");

  mobileNav.classList.toggle("flex");
  mobileNav.classList.toggle("hidden");
});

changeColor.addEventListener("click", () => {
  fullPage.classList.toggle("dark");
  cvSection.classList.toggle("images-black-bg");
  contactSection.classList.toggle("images-black-bg");
  projectSection.classList.toggle("images-black-bg");
  return;
});

changeColor.addEventListener("click", () => {
  let change = changeColor;
  if (change) {
    changeColor.classList.toggle("bg-dark-mode");
  } else {
    change = change;
  }
});

changeColor.innerText = "White Mode" ? "Dark mode" : "White Mode";
