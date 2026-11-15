let profileForm = document.querySelector("#create-profile-form");

let fullName = document.querySelector("#full-name");
let phone = document.querySelector("#phone");
let experience = document.querySelector("#experience");

let skills = document.querySelectorAll('input[name="skills"]');

let message = document.querySelector("#profileMessage");


profileForm.addEventListener("submit", function (e) {

    e.preventDefault();

    if (fullName.value.length <= 5) {

        message.textContent = "Full name must be more than 5 characters.";
        message.style.color = "red";

    }

    else if (phone.value.length < 8 || phone.value.length > 15) {

        message.textContent = "Please enter a valid phone number.";
        message.style.color = "red";

    }

    else if (experience.value === "" ||
        experience.value < 0 ||
        experience.value > 10) {

        message.textContent = "Years of experience must be between 0 and 10.";
        message.style.color = "red";

    }

    else {

        let selectedSkills = 0;

        skills.forEach(function (skill) {

            if (skill.checked === true) {
                selectedSkills++;
            }

        });

        if (selectedSkills === 0) {

            message.textContent = "Please select at least one specialized skill.";
            message.style.color = "red";

        }

        else {

            message.textContent = "Your profile information is valid!";
            message.style.color = "green";

            alert("Your profile has been completed successfully!");

            window.location.href = "workerDash.html";

        }

    }

});
