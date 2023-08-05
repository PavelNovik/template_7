console.log('hello from index.js');
console.log('Starting project!');

const swiper = new Swiper('.swiper', {
  cssMode: true,
  loop: true,

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
