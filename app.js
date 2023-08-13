window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var navbarLinks = document.querySelectorAll(".navbar-links");

  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "Gray";
    navbarLinks.forEach((link) => link.classList.add("white-links"));
  } else {
    navbar.style.backgroundColor = "transparent";
    navbarLinks.forEach((link) => link.classList.remove("white-links"));
  }
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
