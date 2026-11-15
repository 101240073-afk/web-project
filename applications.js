
/* View Accepted Application Details */

let detailsButtons = document.querySelectorAll(".btn-details");

detailsButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let cell = button.parentElement;
        let row = cell.parentElement;

        let title = row.querySelector(".application-title");
        let organization = row.querySelector(".application-organization");
        let date = row.querySelector(".application-date");
        let status = row.querySelector(".application-status");

        alert(
            "Application Details\n\n" +
            "Task: " + title.textContent + "\n" +
            "Organization: " + organization.textContent + "\n" +
            "Date Applied: " + date.textContent + "\n" +
            "Status: " + status.textContent
        );

    });

});

let withdrawButtons = document.querySelectorAll(".btn-withdraw");

withdrawButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let cell = button.parentElement;
        let row = cell.parentElement;

        row.remove();

    });

});


let dismissButtons = document.querySelectorAll(".btn-dismiss");

dismissButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let cell = button.parentElement;
        let row = cell.parentElement;

        row.remove();

    });

});
