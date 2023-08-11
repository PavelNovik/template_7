'use strict';
// Initialize sections (parts)
const sections = document.querySelectorAll('section');

// Initialize navigation buttons and scroll function
const navigationBtns = document.querySelectorAll('.list_item');

navigationBtns.forEach((btn) => {
  btn.addEventListener('click', function (event) {
    let coordY;
    sections.forEach((section) => {
      coordY =
        section.id === event.target.textContent ? section.offsetTop : coordY;
    });
    window.scroll({
      top: coordY,
      left: 0,
      behavior: 'smooth',
    });
  });
});
