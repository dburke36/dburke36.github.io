// Get the modal element
var modal = document.getElementById("loginModal");

// Get the button that opens the modal
var loginBtn = document.getElementById("loginBtn");

// Get the <span> element that closes the modal
var closeBtn = document.querySelector(".close");

// When the user clicks the button, open the modal
loginBtn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Tab switching functionality
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Hide all tabcontent (forms)
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove the active class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab and add the active class
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Default display for the Login tab
document.getElementById("Login").style.display = "block";

var signupForm = document.getElementById("signupForm");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var confirmPassword = document.getElementById("confirmPassword");
var signupErrorMessage = document.getElementById("signupErrorMessage");

signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Email validation
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(signupEmail.value)) {
        signupErrorMessage.textContent = "Please enter a valid email address.";
        signupErrorMessage.style.display = "block";
        return;
    }

    // Password validation (minimum 8 characters)
    if (signupPassword.value.length < 8) {
        signupErrorMessage.textContent = "Password must be at least 8 characters long.";
        signupErrorMessage.style.display = "block";
        return;
    }

    // Check if passwords match
    if (signupPassword.value !== confirmPassword.value) {
        signupErrorMessage.textContent = "Passwords do not match.";
        signupErrorMessage.style.display = "block";
        return;
    }

    // If everything is valid, hide the error message
    signupErrorMessage.style.display = "none";

    // Form submission logic here (e.g., send data via AJAX)
    alert("Signup successful!");
});

document.getElementById("contact-form").addEventListener("submit", function(event) {
    // Prevent the form from submitting
    event.preventDefault();
    
    // Display the alert
    alert("Form submitted successfully!");
});


