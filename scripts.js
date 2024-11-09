// JavaScript for modal and tab switching (same as your original setup)
var modal = document.getElementById("loginModal");
var loginBtn = document.getElementById("loginBtn");
var closeBtn = document.querySelector(".close");

loginBtn.onclick = function () {
    modal.style.display = "block";
};

closeBtn.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Form validation for signup
var signupForm = document.getElementById("signupForm");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var confirmPassword = document.getElementById("confirmPassword");
var signupErrorMessage = document.getElementById("signupErrorMessage");

signupForm.addEventListener("submit", function (event) {
    signupErrorMessage.style.display = "none"; // Hide error message initially
    let errorMessages = [];

    // Validate Email Format
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(signupEmail.value)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Validate Password Length
    if (signupPassword.value.length < 8) {
        errorMessages.push("Password must be at least 8 characters long.");
    }

    // Validate Passwords Match
    if (signupPassword.value !== confirmPassword.value) {
        errorMessages.push("Passwords do not match.");
    }

    // If there are validation errors, prevent form submission and display errors
    if (errorMessages.length > 0) {
        signupErrorMessage.innerHTML = errorMessages.join("<br>");
        signupErrorMessage.style.display = "block";
        event.preventDefault(); // Prevent form submission
    }
});

// Form validation for login
var loginForm = document.getElementById("loginForm");
var loginEmail = document.getElementById("loginEmail");
var loginPassword = document.getElementById("loginPassword");
var loginErrorMessage = document.getElementById("loginErrorMessage");

loginForm.addEventListener("submit", function (event) {
    loginErrorMessage.style.display = "none"; // Hide error message initially
    let errorMessages = [];

    // Validate Email Format
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(loginEmail.value)) {
        errorMessages.push("Please enter a valid email address.");
    }

    // Validate Password (length check or any other rules can be added here)
    if (loginPassword.value.length < 6) {
        errorMessages.push("Password must be at least 6 characters long.");
    }

    // If there are validation errors, prevent form submission and display errors
    if (errorMessages.length > 0) {
        loginErrorMessage.innerHTML = errorMessages.join("<br>");
        loginErrorMessage.style.display = "block";
        event.preventDefault(); // Prevent form submission
    }
});