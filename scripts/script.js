var slideIndex = 1;
const slides = ['resources/carousel_images/pic1.jpg', 'resources/carousel_images/pic2.jpg', 'resources/carousel_images/pic3.jpg']
showSlides(slideIndex);

function plusSlides(n) {
    slideIndex += n;
    if (slideIndex > slides.length) slideIndex = 1;
    if (slideIndex < 1) slideIndex = slides.length;
    showSlides();
}

function showSlides() {
    console.log(document.getElementById('imageCarousel'));
    document.getElementById('imageCarousel').src = slides[slideIndex - 1];
    document.getElementById('imageCarousel').style.display = "block";
}