'use strict';

//generate the number 
let secretNumber = Math.trunc( Math.random()*20) + 1;
// console.log(secretNumber)

let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.guess-number').textContent = message;
}

document.querySelector('.check-btn').addEventListener('click' , function() {
    const guess = Number(document.querySelector('.input-box').value);
    if(!guess) {
        displayMessage("No Number !");
    }
    else if(guess === secretNumber) {
        displayMessage("Correct Number !");
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').textContent = secretNumber;
        if(score > highScore) {
            highScore = score;
            document.querySelector('.high-score').textContent = highScore;
        }
    }

    else if(guess !== secretNumber) {
        if(score > 1) {
            displayMessage(guess > secretNumber ? "Too High !" : "Too Low !");
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.guess-number').textContent = "Loose The Game !";
            document.querySelector('.score').textContent = 0;

        }
    }
});

document.querySelector('.again').addEventListener('click' , function() {
    score = 20;
    secretNumber = Math.trunc( Math.random()*20) + 1;
    document.querySelector('.guess-number').textContent = "Guess Any Number !";
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.input-box').value = '';
    document.querySelector('body').style.backgroundColor = 'white';

})