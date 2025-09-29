window.addEventListener("DOMContentLoaded", () => {
  const mobileNavContainer = document.querySelector("#m-nav-container");
  const openNavBtn = document.querySelector("#open-nav-btn");
  const closeNavBtn = document.querySelector("#close-nav-btn");
  const mobileNavLinks = document.querySelectorAll(".m-nav");

  const openNav = () => {
    mobileNavContainer.classList.remove("close-nav");
    mobileNavContainer.classList.add("open-nav");
  };

  const closeNav = () => {
    mobileNavContainer.classList.remove("open-nav");
    mobileNavContainer.classList.add("close-nav");
  };

  openNavBtn.addEventListener("click", openNav);
  closeNavBtn.addEventListener("click", closeNav);

  mobileNavLinks.forEach(elem => {
    elem.addEventListener("click", closeNav);
  });
});
