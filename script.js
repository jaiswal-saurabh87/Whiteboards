const toggleBtn = document.getElementById('themeToggleBtn');
    const body = document.body;
    const logo = document.getElementById('logoImg');

    function toggleTheme() {
      body.classList.toggle('dark');
      if (body.classList.contains('dark')) {
        logo.src = 'logo-white.png';
      } else {
        logo.src = 'logo-dark.png';
      }
    }

    toggleBtn.addEventListener('click', toggleTheme);

    // Set initial logo on load
    window.addEventListener('DOMContentLoaded', () => {
      if (body.classList.contains('dark')) {
        logo.src = 'logo-white.png';
      } else {
        logo.src = 'logo-dark.png';
      }
    });

    // START of new script for feature section popup
    // Get all feature boxes
    const featureBoxes = document.querySelectorAll('.feature-box');
    // Get the popup overlay and close button
    const popupOverlay = document.getElementById('popupOverlay');
    const closePopupButton = document.getElementById('closePopup');
    // Get the signup button (for future functionality, though not implemented here)
    const signupButton = document.getElementById('signupButton');

    // Add click event listener to each feature box
    featureBoxes.forEach(box => {
      box.addEventListener('click', () => {
        popupOverlay.classList.remove('hidden'); // Show the popup
      });
    });

    // Add click event listener to the close button
    closePopupButton.addEventListener('click', () => {
      popupOverlay.classList.add('hidden'); // Hide the popup
    });

    // Optional: Add functionality to the signup button
    signupButton.addEventListener('click', () => {
      // In a real application, you would redirect to a signup page or show a signup form here.
      console.log('Sign Up button clicked!');
      // For now, just hide the popup
      popupOverlay.classList.add('hidden');
      // You could also add a temporary message saying "Redirecting to Sign Up page..."
    });

    // Close the popup if the overlay is clicked (outside the content)
    popupOverlay.addEventListener('click', (event) => {
      if (event.target === popupOverlay) {
        popupOverlay.classList.add('hidden');
      }
    });
    // END of new script for feature section popup