'use strict';

let secretNumber, score, highScore;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

const setScore = function (score) {
    document.querySelector('.score').textContent = score;
};

const setSecretNumber = function (secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
};

const init = function () {
    score = 20;
    highScore = 0;
    setScore(score);
    setSecretNumber('?');
    displayMessage('Start guessing...');
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
};

init();

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('No Number!');

        // When player wins
    } else if (guess === secretNumber) {
        setSecretNumber(secretNumber);
        displayMessage('Correct Number!');
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('body').style.backgroundColor = 'green';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score> 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            setScore(score);
        } else {
            setScore(0);
            displayMessage('You lose the game!');
        }
    }
});

document.querySelector('.again').addEventListener('click', init);