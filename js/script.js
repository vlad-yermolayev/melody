document.addEventListener('DOMContentLoaded', function () {
  const HEADER_MENU = document.querySelector('.header__menu');
  const BUTTON_MENU = HEADER_MENU.querySelector('.button-menu');
  const BUTTON_SCHEME = document.querySelector('.button-scheme');
  const MODAL = document.querySelector('.modal');
  const BUTTON_CLOSE_MODAL = MODAL.querySelector('.close');

  BUTTON_MENU.addEventListener('click', function () {
    HEADER_MENU.classList.toggle('header__menu--active');
  })

  BUTTON_SCHEME.addEventListener('click', function () {
    MODAL.classList.toggle('modal--open');
  })

  BUTTON_CLOSE_MODAL.addEventListener('click', function () {
    MODAL.classList.remove('modal--open');
  })

  window.addEventListener('keydown', function (e) {
    // if (e.keyCode === 27) {
    //   MODAL.classList.remove('modal--open');
    // }

    if (e.code === 'Escape') {
      MODAL.classList.remove('modal--open');
    }

    // if (e.key === 'Escape') {
    //   MODAL.classList.remove('modal--open');
    // }
  })

});