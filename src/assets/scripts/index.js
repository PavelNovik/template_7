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

// Initialize custom view sections (opacity duration) with scrollReveal API
sections.forEach((section) =>
  ScrollReveal().reveal(`#${section.id}`, { duration: 700 })
);
