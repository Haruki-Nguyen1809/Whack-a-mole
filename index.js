let currentMole = null;
let numberOfDivs = document.querySelectorAll('.hole').length;
const pointEl = document.getElementById('point');
let point = 0;
let moveMoleTimeID;
let timerID;
let timeLeft = 30;
const timerEl = document.getElementById('timer');
const messageEl = document.getElementById('message');

for (let i = 0; i < numberOfDivs; i++) {
    document.querySelectorAll('.hole')[i].addEventListener('click', function() {
        let currentHole = this.id;
        if (currentHole === currentMole) {
            point++;
            pointEl.textContent = `Your score is ${point}!`;
        } else {
            point--;
            pointEl.textContent = `Please play more careful or you may lose more points, Your score is ${point}!`;
        }
    })
}

function moveMole() {
    if (currentMole !== null) {
        let removeMole = document.getElementById(currentMole);
        removeMole.classList.remove('mole');
    }
    let randomHole = Math.floor(Math.random() * 9);
    currentMole = 'hole' + randomHole;
    let addMole = document.getElementById(currentMole);
    addMole.classList.add('mole');
}

moveMoleTimeID = setInterval(moveMole, 1000);

timerID = setInterval(function() {
    timeLeft--;
    timerEl.textContent = `0:${timeLeft}`;
    if (timeLeft === 0) {
        clearInterval(timerID);
        clearInterval(moveMoleTimeID);
        messageEl.textContent = `Time's up, your final score is ${point}`;
    }
},1000)




