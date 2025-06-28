document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('videoCarousel');
    const dotsContainer = document.getElementById('carouselDots');
    const videoCards = document.querySelectorAll('.video-card');
    const totalSlides = videoCards.length;
    let currentSlide = 0;

    // Function to update carousel position
    function updateCarouselPosition() {
        // Calculate the translation needed. Each slide takes 100% of the wrapper width.
        const offset = -currentSlide * 100;
        carousel.style.transform = `translateX(${offset}%)`;
        updateDots();
    }

    // Function to create and update navigation dots
    function createDots() {
        dotsContainer.innerHTML = ''; // Clear existing dots
        for (let i = 0; i < totalSlides; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.slideIndex = i; // Store index for navigation
            dot.addEventListener('click', () => {
                currentSlide = i;
                updateCarouselPosition();
            });
            dotsContainer.appendChild(dot);
        }
        updateDots(); // Set initial active dot
    }

    // Function to highlight the active dot
    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    // Initialize carousel: create dots and set initial position
    createDots();
    updateCarouselPosition(); // Ensure initial position is correct

    // Optional: Add swipe functionality (for touch devices)
    let startX = 0;
    let endX = 0;

    carousel.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });

    carousel.addEventListener('touchmove', (e) => {
        // Prevent vertical scrolling while swiping horizontally
        // This is a basic implementation and can be refined.
        // e.preventDefault();
    });

    carousel.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diffX = endX - startX;

        if (diffX > 50) { // Swiped right (previous slide)
            currentSlide = (currentSlide > 0) ? currentSlide - 1 : 0;
        } else if (diffX < -50) { // Swiped left (next slide)
            currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : totalSlides - 1;
        }
        updateCarouselPosition();
    });

    // Optional: Auto-play carousel
    // let autoPlayInterval;
    // function startAutoPlay() {
    //     autoPlayInterval = setInterval(() => {
    //         currentSlide = (currentSlide + 1) % totalSlides;
    //         updateCarouselPosition();
    //     }, 5000); // Change slide every 5 seconds
    // }

    // function stopAutoPlay() {
    //     clearInterval(autoPlayInterval);
    // }

    // startAutoPlay(); // Uncomment to enable auto-play

    // // Pause auto-play on hover
    // carousel.parentNode.addEventListener('mouseenter', stopAutoPlay);
    // carousel.parentNode.addEventListener('mouseleave', startAutoPlay);
});