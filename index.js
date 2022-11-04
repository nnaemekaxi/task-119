let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("img-tag");
    let nominee = document.getElementsByClassName("nominee");
    if (n > slides.length){
        slideIndex = 1
    } if (n < 1){
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        nominee[i].style.display = "none";
        slides[slideIndex - 1].style.display = "inline";
        nominee[slideIndex - 1].style.display = "inline";
        
    }
}