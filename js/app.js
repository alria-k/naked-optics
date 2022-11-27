// burger menu

let burger = document.querySelector(".burger__menu"),
  burgerMenu = document.querySelector(".mobile-nav__box");

burger.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("hiden");
  if (burgerMenu.classList.contains("hiden")) {
    document.body.style.overflow = "visible";
    document.body.style.background = "#F6F6F6";
  } else {
    document.body.style.overflow = "hidden";
    document.body.style.background = "rgba(34, 60, 80, 0.2)";
  }
});
