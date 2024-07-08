const p1button = document.querySelector('#p1button');
const p2button = document.querySelector('#p2button');
const resetbutton = document.querySelector('#resetbutton');
const p1display = document.querySelector('#p1display');
const p2display = document.querySelector('#p2display');
const playToSelect = document.querySelector('#playToSelect');
const winnerMessage = document.querySelector('#winnerMessage');

let p1score = 0;
let p2score = 0;
let winningscore = 10; 
let isGameover = false;

function reset() {
    isGameover = false;
    p1score = 0;
    p2score = 0;
    p1display.textContent = 0;
    p2display.textContent = 0;
    p1display.classList.remove('winner');
    p2display.classList.remove('winner');
    p1button.disabled = false;
    p2button.disabled = false;
    winnerMessage.classList.add('hidden');
}

function showWinner(winnerDisplay, color) {
    winnerDisplay.classList.add('winner');
    p1button.disabled = true;
    p2button.disabled = true;
    winnerMessage.textContent = `${color} Wins!`;
    winnerMessage.classList.remove('hidden');
}

playToSelect.addEventListener('change', function() {
    winningscore = parseInt(this.value); 
    reset();
});

p1button.addEventListener('click', function() {
    if (!isGameover) {
        p1score++;
        p1display.textContent = p1score;
        if (p1score === winningscore) {
            isGameover = true;
            showWinner(p1display, 'Blue');
        }
    }
});

p2button.addEventListener('click', function() {
    if (!isGameover) {
        p2score++;
        p2display.textContent = p2score;
        if (p2score === winningscore) {
            isGameover = true;
            showWinner(p2display, 'Red');
        }
    }
});

resetbutton.addEventListener('click', reset);