
const minutelap = document.getElementById("minutes")
const secondlap = document.getElementById("seconds")
const milisecondlap = document.getElementById("millisecond")

const startbtn = document.getElementById("start")
const stopbtn = document.getElementById("stop")
const pausebtn = document.getElementById("pause")
const resetbtn = document.getElementById("reset")
const lapListshow = document.getElementById("laplist")

let minutes = 0
let seconds = 0
let milliseconds = 0
let interval;

startbtn.addEventListener('click', startTimer);
stopbtn.addEventListener("click", stopTimer)
pausebtn.addEventListener("click", pauseTimer)
resetbtn.addEventListener("click", resetTimer)


function startTimer() {
    interval = setInterval(updateTimer, 10)
    startbtn.disabled = true
}
function stopTimer() {
    
    // clearInterval(interval)
    // resetTimerData()
    startbtn.disabled = false
    addtoLapList()
}

function pauseTimer() {

    startbtn.disabled = false
    clearInterval(interval);
}

function resetTimer() {

    startbtn.disabled = false
    clearInterval(interval);
    resetTimerData()
    resetTimerData.disabled = true
    addtoLapList.disabled=true
    lapListshow.innerHTML=""
}

function updateTimer() {
    milliseconds++;
    if (milliseconds === 100) {
        milliseconds = 0
        seconds++;
        if (seconds === 60) {
            seconds = 0
            minutes++;
        }
    }
    displayTimer();
}
function displayTimer() {
    milisecondlap.textContent = padTime(milliseconds)
    secondlap.textContent = padTime(seconds)
    minutelap.textContent = padTime(minutes)
}

function padTime(time) {
    return time.toString().padStart(2, '0');
}

function resetTimerData() {

    minutes = 0
    seconds = 0
    milliseconds = 0
    displayTimer()
}

function addtoLapList(){
    const lapTime=`${padTime(minutes)}:${padTime(seconds)}:${padTime(milliseconds)}`
    const listItem=document.createElement("li")
    listItem.innerHTML=`<span>lap ${lapListshow.childElementCount +1}: </span> ${lapTime}`
    lapListshow.appendChild(listItem)
}
