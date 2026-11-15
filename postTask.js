let taskForm = document.getElementById("post-task-form");

let taskTitle = document.getElementById("task-title");
let taskDescription = document.getElementById("task-description");
let taskTrade = document.getElementById("task-trade");
let workersNeeded = document.getElementById("workers-needed");

let taskLocation = document.getElementById("location");
let startDate = document.getElementById("start-date");
let deadline = document.getElementById("deadline");

let budget = document.getElementById("budget");
let urgency = document.getElementById("urgency");
let postedTime = new Date().toLocaleString();

let today = new Date().toISOString().split("T")[0];

startDate.min = today;

startDate.addEventListener("change", function() {

    deadline.min = startDate.value;
    if (deadline.value && deadline.value < startDate.value) {
        deadline.value = "";
    }
});


taskForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let title = taskTitle.value.trim();
    let description = taskDescription.value.trim();
    let trade = taskTrade.value;
    let workers = Number(workersNeeded.value);

    let location = taskLocation.value.trim();
    let start = startDate.value;
    let end = deadline.value;

    let dailyBudget = budget.value;
    let priority = urgency.value;

    if (workers < 1 || !Number.isInteger(workers)) {
        alert("Please enter a valid number of workers.");
        return;
    }

    if (start < today) {
        alert("Start date cannot be in the past.");
        return;
    }

    if (end <= start) {
        alert("Deadline must be after the start date.");
        return;
    }

    if (dailyBudget !== "" && Number(dailyBudget) < 0) {
        alert("Budget cannot be negative.");
        return;
    }

    console.log("Title:", title);
    console.log("Description:", description);
    console.log("Trade:", trade);
    console.log("Workers:", workers);
    console.log("Location:", location);
    console.log("Start Date:", start);
    console.log("Deadline:", end);
    console.log("Daily Budget:", dailyBudget);
    console.log("Priority:", priority);
    console.log("Status: Open");
    console.log("Posted Time:", postedTime);

    alert("Task published successfully!");

    taskForm.reset();

    deadline.min = "";

});
