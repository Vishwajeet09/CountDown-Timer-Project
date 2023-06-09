let countdown;
let timerDisplay;

function startTimer() {
    const hoursInput = document.getElementById('hoursInput');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');

    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

    const totalTime = (hours * 3600) + (minutes * 60) + seconds;

    if (totalTime <= 0) {
        alert('Please enter a valid duration.');
        return;
    }

// Disable inputs and start button during countdown
    hoursInput.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    document.querySelector('button').disabled = true;

    const startTime = Date.now();
    const endTime = startTime + (totalTime * 1000);
    
    countdown = setInterval(() => {
        const timeLeft = Math.round((endTime - Date.now()) / 1000);

        if (timeLeft < 0) {
        clearInterval(countdown);
        timerDisplay.textContent = 'Countdown Finished';
        resetInputs();
        return;
        }

        displayTimeLeft(timeLeft);
    }, 1000);
}

function displayTimeLeft(timeLeft) {
    const hours = Math.floor(timeLeft / 3600);
    const minutes = Math.floor((timeLeft % 3600) / 60);
    const seconds = Math.floor(timeLeft % 60);
    
    const display = `${hours.toString().padStart(2, '0')}h ${minutes.toString().padStart(2, '0')}m ${seconds.toString().padStart(2, '0')}s`;
    timerDisplay.textContent = display;
}

function resetInputs() {
    document.getElementById('hoursInput').value = '';
    document.getElementById('minutesInput').value = '';
    document.getElementById('secondsInput').value = '';
    
    document.getElementById('hoursInput').disabled = false;
    document.getElementById('minutesInput').disabled = false;
    document.getElementById('secondsInput').disabled = false;
    document.querySelector('button').disabled = false;
}

window.onload = function() {
    timerDisplay = document.getElementById('timer');
};
