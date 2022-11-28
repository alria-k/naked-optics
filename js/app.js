// burger menu

let burger = document.querySelector(".burger__menu"),
  burgerLines = document.querySelector(".burger-lines"),
  burgerMenu = document.querySelector(".mobile-nav__box"),
  overflow = document.createElement("div");

overflow.className = "overflow-popup";

burger.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("hiden");
  burgerLines.classList.toggle("burger-cross");
  if (burgerMenu.classList.contains("hiden")) {
    document.body.style.overflow = "visible";
    overflow.remove();
  } else {
    document.body.style.overflow = "hidden";
    document.body.prepend(overflow);
  }
});
