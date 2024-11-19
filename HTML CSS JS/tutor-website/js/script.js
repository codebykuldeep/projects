// Toggle mobile menu
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.querySelector(".navbar .mobile-menu-toggle");
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");

  toggleButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
  });
});

document.querySelectorAll(".mobile-menu-list li").forEach((link) => {
  link.addEventListener("click", () => {
    const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
    mobileMenu.classList.toggle("active");
  });
});
