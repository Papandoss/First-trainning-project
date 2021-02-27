import '../styles/index.scss';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

const btnMenu = document.querySelector(".header__btn-menu");
const headerUl = document.querySelector(".header__ul");
const btnTheme = document.querySelector(".header__btn-theme");
const page = document.querySelector(".theme");
const spanText = document.querySelector(".main__wrapper__content__span");
const menuSpan = document.querySelector(".header__btn-menu span");

btnMenu.onclick = function () {
  menuSpan.classList.toggle("active");
  btnMenu.classList.toggle("active");
  headerUl.classList.toggle("header__ul");
  headerUl.classList.toggle("header__ul-mob");
};

btnTheme.onclick = function () {
  page.classList.toggle("theme");
  page.classList.toggle("theme-dark");
  spanText.classList.toggle("main__wrapper__content__span");
  spanText.classList.toggle("main__wrapper__content__span_dark");
};

$(".autoplay").slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000
});
