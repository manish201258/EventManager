document.addEventListener("DOMContentLoaded", function() {
    let eventName = localStorage.getItem("selectedEventName");
    let eventDate = localStorage.getItem("selectedEventDate");
    let heading = document.querySelector(".form-heading p");
    let eventInput = document.querySelector(".form-event-input input");

    if (eventName && eventDate && heading && eventInput) {
        heading.textContent = `Last Registration Day - ${eventDate}`;
        eventInput.value = eventName;
    }
});
