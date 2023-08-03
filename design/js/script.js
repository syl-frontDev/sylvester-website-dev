// FAQ toggle

let firstFaq = document.querySelector('.first');
let secondFaq = document.querySelector('.second');
let thirdFaq = document.querySelector('.third');
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

