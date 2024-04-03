let hackathon = [
    {
        event_image: "assests/event1.jpeg",
        event_name: "Alpha",
        event_date: "12 Apr",
        event_time: "9:00",
        invite_limit: "50"
    },
    {
        event_image: "assests/event2.jpeg",
        event_name: "Beta",
        event_date: "15 May",
        event_time: "12:00",
        invite_limit: "100"
    },
    {
        event_image: "assests/event2.jpeg",
        event_name: "Beta",
        event_date: "15 May",
        event_time: "12:00",
        invite_limit: "100"
    }
];
let sports = [
    {
        event_image: "assests/event1.jpeg",
        event_name: "Alpha",
        event_date: "12 Apr",
        event_time: "9:00",
        invite_limit: "50"
    },
    {
        event_image: "assests/event2.jpeg",
        event_name: "Beta",
        event_date: "15 May",
        event_time: "12:00",
        invite_limit: "100000"
    },
    {
        event_image: "assests/event2.jpeg",
        event_name: "Beta",
        event_date: "15 May",
        event_time: "12:00",
        invite_limit: "100"
    },
    {
        event_image: "assests/event2.jpeg",
        event_name: "Beta",
        event_date: "15 May",
        event_time: "12:00",
        invite_limit: "100"
    }
]

window.generateCardHtml1 = function(events) {
    return events.map(card => {
        return `<div class="card">
            <div class="event-details">
                <div class="event-image">
                    <img src="${card.event_image}" alt="">
                </div>
                <div class="event-name">
                    <h3>Event</h3>
                    <p>${card.event_name}</p>
                </div>
            </div>
            <div class="event-time">
                <div class="date duration-event">
                    <h3>${card.event_date}</h3>
                    <p>Date</p>
                </div>
                <div class="time duration-event">
                    <h3>${card.event_time}</h3>
                    <p>Time</p>
                </div>
                <div class="invited duration-event">
                    <h3>${card.invite_limit}</h3>
                    <p>Invited</p>
                </div>
            </div>
            <div class="apply-button">
                <button>Apply</button>
            </div>
        </div>`;
    }).join("");
}
window.generateCardHtml2 = function(events) {
    return events.map(card => {
        return `<div class="card">
            <div class="event-details">
                <div class="event-image">
                    <img src="${card.event_image}" alt="">
                </div>
                <div class="event-name">
                    <h3>Event</h3>
                    <p>${card.event_name}</p>
                </div>
            </div>
            <div class="event-time">
                <div class="date duration-event">
                    <h3>${card.event_date}</h3>
                    <p>Date</p>
                </div>
                <div class="time duration-event">
                    <h3>${card.event_time}</h3>
                    <p>Time</p>
                </div>
                <div class="invited duration-event">
                    <h3>${card.invite_limit}</h3>
                    <p>Invited</p>
                </div>
            </div>
        </div>`;
    }).join("");
}


document.addEventListener("DOMContentLoaded", function() {
    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let applyButton = card.querySelector(".apply-button button");
        let eventName = card.querySelector(".event-name p").textContent;

        applyButton.addEventListener("click", () => {
            localStorage.setItem("selectedEventName", eventName);
            window.open("form.html", "_self");
        });
    });
});
