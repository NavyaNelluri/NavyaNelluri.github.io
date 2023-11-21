function toggleDetails(elementId) {
        const details = document.getElementById(elementId);
        details.classList.toggle('show-details');
    }

document.addEventListener('DOMContentLoaded', function () {
    const themeToggle = document.getElementById('toggle-theme');

    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    } else {
        console.error("Element with id 'toggle-theme' not found.");
    }

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }
    // Apply slide-in animation on load
    const profilePic = document.getElementById('profile-pic');
    // Check if the profilePic element exists
    if (profilePic) {
        profilePic.classList.add('slide-in');
    } else {
        console.error("Element with id 'profile-pic' not found.");
    }

    // Add these lines to apply the active class and start info animation
    const profileInfo = document.querySelector('.profile-info');

});
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
        console.log("function called");
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
