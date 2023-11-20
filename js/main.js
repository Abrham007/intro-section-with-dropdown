const menuIcon = document.querySelector(".main-nav__menu-icon");
const mainNav = document.querySelector(".js-main-nav");
const dropDownLinks = document.querySelectorAll(".js-drop-down-link");
const dropDowns = document.querySelectorAll(".js-drop-down");
menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("menu-close");
  mainNav.classList.toggle("display-flex");
});

for (let i = 0; i < dropDownLinks.length; i++) {
  dropDownLinks[i].addEventListener("click", function () {
    dropDowns[i].classList.toggle("display-flex");
  });
}
