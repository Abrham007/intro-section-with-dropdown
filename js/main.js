const menuIcon = document.querySelector(".js-menu-icon");
const menuImg = document.querySelector(".js-menu-img");
const mainNav = document.querySelector(".js-main-nav");
const dropDownLinks = document.querySelectorAll(".js-drop-down-link");
const dropDownIcon = document.querySelector(".js-drop-icon");
const dropDowns = document.querySelectorAll(".js-drop-down");
menuIcon.addEventListener("click", function () {
  if (menuIcon.classList.contains("menu-close")) {
    menuIcon.classList.remove("menu-close");
    menuImg.src = "./images/icon-menu.svg";
    mainNav.classList.remove("display-flex");
  } else {
    menuIcon.classList.add("menu-close");
    menuImg.src = "./images/icon-close-menu.svg";
    mainNav.classList.add("display-flex");
  }
});

for (let i = 0; i < dropDownLinks.length; i++) {
  dropDownLinks[i].addEventListener("click", function () {
    if (dropDowns[i].classList.contains("display-flex")) {
      dropDownIcon.src = "./images/icon-arrow-down.svg";
      dropDowns[i].classList.remove("display-flex");
    } else {
      dropDowns[i].classList.add("display-flex");
      dropDownIcon.src = "./images/icon-arrow-up.svg";
    }
  });
}
