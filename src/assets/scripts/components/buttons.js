'use strict';

// Initialize portfolio buttons & add active class
const portfolioBtns = document.querySelectorAll('.portfolio_button');
portfolioBtns.forEach((btn) =>
  btn.addEventListener('click', function (event) {
    portfolioBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.toggle('active');
  })
);
// Initialize form button
const formSubmit = document.querySelector('form');
formSubmit.addEventListener('submit', function (event) {
  event.preventDefault();
  alert('Thank you for your question! We answer you as soon as possible.');
});
