/*
From scratch method

// Image preview for other sections
document.querySelectorAll('.por_gallery__column img').forEach(image =>{
    image.onclick = () => {
        document.querySelector('.por_gallery__popup-image').style.display = 'block';
        document.querySelector('.por_gallery__popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.por_gallery__popup-image span').onclick = () => {
    document.querySelector('.por_gallery__popup-image').style.display = 'none';
};

*/