const btnBack = document.querySelector('.gallery__button_type_back');
const btnNext = document.querySelector('.gallery__button_type_next');
const btnHeader = document.querySelector('.header__button');
const imgGallery = document.querySelector('.gallery-image__picture');
const firstBtn = document.getElementById('firstBtn');
const secondBtn = document.getElementById('secondBtn');
const pressText = document.querySelector('.press-content__text');
const pressSource = document.querySelector('.press-content__source');
const headerMenu = document.querySelector('.header__menu');
const headerLogo = document.querySelector('.header__logo');
const btnRead = document.querySelector('.press-content__read-button');
const btnSubscribe = document.querySelector('.footer-subscription__button');
const inputTypeFirstname = document.querySelector('.input_type_firstname');
const inputTypeLastname = document.querySelector('.input_type_lastname');
const inputTypeEmail = document.querySelector('.input_type_email');

const galleryPhotoUrls = [
    './images/car-gallery1.png',
    './images/car-gallery2.png',
    './images/car-gallery3.png'
];

let counter = 0;

btnNext.addEventListener('click', () => {
    ++counter;
    if (counter == galleryPhotoUrls.length) {
        counter = 0;
        imgGallery.setAttribute('src', galleryPhotoUrls[counter]);
    } else {
        imgGallery.setAttribute('src', galleryPhotoUrls[counter]);
    }
});

btnBack.addEventListener('click', () => {
    --counter;
    if (counter < 0) {
        counter = galleryPhotoUrls.length - 1;
        imgGallery.setAttribute('src', galleryPhotoUrls[counter]);
    } else {
        imgGallery.setAttribute('src', galleryPhotoUrls[counter]);
    }
});

firstBtn.addEventListener('click', () => {
    firstBtn.classList.toggle('press-content__list-button_active');
    secondBtn.classList.toggle('press-content__list-button_active');
    pressText.innerHTML = "<span class='press-content__source'>Drive.ru: </span> Вэн Volkswagen e-Bulli скрестил классику с современной техникой.";
    btnRead.setAttribute("onclick", "window.location.href = 'https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html';")
})

secondBtn.addEventListener('click', () => {
    firstBtn.classList.toggle('press-content__list-button_active');
    secondBtn.classList.toggle('press-content__list-button_active');
    pressText.innerHTML = "<span class='press-content__source'>Engadget: </span> VW’s e-BULLI concept shows how your classic van can become an EV.";
    btnRead.setAttribute("onclick", "window.location.href = 'https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html';")
})

btnHeader.addEventListener('click', () => {
    if (btnHeader.classList.contains('header__button_close')) {
        headerLogo.style.display = "block";
        headerMenu.style.display = "none";
        //btnHeader.setAttribute("src", "./images/Lines.png");
    } else {
        headerLogo.style.display = "none";
        headerMenu.style.display = "flex";
        //btnHeader.setAttribute("src", "./images/close.svg");
    }
    btnHeader.classList.toggle('header__button_close');
})

btnSubscribe.addEventListener('click', () => {
    if (
        inputTypeFirstname.value != "" && inputTypeLastname.value != "" && inputTypeEmail.value != ""
    ) {
        btnSubscribe.innerHTML = "Готово!";
    }
})