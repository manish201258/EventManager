document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".events-cards").innerHTML = generateCardHtml2(hackathon);
});
document.querySelector(".nav-right #apply12").addEventListener("click",()=>{
        window.open("events.html","_self")
})
document.querySelector(".nav-right #apply123").addEventListener("click",()=>{
        let password = prompt("Enter Password");
        if(password=="Manish@1637"){

            window.open("http://localhost/EMS-Project/admin.php","_self")
        }
        else{
            alert("Access Denied!")
        }
})

// Smooth scroll start
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Smooth scroll end
