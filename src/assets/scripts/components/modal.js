'use strict';
const modal = document.querySelector('.galery__modal');

const fade = document.querySelector('.modal-fade');
fade.addEventListener('click', closeModal);

const closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', closeModal);

const img = document.querySelector('.modal-img');

const photos = document.querySelectorAll('.photo');

photos.forEach((photo) =>
  photo.addEventListener('click', function (event) {
    const el = event.target.classList.contains('extra')
      ? event.target
      : event.target.parentElement;
    const src = el.nextElementSibling.getAttribute('src');

    closeModal();
    img.setAttribute('src', `${src}`);
  })
);

function closeModal() {
  modal.classList.toggle('galery__modal-novisible');
}
