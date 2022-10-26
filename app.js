const time = document.getElementById('timer')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const btn = document.getElementById('start-btn')

let minute = 0
let seconds = 0;
let milliseconds = 0;
let m = 0 
let s = 0
let ms = 0
let nIntervId;




function checkInterval() {
    if(!nIntervId) {
        nIntervId = setInterval(startTimer, 10)
    }
}

function startTimer() {
    milliseconds++
    if(milliseconds >= 99) {
        seconds++
        milliseconds = 0
    } else if (seconds >= 60) {
        minute++
        seconds = 0
    }

    m = minute < 10 ? "0" + minute : minute
    s = seconds < 10 ? "0" + seconds : seconds
    ms = milliseconds < 10 ? "0" + milliseconds : milliseconds

    time.innerHTML = `${m}:${s}.${ms}`
}

function stopTimer() {
    clearInterval(nIntervId)

    nIntervId = null
}

btn.addEventListener('click', () => {
    if(btn.innerHTML == 'Start') {
        btn.innerHTML = 'Stop'
        btn.classList.add('active')
        checkInterval()
    } else if (btn.innerHTML == 'Stop') {
        btn.innerHTML = 'Start'
        btn.classList.remove('active')
        stopTimer()
    }
})
