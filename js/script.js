document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('toggle-theme');
    themeToggle.addEventListener('click', toggleTheme);

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    // Apply slide-in animation on load
    triggerSlideInAnimation();

    // Add these lines to apply the active class and start info animation
    const profileInfo = document.querySelector('.profile-info');
    profileInfo.classList.add('active');

    // Listen for the end of the profile pic transition
    const profilePic = document.getElementById('profile-pic');

    if (profilePic) {
        profilePic.addEventListener('transitionend', function () {
            // Trigger the animation for profile info after the profile pic transition is complete
            profileInfo.classList.add('info-slide-in');
        });
    }

    // Additional code if needed
    window.onload = function () {
        // Additional code if needed
    };

    const profilePicElement = document.getElementById('profile-pic');
    const profileInfoElement = document.querySelector('.profile-info');

    if (profilePicElement && profileInfoElement) {
        profilePicElement.addEventListener('click', function () {
            profileInfoElement.classList.toggle('active');
        });
    }
});

// Function to trigger slide-in animation
function triggerSlideInAnimation() {
    const profilePic = document.getElementById('profile-pic');

    // Check if the profilePic element exists
    if (profilePic) {
        profilePic.classList.add('slide-in');
    } else {
        console.error("Element with id 'profile-pic' not found.");
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

// Function to adjust image style
function adjustImageStyle() {
    const profilePic = document.getElementById('profile-pic');

    // Check if the theme is dark, and adjust image style accordingly
    if (document.body.classList.contains('dark-theme')) {
        profilePic.style.borderColor = '#fff'; // White border for dark theme
    } else {
        profilePic.style.borderColor = '#333'; // Dark border for light theme
    }
}

// Function to adjust image style with animation
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

// Function to show/hide content by ID
function showContent(id) {
    var contentElement = document.getElementById(id);

    if (contentElement) {
        contentElement.style.display = (contentElement.style.display === 'none' || contentElement.style.display === '') ? 'block' : 'none';
    } else {
        console.error("Element not found with ID:", id);
    }
}

// Function to submit the form
function submitForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    var formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://formspree.io/f/mleykvjy", true); // Update with your Formspree endpoint

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200 || xhr.status == 0) { // Status 0 is for local testing
                // Handle the response, you can show a success message or redirect the user
                if (xhr.responseText === "success") {
                    console.log("Form submitted successfully!");
                    // You can add a success message or redirect the user to a thank you page
                } else {
                    console.log("Error submitting form!");
                    // Handle the error, show an error message or redirect the user to an error page
                }
            } else {
                console.log("Error: " + xhr.status);
                // Handle other HTTP status codes if needed
            }
        }
    };

    xhr.send(formData);
}
