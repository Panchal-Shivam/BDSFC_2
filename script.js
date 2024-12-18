document.addEventListener("DOMContentLoaded", function () {
  console.log("JavaScript loaded on: " + window.location.pathname);

  // Existing navigation elements
  const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
  const menuOpenButton = document.querySelector("#menu-open-button");
  const menuCloseButton = document.querySelector("#menu-close-button");

  // Toggle mobile menu visibility
  menuOpenButton.addEventListener("click", () => {
      document.body.classList.toggle("show-mobile-menu");
      console.log("Menu opened/closed");
  });

  // Close menu when the close button is clicked
  menuCloseButton.addEventListener("click", () => {
      menuOpenButton.click();
      console.log("Menu closed via close button");
  });

  // Close menu when non-dropdown nav link is clicked
  navbarLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
          if (!link.closest("#resources-dropdown")) { // Exclude dropdown link
              menuOpenButton.click(); // Close sidebar only for regular links
              console.log("Nav link clicked: " + link.textContent);
          }
      });
  });

  // Mobile Dropdown Toggle for Resources
  const dropdownToggle = document.querySelector("#resources-dropdown .dropdown-toggle");
  const dropdownContent = document.querySelector("#resources-dropdown .dropdown-content");

  // Only add event listener if the elements are found on the page
  if (dropdownToggle && dropdownContent) {
      dropdownToggle.addEventListener("click", (event) => {
          if (window.innerWidth <= 768) { // Mobile only
              event.preventDefault();
              event.stopPropagation(); // Prevent click from closing the menu
              dropdownContent.classList.toggle("show-dropdown");
              console.log("Dropdown toggled");
          }
      });
  } else {
      console.log("Dropdown toggle or content NOT found");
  }

  // Swiper Initialization
  let swiper = new Swiper(".slider-wrapper", {
      loop: true,
      autoplay: {
          delay: 3000,
          disableOnInteraction: false,
      },
      grabCursor: true,
      spaceBetween: 25,
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
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

  // Detect if the user is on a mobile device
  function isMobileDevice() {
      return /Mobi|Android/i.test(navigator.userAgent);
  }

  // Modify buttons based on device type
  window.onload = function() {
      const callButton = document.getElementById('call-button');
      const emailButton = document.getElementById('email-button');

      if (isMobileDevice()) {
          callButton.href = 'tel:+919876543210';  // Replace with actual phone number
          emailButton.href = 'mailto:contact@bdsfc.com';  // Replace with actual email address
      } else {
          callButton.href = '#contact';
          emailButton.href = '#contact';
      }
  };
});
