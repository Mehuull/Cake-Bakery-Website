// my website
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector("#menu-btn");
const header = document.querySelector(".header");
const slides = document.querySelectorAll('.home .slide');
const nextBtn = document.getElementById('next-slide');
const prevBtn = document.getElementById('prev-slide');

let index = 0;

// JavaScript to toggle the
// visibility of the navigation menu
document.addEventListener("DOMContentLoaded",
    function () {
        const hamburger = document.getElementById("hamburger");
        const navbar = document.querySelector(".navbar");

        hamburger.addEventListener("click", function () {
            navbar.classList.toggle("active");
        });
    });

window.addEventListener("scroll", () => {
    navbar.classList.remove("active");
});

    let currentIndex = 0;

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    // Function to go to the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Function to go to the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    // Event listeners for the buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Show the first slide by default
    showSlide(currentIndex);