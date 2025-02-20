'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
      */

//generate the secret no behind the sign?
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//here we implement the eventhandler function.
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when there is no input;
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    //when player win the game;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    // width increment when winning;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is too high;
  } else if (guess > secretNumber) {
    // so the score will not run infinte time or in minus no.
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You lost the game';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

// work for the again button;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  // width increment when winning;
  document.querySelector('.number').style.width = '15rem';
});
