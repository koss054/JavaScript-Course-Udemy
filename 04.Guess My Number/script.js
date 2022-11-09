"use strict";

$(function () {
  const minNumber = 1;
  let maxNumber = 10;
  let score = Math.floor(maxNumber / 2);
  let totalScore = 0;
  let prevTotalScore = 0;
  let secretNumber = setSecretNumber(minNumber, maxNumber);
  let prevSecretNumber = secretNumber;
  let inRow = 0;

  setBetweenRange(minNumber, maxNumber);
  setScore(score);
  setTotalScore(totalScore);

  $(".btn.check").click(function () {
    let guess = $(".guess").val();
    let guessMessage = $(".message");

    if (score > 0) {
      if (!guess) {
        guessMessage.text("⛔ No number typed!");
      } else {
        updateOnClick(
          secretNumber,
          guess,
          guessMessage,
          score,
          totalScore,
          maxNumber
        );

        score = getScore();
        totalScore = getTotalScore();

        if (score == 0) {
          guessMessage.text("⛔ Try again!");
          score = 0;
        }
      }
    }

    // If the total score has increased the secret number needs to be changed.
    // Generating a new number for the user to guess.
    // The current score is added to the total score, which can be used in the upgrade tab.
    if (totalScore > prevTotalScore) {
      prevTotalScore = totalScore;
      secretNumber = setSecretNumber(minNumber, maxNumber);
    }
  });

  function setSecretNumber(min, max) {
    prevSecretNumber = secretNumber;
    return Math.floor(Math.random() * maxNumber) + minNumber;
  }

  function setBetweenRange(min, max) {
    $(".between").text(`(Between ${min} and ${max})`);
  }

  function getScore() {
    return Number($(".score").text());
  }

  function setScore(score) {
    $(".score").text(`${score}`);
  }

  function getTotalScore() {
    return Number($(".total-score").text());
  }

  function setTotalScore(totalScore) {
    $(".total-score").text(`${totalScore}`);
  }

  function updateOnClick(
    secretNumber,
    guess,
    guessMessage,
    score,
    totalScore,
    max
  ) {
    if (guess == secretNumber) {
      guessMessage.html("✔ You guessed the number! Changing number...");
      totalScore += score;
      score = Math.floor(max / 2);
    } else if (guess > secretNumber) {
      guessMessage.text("☝ Too high...");
      score--;
    } else if (guess < secretNumber) {
      guessMessage.text("👇 Too low...");
      score--;
    }

    setScore(score);
    setTotalScore(totalScore);
  }

  function isInRow(secretNumber, prevSecretNumber) {
    if (secretNumber == prevSecretNumber) {
      return true;
    } else {
      return false;
    }
  }
});
