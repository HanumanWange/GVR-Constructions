// document.addEventListener("DOMContentLoaded", () => {
//     // Mobile menu toggle
//     const nav = document.querySelector("nav ul");
//     const toggle = document.querySelector(".nav-toggle");
//     toggle.addEventListener("click", () => {
//         nav.classList.toggle("active");
//     });

//     // Carousel functionality
//     const slides = document.querySelector(".carousel-slides");
//     const totalSlides = document.querySelectorAll(".carousel-slide").length;
//     let currentIndex = 0;

//     function updateCarousel() {
//         slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     }

//     document.querySelector(".carousel-next").addEventListener("click", () => {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         updateCarousel();
//     });

//     document.querySelector(".carousel-prev").addEventListener("click", () => {
//         currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//         updateCarousel();
//     });

//     // Auto-slide
//     setInterval(() => {
//         currentIndex = (currentIndex + 1) % totalSlides;
//         updateCarousel();
//     }, 5000);
// });

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

    // Show Bootstrap modal on page load
    const welcomeModal = new bootstrap.Modal(document.getElementById("welcomeModal"), {
        backdrop: "static", // Prevents closing by clicking outside
        keyboard: false     // Prevents closing with Esc key (optional)
    });
    welcomeModal.show();


    // // Existing code
    // const welcomeModal = new bootstrap.Modal(document.getElementById("welcomeModal"), {
    //     backdrop: "static",
    //     keyboard: false
    // });
    // welcomeModal.show();
});

// Function to fetch projects from MongoDB
async function fetchProjects() {
    try {
        const response = await fetch('http://localhost:3000/api/projects');
        const projects = await response.json();
        
        // Update the projects grid with data from MongoDB
        const projectsGrid = document.querySelector('.projects-grid');
        projectsGrid.innerHTML = projects.map(project => `
            <div class="project-card">
                <img src="${project.imageUrl}" alt="${project.title}">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>Location: ${project.location}</p>
            </div>
        `).join('');
    } catch (error) {
        console.error('Error fetching projects:', error);
    }
}

// Call fetchProjects when the page loads
document.addEventListener('DOMContentLoaded', fetchProjects);