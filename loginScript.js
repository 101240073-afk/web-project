let loginForm = document.querySelector(".auth-form");
let LEmail = document.querySelector("#loginEmail");
let LPassword = document.querySelector("#loginPassword");
let message = document.querySelector("#loginMessage");

loginForm.addEventListener("submit", function(e) {

    e.preventDefault();

    if (LEmail.value === "" || LPassword.value === "") {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
    }
    else if (!LEmail.value.includes("@")) {
        message.textContent = "Please enter a valid email.";
        message.style.color = "red";
    }
    else if (LPassword.value.length < 6) {
        message.textContent =
            "Password must contain at least 6 characters.";
        message.style.color = "red";
    }
    else {
        message.textContent = "Login information is valid.";
        message.style.color = "green";
    }

});