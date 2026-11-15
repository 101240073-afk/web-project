let applicationForm = document.querySelector("#applicationForm");

applicationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Your application has been submitted successfully!");

    window.location.href = "workerDash.html";

});
