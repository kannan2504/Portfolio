document.addEventListener("DOMContentLoaded", () => {
  'use strict';

  // element toggle
  const elementToggleFunc = (elem) => elem.classList.toggle("active");

  // Sidebar
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");
  if (sidebar && sidebarBtn) {
    sidebarBtn.addEventListener("click", () => elementToggleFunc(sidebar));
  }

  // Testimonials modal
  const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  if (modalContainer && modalCloseBtn && overlay) {
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    const testimonialsModalFunc = () => {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    testimonialsItem.forEach(item => {
      item.addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
        testimonialsModalFunc();
      });
    });

    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
    overlay.addEventListener("click", testimonialsModalFunc);
  }

  // Page navigation
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  navigationLinks.forEach(link => {
    link.addEventListener("click", () => {
      const target = link.innerText.toLowerCase();

      navigationLinks.forEach(l => l.classList.remove("active"));
      pages.forEach(p => p.classList.remove("active"));

      link.classList.add("active");
      document.querySelector(`[data-page="${target}"]`)?.classList.add("active");
      window.scrollTo(0, 0);
    });
  });
});
