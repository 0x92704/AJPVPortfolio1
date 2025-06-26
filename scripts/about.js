// Ensure the DOM is fully loaded before running scripts
document.addEventListener('DOMContentLoaded', function () {
  const scrollContainer = document.getElementById('scrollContainer');
  const scrollUpBtn = document.getElementById('scrollUp');
  const scrollDownBtn = document.getElementById('scrollDown');

  // Ensure all required elements exist
  if (scrollContainer && scrollUpBtn && scrollDownBtn) {
    
    // Function to update visibility of arrows
    const updateArrowVisibility = () => {
      // Show the up arrow only if we're not at the top
      scrollUpBtn.style.display = scrollContainer.scrollTop > 0 ? 'block' : 'none';

      // Show the down arrow only if not scrolled to the bottom
      const atBottom = scrollContainer.scrollTop + scrollContainer.clientHeight >= scrollContainer.scrollHeight;
      scrollDownBtn.style.display = atBottom ? 'none' : 'block';
    };

    // Initial visibility check
    updateArrowVisibility();

    // Event listener to update arrow visibility on scroll
    scrollContainer.addEventListener('scroll', updateArrowVisibility);

    // Scroll Up button click
    scrollUpBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({
        top: -100,
        behavior: 'smooth'
      });
    });

    // Scroll Down button click
    scrollDownBtn.addEventListener('click', () => {
      scrollContainer.scrollBy({
        top: 100,
        behavior: 'smooth'
      });
    });

    // Optional: update visibility on window resize (in case layout changes)
    window.addEventListener('resize', updateArrowVisibility);
  } else {
    console.warn("Scroll container or arrows not found. Check element IDs.");
  }
});

