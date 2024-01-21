



let menuBtn = document.querySelector('.menu__btn');
let menuClose = document.querySelector('.menu__close');
let menuList = document.querySelector('.menu__list');
let menuShadow = document.querySelector('.menu--close');

menuBtn.addEventListener('click', ()=>{
    menuList.classList.toggle('menu__list--open');
    menuShadow.classList.toggle('menu--open');
});
menuClose.addEventListener('click', ()=>{
    menuList.classList.remove('menu__list--open');
    menuShadow.classList.remove('menu--open');
});