let statusFilter = document.getElementById("filter-status");
let tradeFilter = document.getElementById("filter-trade");
let filterButton = document.getElementById("filter-button");
let closeButtons = document.querySelectorAll(".close-task");
let editButtons = document.querySelectorAll(".edit-task");

let taskRows = document.querySelectorAll(".task-row");

filterButton.addEventListener("click", filterTasks);

function filterTasks() {

    let selectedStatus = statusFilter.value;
    let selectedTrade = tradeFilter.value;

    taskRows.forEach(function(row) {

        let taskStatus = row.dataset.status;
        let taskTrade = row.dataset.trade;

        let statusMatch = selectedStatus === "all" || selectedStatus === taskStatus;
        let tradeMatch = selectedTrade === "all" || selectedTrade === taskTrade;

        if (statusMatch && tradeMatch) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

let closeModal = document.querySelector("#close-modal");
let cancelClose = document.querySelector("#cancel-close");
let confirmClose = document.querySelector("#confirm-close");

let selectedRow = null;

closeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        selectedRow = button.parentElement.parentElement;
        closeModal.classList.remove("hidden");

    });

});

cancelClose.addEventListener("click", function() {

    closeModal.classList.add("hidden");
    selectedRow = null;

});

confirmClose.addEventListener("click", function() {

    if (selectedRow !== null) {

        selectedRow.dataset.status = "closed";
        let status = selectedRow.querySelector(".task-status");
        status.textContent = "Closed";
        status.classList.remove("status-accepted", "status-pending");
        status.classList.add("status-closed");
        let closeButton = selectedRow.querySelector(".close-task");
        closeButton.disabled = true;
        filterTasks();
    }

    closeModal.classList.add("hidden");

    selectedRow = null;

});

editButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let row = button.parentElement.parentElement;

        let title = row.cells[0];
        let location = row.cells[2];
        let workers = row.cells[3];

        let newTitle = prompt("Enter task title:", title.textContent);
        if (newTitle === null || newTitle.trim() === "") {
            return;
        }

        let newLocation = prompt("Enter location:", location.textContent);
        if (newLocation === null || newLocation.trim() === "") {
            return;
        }

        let newWorkers = prompt("Enter number of workers:", workers.textContent.split("/")[1].trim());
        if (newWorkers === null || newWorkers.trim() === "" || Number(newWorkers) < 1 || !Number.isInteger(Number(newWorkers))) {
            alert("Please enter a valid number of workers.");
            return;
        }

        let acceptedWorkers = Number(workers.textContent.split("/")[0].trim());
        if (Number(newWorkers) < acceptedWorkers) {
            alert("Required workers cannot be less than the number of accepted workers.");
            return;
        }

        title.textContent = newTitle.trim();
        location.textContent = newLocation.trim();
        workers.textContent = workers.textContent.split("/")[0].trim() + " / " + newWorkers;

        alert("Task updated successfully!");

    });

});