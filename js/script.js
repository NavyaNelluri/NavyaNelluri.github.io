window.onload = function () {
    const themeToggle = document.getElementById('toggle-theme');
    themeToggle.addEventListener('click', toggleTheme);

    // Check for saved theme preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-theme');
    }

    const profileInfo = document.querySelector('.profile-info');
    const profilePic = document.getElementById('profile-pic');

    profilePic.addEventListener('click', function () {
        // Toggle the 'active' class on profile-info
        profileInfo.classList.toggle('active');

        // Wait for a short time, then toggle the 'info-slide-in' class
        setTimeout(function () {
            profileInfo.classList.toggle('info-slide-in');
        }, 10); // Adjust the delay if needed
    });

    // Trigger the animation for profile pic on every refresh
    triggerSlideInAnimation();
};



// Function to trigger slide-in animation
function triggerSlideInAnimation() {
    const profilePic = document.getElementById('profile-pic');
    profilePic.classList.add('slide-in');
}


function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    // Save the theme preference to local storage
    const theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', theme);

    // Adjust image style based on theme with animation
    adjustImageStyleWithAnimation();
}

function adjustImageStyle() {
    const profilePic = document.getElementById('profile-pic');

    // Check if the theme is dark, and adjust image style accordingly
    if (document.body.classList.contains('dark-theme')) {
        profilePic.style.borderColor = '#fff'; // White border for dark theme
    } else {
        profilePic.style.borderColor = '#333'; // Dark border for light theme
    }
}

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
//education details toggle
function toggleDetails(elementId) {
        const details = document.getElementById(elementId);
        details.classList.toggle('show-details');
    }
	

//submitform
function submitForm() {
    var form = document.getElementById("contactForm");
    var formData = new FormData(form);

    // Your existing AJAX code to handle form submission

    // Prevent the default form submission
    e.preventDefault();
}

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


