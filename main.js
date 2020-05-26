
let timerDisplay = document.querySelector('#display');
let start = document.querySelector('.start');
// let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset');
let workBtn = document.querySelector('.work');
let breakBtn = document.querySelector('.break');

let countdown;
let workTime = true;
//initial timer values
let minutes = 25;
let seconds = 00;
timerDisplay.textContent = minutes + ':' + `${seconds < 10 ? '0' : ''}${seconds}`;


start.addEventListener('click', () => {
    (workTime ? timer(1500) : timer (300));
});

breakBtn.addEventListener('click', () => {
    workTime = false;
    clearInterval(countdown);
    timerDisplay.textContent = '5:00';
});
    
workBtn.addEventListener('click', () => {
    workTime = true;
    clearInterval(countdown);
    timerDisplay.textContent = '25:00';
});

reset.addEventListener('click', () => {
    let display = `${workTime ? '25:00' : '5:00'}`;
    timerDisplay.textContent = display;
    clearInterval(countdown);
});


function timer(seconds) {
    //clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const endTime = now + seconds * 1000;
    updateDisplayTime(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((endTime - Date.now()) / 1000);
        //check if need to stop it
        if(secondsLeft <= 0) {
            updateDisplayTime(secondsLeft);
            clearInterval(countdown);
            workTime = workTime ? false : true;
            workTime ? timer(1500) : timer (300);
            return;
        }
        updateDisplayTime(secondsLeft);
    }, 1000);
}

function updateDisplayTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    const display = `${minutes}:${secondsLeft < 10 ? '0' : '' }${secondsLeft}`;
    document.title = display;
    timerDisplay.textContent = display;
}

function keepWorking () {

}
