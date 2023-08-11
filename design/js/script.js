const btnhamburger = document.querySelector('#btnhamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');

btnhamburger.addEventListener('click', function () {
    console.log("open");

    if (header.classList.contains('open')) {
        body.classList.remove('noscroll');
        header.classList.remove('open');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });

    }
    else {
        body.classList.add('noscroll');
        header.classList.add('open');
        fadeElements.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    }

});


// FAQ toggle
let firstFaq = document.querySelector('.first');
let secondFaq = document.querySelector('.second');
let thirdFaq = document.querySelector('.third');
let fourthFaq = document.querySelector('.fourth');
let fifthFaq = document.querySelector('.fifth');
let sixthFaq = document.querySelector('.sixth');
let display = 0;

/*

    MODIFYING THE CODE


    * Create a class
    * class must be assigned id
    * Add eListener to select id, and it must select the function



*/

function firstFaqFun() {

    if (display == 0) {
        firstFaq.style.display = 'block';
        display = 1;
    }
    else {
        firstFaq.style.display = 'none';
        display = 0;
    }
}

function secondFaqFun() {

    if (display == 0) {
        secondFaq.style.display = 'block';
        display = 1;
    }
    else {
        secondFaq.style.display = 'none';
        display = 0;
    }
}

function thirdFaqFun() {

    if (display == 0) {
        thirdFaq.style.display = 'block';
        display = 1;
    }
    else {
        thirdFaq.style.display = 'none';
        display = 0;
    }
}
function fourthFaqFun() {

    if (display == 0) {
        fourthFaq.style.display = 'block';
        display = 1;
    }
    else {
        fourthFaq.style.display = 'none';
        display = 0;
    }
}
function fifthFaqFun() {

    if (display == 0) {
        fifthFaq.style.display = 'block';
        display = 1;
    }
    else {
        fifthFaq.style.display = 'none';
        display = 0;
    }
}
function sixthFaqFun() {

    if (display == 0) {
        sixthFaq.style.display = 'block';
        display = 1;
    }
    else {
        sixthFaq.style.display = 'none';
        display = 0;
    }
}

// end of FAQ toggle

/*
// From scratch method
// Image preview for home page
document.querySelectorAll('.gallery__column img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.gallery__popup-image').style.display = 'block';
        document.querySelector('.gallery__popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.gallery__popup-image span').onclick = () => {
    document.querySelector('.gallery__popup-image').style.display = 'none';
};
*/

