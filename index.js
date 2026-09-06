let currentMole = null;
let numberOfDivs = document.querySelectorAll('.hole').length;
const pointEl = document.getElementById('point');
let point = 0;


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

setInterval(moveMole, 1000);


