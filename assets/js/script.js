 // Wait until page fully loads
 window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("heroTitle").classList.add("fade-in");
    document.getElementById("heroTagline").classList.add("fade-in");
});

const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.about-img, .about-name, .about-desc, .service-box');
    const windowHeight = window.innerHeight;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 100) {
            el.classList.add('reveal');
        }
    });
};

window.addEventListener("load", function () {
    const loader = document.getElementById("loader-wrapper");
    loader.style.opacity = "0";
    setTimeout(() => {
        loader.style.display = "none";
    }, 600);
});

const reviewCarousel = document.getElementById('reviewCarousel');
const carousel = new bootstrap.Carousel(reviewCarousel, {
    interval: 5000,
    ride: 'carousel',
    pause: false
});

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll); 