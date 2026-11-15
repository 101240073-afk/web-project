
let registerForm = document.querySelector(".register-form");
let RName = document.querySelector("#registerName");
let REmail = document.querySelector("#registerEmail");
let RPassword = document.querySelector("#registerPassword");
let RConfirmPassword = document.querySelector("#registerConfirmPassword");
let registerMessage = document.querySelector("#registerMessage");


registerForm.addEventListener("submit", function (e) {

    e.preventDefault();
    if (RName.value === "" || REmail.value === "" || RPassword.value === "" || RConfirmPassword.value === "") {
        registerMessage.textContent = "Please fill in all fields.";
        registerMessage.style.color = "red";
    }
    else if (!REmail.value.includes("@")) {
        registerMessage.textContent = "Please enter a valid email.";
        registerMessage.style.color = "red";
    }
    else if (RPassword.value.length < 6) {
        registerMessage.textContent =
            "Password must contain at least 6 characters.";
        registerMessage.style.color = "red";
    }
    else if (RPassword.value !== RConfirmPassword.value) {
        registerMessage.textContent = "Passwords do not match.";
        registerMessage.style.color = "red";
    }
    else {
        registerMessage.textContent = "Registration information is valid.";
        registerMessage.style.color = "green";
        const roleSelected = document.getElementById("role").value;

        if (roleSelected === "project-manager") {
            window.location.href = "managerDash.html";
        }
        else if (roleSelected === "worker") {
            window.location.href = "workerDash.html";
        }
    }
});
