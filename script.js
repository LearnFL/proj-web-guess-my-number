'use strict';

// Track score
let bestAttempt = 0;
let attempt = 0;

// Refresh button
document.querySelector('.refresh').addEventListener('click', function () {
  location.reload();
});

// Generate randon number
let number_to_guess = Math.ceil(Math.random() * 20);

console.log(
  `Good thinking to check the Console, the number is: ${number_to_guess}`
);

// Submit guess
document.querySelector('.check').addEventListener('click', function () {
  // If guessed
  if (
    document.querySelector('.guess').value &&
    number_to_guess === Number(document.querySelector('.guess').value)
  ) {
    document.body.style.backgroundColor = 'green';

    document.querySelector('.number').textContent =
      document.querySelector('.guess').value;

    setTimeout(() => {
      document.body.style.backgroundColor = '#222';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.guess').value = '';
    }, 1000);

    // Update best attempt
    if (attempt < bestAttempt && bestAttempt > 0) {
      //   Personal preference may add 1
      bestAttempt = attempt;
      document.querySelector('.highscore').textContent = bestAttempt;
    } else if (attempt > bestAttempt && bestAttempt === 0) {
      //   Personal preference may add 1
      bestAttempt = attempt;
      document.querySelector('.highscore').textContent = bestAttempt;
    } else {
      document.querySelector('.highscore').textContent = bestAttempt;
    }

    attempt = 0;
    document.querySelector('.score').textContent = attempt;
    number_to_guess = Math.floor(Math.random() * 20);

    console.log(
      `Good thinking to check the Console, the number is: ${number_to_guess}`
    );
  } else {
    // If did not guess
    if (
      document.querySelector('.guess').value &&
      Number(document.querySelector('.guess').value) > 0 &&
      Number(document.querySelector('.guess').value) <= 20
    ) {
      document.body.style.backgroundColor = 'red';
      setTimeout(() => {
        document.body.style.backgroundColor = '#222';
      }, 1000);
      attempt += 1;
      document.querySelector('.score').textContent = attempt;
    } else {
      document.querySelector('.alert').style.visibility = 'visible';
      setTimeout(() => {
        document.querySelector('.alert').style.visibility = 'hidden';
      }, 1500);
    }
  }
});

document.querySelector('.help').addEventListener('click', () => {
  document.querySelector('.number').textContent = number_to_guess;
  document.querySelector('.number').style.backgroundColor = '#FAF4B7';
  setTimeout(() => {
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.backgroundColor = 'white';
  }, 1500);
});
