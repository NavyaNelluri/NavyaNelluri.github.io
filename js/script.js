// Function to trigger slide-in animation
function triggerSlideInAnimation() {
  const profilePic = document.getElementById('profile-pic');
  profilePic.classList.add('slide-in');
}

// Function to toggle the visibility of profile-info
function toggleProfileInfo() {
    var profileInfo = document.getElementById("profile-info");
    if (profileInfo.style.display === "none" || profileInfo.style.display === "") {
        profileInfo.style.display = "block";
    } else {
        profileInfo.style.display = "none";
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

// Adjust image style
function adjustImageStyle() {
  const profilePic = document.getElementById('profile-pic');

  // Check if the theme is dark, and adjust image style accordingly
  if (document.body.classList.contains('dark-theme')) {
    profilePic.style.borderColor = '#fff'; // White border for dark theme
  } else {
    profilePic.style.borderColor = '#333'; // Dark border for light theme
  }
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
  const profilePic = document.getElementById('profile-pic');
  profilePic.addEventListener('click', function () {
    // Toggle the 'active' class on profile-info
    toggleProfileInfo();
  });

  const themeToggle = document.getElementById('toggle-theme');
  themeToggle.addEventListener('click', toggleTheme);

  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
  }

  // Trigger the animation for profile pic on every refresh
  triggerSlideInAnimation();

  // Display the initial content of profile-info
  toggleProfileInfo(); // Add this line to make the initial content visible
});
