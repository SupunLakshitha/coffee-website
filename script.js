const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

// Open / toggle mobile menu
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu
menuCloseButton.addEventListener("click", () => {
  document.body.classList.remove("show-mobile-menu");
});

// Close menu when the nav link is clicked
navLinks.forEach(link => {
link.addEventListener("click", () => menuOpenButton.click());
});

// Swiper Slider
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 25,
  grabCursor:true,

  // Pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive
  breakpoints: {
    568: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});

if (window.location.search.includes("success=1")) {
  alert("Message sent successfully!");
}