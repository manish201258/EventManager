document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".hackathon-cont").innerHTML = generateCardHtml1(hackathon);
    document.querySelector(".sports-cont").innerHTML = generateCardHtml1(sports);
    
});
document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let applyButton = card.querySelector(".apply-button button");
        let eventName = card.querySelector(".event-name p").textContent;
        let eventDate = card.querySelector(".event-time .date h3").textContent;

        applyButton.addEventListener("click", () => {
            localStorage.setItem("selectedEventName", eventName);
            localStorage.setItem("selectedEventDate", eventDate);
            window.open("form.html", "_self");
        });
    });
});




