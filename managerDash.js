let taskCards = document.querySelectorAll(".task-card");
let activeTasks = document.querySelectorAll(".task-status.status-active");
let completedTasks = document.querySelectorAll(".task-status.status-completed");

function updateDashboard() {
    let statCards = document.querySelectorAll(".overview-card");

    let postedTasksCount = taskCards.length;
    let activeTasksCount = activeTasks.length;
    let completedTasksCount = completedTasks.length;

    statCards.forEach(function(card) {
        let label = card.querySelector(".card-label");
        let value = card.querySelector(".card-value");

        if (label && value) {
            let title = label.textContent.toLowerCase();

            if (title.includes("posted tasks")) {
                value.textContent = postedTasksCount;
            }

            else if (title.includes("active tasks")) {
                value.textContent = activeTasksCount;
            }

            else if (title.includes("completed tasks")) {
                value.textContent = completedTasksCount;
            }
        }
    });
}

function connectDashboardButtons() {
    let buttons = document.querySelectorAll(".task-actions button");

    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            let buttonText = button.textContent.trim().toLowerCase();

            if (buttonText === "manage task") {
                window.location.href = "manage-tasks.html";
            }

            else if (buttonText === "view applications") {
                window.location.href = "manage-applications.html";
            }
        });
    });
}

updateDashboard();
connectDashboardButtons();