window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  var navbarLinks = document.querySelectorAll(".navbar-links");

  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "black";
    navbarLinks.forEach((link) => link.classList.add("white-links"));
  } else {
    navbar.style.backgroundColor = "transparent";
    navbarLinks.forEach((link) => link.classList.remove("white-links"));
  }
});
