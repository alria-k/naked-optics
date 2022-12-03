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

// mouse hover tabs

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

// mouse hover tabs-items

let categoryItems = document.querySelectorAll(".category-item"),
  catalogItems = document.querySelectorAll(".catalog-item");

categoryItems.forEach((e) => {
  e.addEventListener("mouseenter", (lol) => {
    for (let pop of categoryItems) {
      pop.classList.remove("is__point");
    }
    lol.target.classList.add("is__point");
    catalogItems.forEach((e) => {
      e.classList.remove("is__open");
      if (e.dataset.item == lol.target.dataset.category) {
        e.classList.add("is__open");
      }
    });
  });
});

// dragable carousel slider

let sliderContainer = document.querySelector(".lol__container"),
  itemsContainer = document.querySelector(".lol"),
  sliderWidth,
  cursorPosition,
  offsetXSlider,
  rect = sliderContainer.getBoundingClientRect(),
  pressed = false;

sliderContainer.addEventListener("mousedown", (e) => {
  sliderWidth = -Math.abs(
    sliderContainer.scrollWidth - sliderContainer.clientWidth
  );
  rect = e.currentTarget.getBoundingClientRect();
  offsetXSlider = e.clientX - rect.left;
  cursorPosition =
    offsetXSlider - (itemsContainer.offsetLeft - itemsContainer.offsetLeft);
  pressed = true;
});
sliderContainer.addEventListener("mouseup", (e) => {
  pressed = false;
});

sliderContainer.addEventListener("mousemove", dragSlide);

function dragSlide(event) {
  if (!pressed) return;
  event.preventDefault();

  x = event.clientX - rect.left;

  let moveX = x - cursorPosition;

  itemsContainer.style.transform = `translateX(${moveX}px)`;
  if (moveX >= 1) {
    itemsContainer.style.transform = `translateX(0px)`;
  } else if (moveX <= sliderWidth) {
    itemsContainer.style.transform = `translateX(${sliderWidth}px)`;
    moveX = sliderWidth;
  }
}
