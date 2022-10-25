import '../scss/style.scss';

let brandButton = document.querySelector('.section-button_brand');
let typesButton = document.querySelector('.section-button_types');
let wrapperActiveBrand = document.querySelector('.swiper__wrapper_brand');
let wrapperActiveTypes = document.querySelector('.swiper__wrapper_types');

let showMoreBrand = () => {
    wrapperActiveBrand.classList.toggle('swiper__wrapper_active');
    console.log(wrapperActive);
}

let showMoreType = () => {
    wrapperActiveTypes.classList.toggle('swiper__wrapper_active');
}

brandButton.addEventListener('click', showMoreBrand);
typesButton.addEventListener('click', showMoreType);
