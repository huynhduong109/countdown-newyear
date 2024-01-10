const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const finishDate = "1 january 2024";
const newYear = new Date(finishDate);

function countDown() {
    const now = new Date();
    const totalSeconds = (newYear - now) / 1000;
    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const mins = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    if( days < 0 || hours < 0 || mins < 0 || seconds < 0){}
    else {
    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secondsEl.innerHTML = formatTime(seconds);}
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

countDown();
setInterval(countDown, 1000)
