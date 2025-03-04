// Function to open a modal
function openModal(id) {
    document.getElementById(id).style.display = "block";
}

// Function to close a modal
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// Function to check if all sign-up fields are filled
function validateSignupForm() {
    let name = document.querySelector("input[name='first']").value.trim();
    let email = document.querySelector("input[name='email']").value.trim();
    let username = document.querySelector("input[name='username']").value.trim();
    let password = document.querySelector("input[name='psw']").value.trim();
    let confirmPassword = document.querySelector("input[name='psw-repeat']").value.trim();

    if (name && email && username && password && confirmPassword) {
        if (password !== confirmPassword) {
            alert("Passwords do not match!"); // Show alert if passwords don't match
            return false;
        }
        return true;
    } else {
        alert("Please fill out all fields!"); // Show alert if any field is empty
        return false;
    }
}

// Function to handle Confirm button click
function handleConfirmClick(event) {
    event.preventDefault(); // Prevent form submission

    if (validateSignupForm()) {
        closeModal('signupModal'); // Close Sign-up modal
        openModal('loginModal'); // Show Login modal
    }
}

// Function to handle Cancel button click
function handleCancelClick() {
    closeModal('signupModal'); // Close Sign-up modal
    openModal('loginModal'); // Show Login modal
}

// Attach event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".btn3.cancel-btn").addEventListener("click", handleCancelClick);
    document.querySelector(".btn3.confirm-btn").addEventListener("click", handleConfirmClick);
});
    