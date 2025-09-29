// #region Header

const searchBtn = document.querySelector(".search-btn");
const searchInput = document.querySelector(".search-input");

const openSearchInput = () => {
  searchInput.classList.toggle("active");
};
const closeSearchInput = (e) => {
  if (
    !searchBtn.contains(e.target) &&
    !searchInput.contains(e.target) &&
    searchInput.classList.contains("active")
  ) {
    searchInput.classList.remove("active");
  }
};

searchBtn.addEventListener("click", openSearchInput);
document.addEventListener("click", closeSearchInput);

// #endregion Header

// #region slideBar

const slideBar = document.querySelector(".slideBar");
const burgerButton = document.querySelector(".burger-menu");
const overlay = document.querySelector(".overlay");

const openSlideBar = () => {
  slideBar.classList.add("active");
  overlay.classList.add("active");
  searchInput.classList.remove("active");
};
const closeSideBar = () => {
  slideBar.classList.remove("active");
  overlay.classList.remove("active");
};

burgerButton.addEventListener("click", openSlideBar);
overlay.addEventListener("click", closeSideBar);

// #endregion slideBar
