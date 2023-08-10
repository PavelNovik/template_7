// Initialize Home swiper-slider with swiperJS API
const swiper = new Swiper('.swiper', {
  speed: 600,
  parallax: true,
  cssMode: true,
  loop: true,

  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<span class="' + className + '" style="margin: 2rem">' + '</span>'
      );
    },
  },
  mousewheel: true,
  keyboard: true,
});

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

// Initialize portfolio buttons & add active class
const portfolioBtns = document.querySelectorAll('.portfolio_button');
portfolioBtns.forEach((btn) =>
  btn.addEventListener('click', function (event) {
    portfolioBtns.forEach((btn) => btn.classList.remove('active'));
    btn.classList.toggle('active');
  })
);

// Initialize custom view sections (opacity duration) with scrollReveal API
// sections.forEach((section) =>
//   ScrollReveal().reveal(`#${section.id}`, { duration: 700 })
// );
