
let filterForm = document.querySelector(".filter-section form");

let tradeFilter = document.querySelector("#filter-trade");
let locationFilter = document.querySelector("#filter-location");
let urgencyFilter = document.querySelector("#filter-urgency");

let taskCards = document.querySelectorAll(".task-card");


filterForm.addEventListener("submit", function(e) {

    e.preventDefault();

    taskCards.forEach(function(task) {

        let taskTrade = task.querySelector(".task-trade");
        let taskLocation = task.querySelector(".task-location");
        let taskUrgency = task.querySelector(".badge");

        if (
            (tradeFilter.value === "all" || tradeFilter.value === taskTrade.textContent) &&
            (locationFilter.value === "" || taskLocation.textContent.includes(locationFilter.value)) &&
            (urgencyFilter.value === "all" || urgencyFilter.value === taskUrgency.textContent)
        ) {

            task.classList.remove("Jhidden");

        }
        else {

            task.classList.add("hidden");

        }

    });

});
