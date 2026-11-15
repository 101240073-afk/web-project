let activeJobsValue = document.querySelector(".stat-value");

function updateActiveJobs() {
    let activeJobs = document.querySelectorAll(".badge-active");

    activeJobsValue.textContent = activeJobs.length;
}
updateActiveJobs();



let jobCards = document.querySelectorAll(".active-job-card");

jobCards.forEach(function(job) {

    let header = job.querySelector(".job-header");
    let status = header.querySelector("span");
    let actions = job.querySelector(".job-actions");
    let taskButton = actions.querySelector(".btn-primary");

    taskButton.addEventListener("click", function() {
        if (status.textContent === "Scheduled") {

            status.textContent = "In Progress";

            status.classList.remove("badge-pending");
            status.classList.add("badge-active");

            taskButton.textContent = "Mark Task Complete";

            updateActiveJobs();

        }

      
        else if (status.textContent === "In Progress") {

            status.textContent = "Completed";

            status.classList.remove("badge-active");
            status.classList.add("badge-completed");

            taskButton.classList.add("hidden");

            updateActiveJobs();

        }

    });

});

let siteButtons = document.querySelectorAll(".btn-secondary");

siteButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let actions = button.parentElement;
        let job = actions.parentElement;
        let modal = job.querySelector(".site-modal");

        modal.classList.remove("hidden");

    });

});


let closeButtons = document.querySelectorAll(".btn-close");

closeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let content = button.parentElement;
        let modal = content.parentElement;

        modal.classList.add("hidden");

    });

});
