let applicationRows = document.querySelectorAll(".applications-list tbody tr");

let taskFilter = document.getElementById("filter-task");
let statusFilter = document.getElementById("filter-status");
let filterForm = document.querySelector(".application-filters form");
let applicationsBody = document.querySelector(".applications-list tbody");

function filterApplications() {

    let selectedTask = taskFilter.value;
    let selectedStatus = statusFilter.value;

    let visibleApplications = 0;

    applicationRows.forEach(function(row) {

        let task = row.children[1].textContent.trim().toLowerCase();
        let status = row.querySelector(".application-status");

        let taskMatch = selectedTask === "all" ||
            task.includes(selectedTask);

        let statusMatch = selectedStatus === "all" ||
            status.classList.contains("status-" + selectedStatus);

        if (taskMatch && statusMatch) {
            row.style.display = "";
            visibleApplications++;
        } else {
            row.style.display = "none";
        }

    });

    let noResults = document.querySelector(".no-results");

    if (visibleApplications === 0) {

        if (!noResults) {
            noResults = document.createElement("tr");
            noResults.classList.add("no-results");
            noResults.innerHTML = `<td colspan="7">No applications found.</td>`;
            applicationsBody.appendChild(noResults);

        }

    } else {
        if (noResults) {
            noResults.remove();
        }
    }
}

function updateApplicationStatus(button, newStatus) {

    let row = button.closest("tr");

    let status = row.querySelector(".application-status");

    status.classList.remove("status-pending");
    status.classList.remove("status-accepted");
    status.classList.remove("status-rejected");

    status.classList.add("status-" + newStatus);

    if (newStatus === "accepted") {
        status.textContent = "Accepted";
    }

    else {
        status.textContent = "Rejected";
    }

    let actionCell = row.children[6];

    let actionButtons = actionCell.querySelectorAll("button");

    actionButtons.forEach(function(button) {

        if (button.textContent.trim() !== "View Profile") {
            button.remove();
        }

    });

    filterApplications();

    updateStatistics();

}

function updateStatistics() {

    let totalApplications = applicationRows.length;

    let pendingApplications = 0;
    let acceptedApplications = 0;
    let rejectedApplications = 0;

    applicationRows.forEach(function(row) {

        let status = row.querySelector(".application-status");

        if (status.classList.contains("status-pending")) {
            pendingApplications++;
        }

        else if (status.classList.contains("status-accepted")) {
            acceptedApplications++;
        }

        else if (status.classList.contains("status-rejected")) {
            rejectedApplications++;
        }

    });

    let total = document.querySelector(".total-applications");
    let pending = document.querySelector(".pending-applications");
    let accepted = document.querySelector(".accepted-applications");
    let rejected = document.querySelector(".rejected-applications");

    if (total) {
        total.textContent = totalApplications;
    }

    if (pending) {
        pending.textContent = pendingApplications;
    }

    if (accepted) {
        accepted.textContent = acceptedApplications;
    }

    if (rejected) {
        rejected.textContent = rejectedApplications;
    }

}

function viewWorkerProfile(button) {

    let row = button.parentElement.parentElement;

    let workerName = row.children[0].textContent;
    let task = row.children[1].textContent;
    let experience = row.children[2].textContent;
    let skills = row.children[3].textContent;
    let dateApplied = row.children[4].textContent;
    let status = row.querySelector(".application-status").textContent;

    let popup = document.createElement("div");
    popup.classList.add("profile-popup");

    let content = document.createElement("div");
    content.classList.add("profile-content");

    let closeButton = document.createElement("button");
    closeButton.textContent = "X";
    closeButton.classList.add("close-profile");

    let title = document.createElement("h2");
    title.textContent = "Worker Profile";

    let details = document.createElement("div");
    details.classList.add("profile-details");

    let name = document.createElement("p");
    name.textContent = "Worker Name: " + workerName;

    let appliedTask = document.createElement("p");
    appliedTask.textContent = "Applied Task: " + task;

    let workerExperience = document.createElement("p");
    workerExperience.textContent = "Experience: " + experience;

    let workerSkills = document.createElement("p");
    workerSkills.textContent = "Skills: " + skills;

    let appliedDate = document.createElement("p");
    appliedDate.textContent = "Date Applied: " + dateApplied;

    let applicationStatus = document.createElement("p");
    applicationStatus.textContent = "Application Status: " + status;

    details.appendChild(name);
    details.appendChild(appliedTask);
    details.appendChild(workerExperience);
    details.appendChild(workerSkills);
    details.appendChild(appliedDate);
    details.appendChild(applicationStatus);

    content.appendChild(closeButton);
    content.appendChild(title);
    content.appendChild(details);

    popup.appendChild(content);

    document.body.appendChild(popup);

    closeButton.addEventListener("click", function() {
        popup.remove();
    });

    popup.addEventListener("click", function(event) {
        if (event.target === popup) {
            popup.remove();
        }
    });
}

filterForm.addEventListener("submit", function(event) {

    event.preventDefault();
    filterApplications();

});

applicationsBody.addEventListener("click", function(event) {

    if (event.target.tagName === "BUTTON") {

        let buttonText = event.target.textContent.trim().toLowerCase();

        if (buttonText === "accept") {
            updateApplicationStatus(event.target, "accepted");
        }
        else if (buttonText === "reject") {
            updateApplicationStatus(event.target, "rejected");
        }
        else if (buttonText === "view profile") {
            viewWorkerProfile(event.target);
        }

    }

});

updateStatistics();