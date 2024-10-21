const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  autoplay: {
    delay: 3000, // Auto-scroll every 3 seconds
    disableOnInteraction: false,
  },
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

  // Function to detect if the user is on a mobile device
  function isMobileDevice() {
    return /Mobi|Android/i.test(navigator.userAgent);
  }

  // Modify buttons based on device type
  window.onload = function() {
    const callButton = document.getElementById('call-button');
    const emailButton = document.getElementById('email-button');

    if (isMobileDevice()) {
      // For mobile: Open calling app and email app
      callButton.href = 'tel:+919876543210';  // Replace with the actual phone number
      emailButton.href = 'mailto:contact@bdsfc.com';  // Replace with the actual email address
    } else {
      // For desktop: Scroll to contact section
      callButton.href = '#contact';
      emailButton.href = '#contact';
    }
  };
