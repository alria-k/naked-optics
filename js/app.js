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

// mouse enter nav

let navItem = document.querySelectorAll(".catalog-object"),
  catalogBox = document.querySelectorAll(".header__catalog");

navItem.forEach((nav) => {
  nav.onmouseenter = nav.onmouseleave = showAndHideCatalog;
});
catalogBox.forEach((catal) => {
  catal.onmouseleave = showAndHideCatalog;
});

function showAndHideCatalog(event) {
  let catalogItem = event.currentTarget
    .closest(".nav__item")
    .querySelector(".header__catalog");
  if (event.type == "mouseenter" && catalogItem.classList.contains("hiden")) {
    catalogItem.classList.remove("hiden");
    document.body.prepend(overflow);
  } else if (
    event.type == "mouseleave" &&
    !event.relatedTarget.classList.contains("nav__item")
  ) {
    catalogItem.classList.add("hiden");
    overflow.remove();
  }
}
