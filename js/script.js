// Function to trigger slide-in animation
function triggerSlideInAnimation() {
  const profilePic = document.getElementById('profile-pic');
  profilePic.classList.add('slide-in');
}

// Function to toggle the visibility of profile-info
// Function to toggle the visibility of profile-info
function toggleProfileInfo() {
    var profileInfo = document.getElementById("profile-info");
    console.log('Toggle Profile Info function called');
    if (profileInfo) {
        console.log('Profile Info element found:', profileInfo);
        // Toggle the 'visible' class to control visibility
        profileInfo.classList.toggle('visible');

        // Add a delay to ensure the class is toggled before the transition
        setTimeout(() => {
            // Toggle the 'show' class for smooth transition
            profileInfo.classList.toggle('show');
        }, 10);
    } else {
        console.error("Element with ID 'profile-info' not found.");
    }
}



// Function to toggle theme
function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  // Save the theme preference to local storage
  const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);

  // Adjust image style based on theme with animation
  adjustImageStyleWithAnimation();
}

// Adjust image style with animation
function adjustImageStyleWithAnimation() {
  const profilePic = document.getElementById('profile-pic');

  // Add a class for the transition effect
  profilePic.classList.add('border-transition');

  // Adjust image style based on theme
  adjustImageStyle();

  // Remove the class after the transition is complete
  setTimeout(() => {
    profilePic.classList.remove('border-transition');
  }, 500); // Adjust the duration to match the CSS transition duration
}

// Adjust image style
function adjustImageStyle() {
  const profilePic = document.getElementById('profile-pic');

  // Check if the theme is dark, and adjust image style accordingly
  if (document.body.classList.contains('dark-theme')) {
    profilePic.classList.add('dark-theme');
  } else {
    profilePic.classList.remove('dark-theme');
  }
}

// Function to toggle education details
function toggleDetails(elementId) {
  const details = document.getElementById(elementId);
  details.classList.toggle('show-details');
}

// Function to submit the contact form
function submitForm(event) {
  const form = document.getElementById('contactForm');
  const formData = new FormData(form);

  // Send the form data using AJAX
  fetch('https://formspree.io/f/mleykvjy', {
    method: 'POST',
    body: formData,
  })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'success') {
        // Handle successful form submission
        alert('Your message has been sent successfully!');
      } else {
        // Handle form submission error
        alert('There was an error submitting your message. Please try again later.');
      }
    })
    .catch(error => {
      console.error(error);
      alert('An unexpected error occurred. Please try again later.');
    });

  // Prevent the default form submission behavior
  event.preventDefault();
}

// Add event listener for profile picture click outside window.onload
document.addEventListener('DOMContentLoaded', function () {
    toggleProfileInfo(); // Ensure that profile-info is visible on page load

    // Function to toggle the visibility of profile-info
    function toggleProfileInfo() {
        var profileInfo = document.getElementById("profile-info");
        console.log('Toggle Profile Info function called');
        if (profileInfo) {
            console.log('Profile Info element found:', profileInfo);
            // Toggle the 'visible' class to control visibility
            profileInfo.classList.toggle('visible');
        } else {
            console.error("Element with ID 'profile-info' not found.");
        }
    }
});

