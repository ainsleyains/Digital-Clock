const hourEl = document.getElementById("hour");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function clock() {
    let hour = new Date().getHours()
    let minute = new Date().getMinutes()
    let second = new Date().getSeconds()
    let amPM = "AM"

    if(hour > 12) {
        hour = hour -12
        amPM = "PM"
    }

    //make hour as two numbers eg: 07
    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    hourEl.innerText = hour;
    minutesEl.innerText = minute;
    secondsEl.innerText = second;
    ampmEl.innerText = amPM;
    setTimeout(() => {clock()
        
    }, 1000);
}

clock()