const menu = document.querySelector("#mobile-menu");
const menulinks = document.querySelector(".navbar-menu");

menu.addEventListener("click", function () {
  menu.classList.toggle("is-active");
  menulinks.classList.toggle("active");
});
// Close menu when any menu option is selected
const menuOptions = document.querySelectorAll(".navbar-menu li a");

menuOptions.forEach(function (option) {
  option.addEventListener("click", function () {
    menu.classList.remove("is-active");
    menulinks.classList.remove("active");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const scrollButton = document.querySelector(".scroll-button");

  scrollButton.addEventListener("click", function (event) {
    event.preventDefault();
    const targetSection = document.querySelector(this.getAttribute("href"));
    const yOffset = -80; // Adjust this value based on your design
    const y =
      targetSection.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: "smooth" });
  });
});
