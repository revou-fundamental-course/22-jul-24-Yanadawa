document.addEventListener('DOMContentLoaded', (event) => {
  const carouselInner = document.querySelector('.carousel-inner');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const prevButton = document.querySelector('.carousel-control.prev');
  const nextButton = document.querySelector('.carousel-control.next');

  let currentIndex = 0;
  let slideInterval;

  // Function to update the carousel's position
  function updateCarouselPosition() {
    const itemWidth = carouselItems[currentIndex].clientWidth;
    carouselInner.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
  }

  // Function to show the next item
  function showNextItem() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    updateCarouselPosition();
  }

  // Function to show the previous item
  function showPrevItem() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    updateCarouselPosition();
  }

  // Function to start the auto-slide
  function startAutoSlide() {
    slideInterval = setInterval(showNextItem, 3000); // Change slides every 3 seconds
  }

  // Function to stop the auto-slide
  function stopAutoSlide() {
    clearInterval(slideInterval);
  }

  // Event listeners for manual controls
  nextButton.addEventListener('click', () => {
    stopAutoSlide();
    showNextItem();
    startAutoSlide(); // Restart auto-slide after manual interaction
  });

  prevButton.addEventListener('click', () => {
    stopAutoSlide();
    showPrevItem();
    startAutoSlide(); // Restart auto-slide after manual interaction
  });

  // Start auto-slide when the page loads
  startAutoSlide();
});
