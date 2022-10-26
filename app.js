const time = document.getElementById('timer')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const btn = document.getElementById('start-btn')

let minute = 0
let seconds = 0;
let milliseconds = 0;
let nIntervId;

time.innerHTML = `${minute}: ${seconds}.${milliseconds}`

function checkInterval() {
    if(!nIntervId) {
        nIntervId = setInterval(startTimer, 10)
    }
}

function startTimer() {
    milliseconds++
    if(milliseconds > 100) {
        milliseconds = 0
        seconds++
    } else if (seconds > 60) {
        seconds = 0
        minute++
    }
    time.innerHTML = `${minute}: ${seconds}s.${milliseconds}`
}

function stopTimer() {
    clearInterval(nIntervId)

    nIntervId = null
}



btn.addEventListener('click', () => {
    if(btn.innerHTML == 'START') {
        btn.innerHTML = 'STOP'
        btn.classList.add('active')
        checkInterval()
    } else if (btn.innerHTML == 'STOP') {
        btn.innerHTML = 'START'
        btn.classList.remove('active')
        stopTimer()
    }
})
