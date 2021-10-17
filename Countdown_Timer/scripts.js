const daysEl = document.querySelector('#days')
const hoursEl = document.querySelector('#hours')
const minsEl = document.querySelector('#mins')
const secsEl = document.querySelector('#secs')


const countdown = () => {
    const newYearDate = new Date('1 Jan 2022');
    const currentDate = new Date();
    const diff = (newYearDate - currentDate) / 1000 // get the difference in seconds.

    const days = Math.floor(diff / 60/ 60 / 24);      // days left till end date.
    const hours = Math.floor(diff / 60 / 60 % 24);     // hours left till next day.
    const min = Math.floor(diff / 60 % 60);         // minutes lefts till next hour.
    const sec = Math.floor(diff % 60);              // seconds left till next minute.

    daysEl.innerText = formatTime(days);   
    hoursEl.innerText = formatTime(hours);
    minsEl.innerText = formatTime(min);
    secsEl.innerText = formatTime(sec);
    //console.log(days, hours, min, sec)
}

//funtion to add 0 if time is less then 10 e.g 03,02
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;          
}
//countdown()
// Executing the countdown function at the Interval of 1 second
setInterval(countdown, 1000)