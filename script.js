document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const nav = document.querySelector("nav ul");
    const toggle = document.querySelector(".nav-toggle");
    toggle.addEventListener("click", () => {
        nav.classList.toggle("active");
    });

    // Carousel functionality
    const slides = document.querySelector(".carousel-slides");
    const totalSlides = document.querySelectorAll(".carousel-slide").length;
    let currentIndex = 0;

    function updateCarousel() {
        slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    document.querySelector(".carousel-next").addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    });

    document.querySelector(".carousel-prev").addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateCarousel();
    });

    // Auto-slide
    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateCarousel();
    }, 5000);
});