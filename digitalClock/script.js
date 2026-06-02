const hr = document.getElementById("hr");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

const day = document.getElementById("date");
const month = document.getElementById("month");
const year = document.getElementById("year");


const dayTime = document.getElementById("dayTime");


function updateClock () {
    
    const now = new Date();
    
        let hours = now.getHours();

        if (hours >= 12) {
            dayTime.innerText = "PM";
        } else {
            dayTime.innerText = "AM";
        }

        if (hours > 12) {
            hours = hours - 12;
        }

        hr.innerText = String(hours).padStart(2, "0");
        min.innerText = String(now.getMinutes()).padStart(2, "0");
        sec.innerText = String(now.getSeconds()).padStart(2, "0");


        day.innerText = String(now.getDate()).padStart(2, "0");
        month.innerText = String(now.getMonth() + 1).padStart(2, "0");
        year.innerText = now.getFullYear();
}

updateClock();
setInterval(updateClock, 1000);

