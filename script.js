// timer.js

let timerInterval;
let seconds = 0;

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            seconds++;
            displayTime();
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    seconds = 0;
    displayTime();
}

function displayTime() {
    const timerDisplay = document.getElementById('timerDisplay');
    const formattedTime = new Date(seconds * 1000).toISOString().substr(11, 8);
    timerDisplay.textContent = formattedTime;
}