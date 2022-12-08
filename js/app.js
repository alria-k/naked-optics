// burger menu

let burger = document.querySelector(".burger__menu"),
  burgerLines = document.querySelector(".burger-lines"),
  burgerMenu = document.querySelector(".mobile-nav__box"),
  overflow = document.createElement("div"),
  mobileNavBurger = document.querySelectorAll(".catalog-category");

overflow.className = "overflow-popup";

burger.addEventListener("click", (e) => {
  burgerMenu.classList.toggle("hiden");
  burgerLines.classList.toggle("burger-cross");
  if (burgerMenu.classList.contains("hiden")) {
    document.body.style.overflow = "visible";
    mobileNavBurger[1].classList.remove("active");
    overflow.remove();
    catalogItems.forEach((e) => {
      e.classList.remove("is__open");
    });
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

function hoverTabs() {
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
}

// dragable carousel slider

function dragSlider(containerQuery, itemsQuery) {
  let sliderContainer = document.querySelector(containerQuery),
    itemsContainer = document.querySelector(itemsQuery),
    cursorPosition,
    movex,
    pressed = false;
  sliderContainer.addEventListener("pointerdown", (event) => {
    pressed = true;
    cursorPosition =
      event.clientX - itemsContainer.getBoundingClientRect().left;
  });
  sliderContainer.addEventListener("pointerup", (event) => {
    pressed = false;
    if (movex >= 0) {
      itemsContainer.style.transform = "translateX(0px)";
      itemsContainer.style.transitionDuration = `300ms`;
    } else if (
      movex <=
      -Math.abs(itemsContainer.scrollWidth - sliderContainer.clientWidth)
    ) {
      itemsContainer.style.transform = `translateX(${-Math.abs(
        itemsContainer.scrollWidth - sliderContainer.clientWidth
      )}px)`;
      itemsContainer.style.transitionDuration = `300ms`;
    }
  });
  sliderContainer.addEventListener("pointermove", (event) => {
    if (!pressed) return;
    movex = event.pageX - sliderContainer.offsetLeft - cursorPosition;
    itemsContainer.style.transform = `translateX(${movex}px)`;
    itemsContainer.style.transitionDuration = `0ms`;
  });
}
dragSlider(".story-slider__container", ".story-slider");
if (window.innerWidth < 1330) {
  dragSlider(".solution-slider__container", ".solution-slider");
}
if (window.innerWidth < 1130) {
  dragSlider(".celebs-slider__container", ".celebs-slider");
}
if (window.innerWidth < 550) {
  dragSlider(".glasses-slider__container", ".glasses-slider");
}

//mobile nav menu

let mobileNavBtn = document.querySelectorAll(".mobile-nav__link"),
  target;

mobileNavBtn[0].addEventListener("click", (e) => {
  target = e.target
    .closest(".mobile-nav__item")
    .querySelector(".catalog-category");
  target.classList.add("active");
});

hoverTabs();

//show search tab

let headerBox = document.querySelector(".header__box"),
  searchBtn = document.querySelectorAll(".search-btn"),
  searchBox = document.querySelector(".search__box"),
  deleteSearch = document.querySelector(".search-delete-icon"),
  burgerBox = document.querySelector(".burger__box");

searchBtn.forEach((item) => {
  item.addEventListener("click", (e) => {
    searchBox.classList.add("animation__search");
    document.body.prepend(overflow);
    if (window.innerWidth > 1150) {
      headerBox.classList.add("closed");
    } else {
      burgerBox.classList.add("closed");
    }
  });
  deleteSearch.addEventListener("click", (e) => {
    searchBox.classList.remove("animation__search");
    overflow.remove();
    if (window.innerWidth > 1150) {
      headerBox.classList.remove("closed");
    } else {
      burgerBox.classList.remove("closed");
    }
  });
});

// back mobile nav

let backBtn = document.querySelector(".back-btn"),
  catalogItemTarget;

backBtn.addEventListener("click", (e) => {
  catalogItems.forEach((e) => {
    catalogItemTarget = e;
    if (catalogItemTarget.classList.contains("is__open")) {
      catalogItemTarget.classList.remove("is__open");
    }
  });
});
