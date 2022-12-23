'use strict';
const initialScore = 0;

// Selecting DOM elements.
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnNewEl = document.querySelector('.btn--new');
const btnRollEl = document.querySelector('.btn--roll');
const btnHoldEl = document.querySelector('.btn--hold');
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

// Setting up initial page.
score0El.textContent = initialScore;
score1El.textContent = initialScore;

diceEl.classList.add('hidden');

// Rolling dice functionality.
const rollDice = function() {
    // Math random gives us a random number.
    // Math trunc removes any fractional digits.
    // After executing both math funcs, we get a num 0-5.
    // We +1 so the num is 1-6 (same as our dice sides).
    const dice = Math.trunc(Math.random() * 6) + 1;

    if (dice === 1) rollOne();
    else rollResult(dice);

    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

};

// Get the dice result.
// Add the result to the active player current score.
const rollResult = function(dice) {
    const activePlayer = getCurrentPlayer();

    if (activePlayer.classList.contains('player--0')) {
        addToCurrentScore(current0El, dice);
    } else {
        addToCurrentScore(current1El, dice);
    }
}

// Add the dice result to the active player score.
const addToCurrentScore = function(currentScoreEl, dice) {
    const currentScore = parseInt(currentScoreEl.textContent);
    const totalScore = currentScore + dice;

    currentScoreEl.textContent = totalScore;
}

// If the dice roll is 1, player loses their current score.
// Then the other player can start rolling.
const rollOne = function() {
    removeCurrentScore();
    switchPlayer();
}

// Gets the element that has the class for an active player.
const getCurrentPlayer = function() {
    return document.querySelector('.player--active');
}

// Set the current score of the active player.
const removeCurrentPlayerScore = function(currentScoreEl) {
    currentScoreEl.textContent = 0;
}

// Remove the current score fo the active player.
// Depending on the active player, we pass the corresponding current score element.
const removeCurrentScore = function() {
    const activePlayer = getCurrentPlayer();

    if (activePlayer.classList.contains('player--0')) {
        removeCurrentPlayerScore(current0El);
    } else {
        removeCurrentPlayerScore(current1El);
    }
}

// Add the current score to the existing total score for the active player.
const addToTotalScore = function(scoreEl, currentScoreEl) {
    const currentScore = parseInt(currentScoreEl.textContent);
    const currentTotalScore = parseInt(scoreEl.textContent);
    const newTotalScore = currentScore + currentTotalScore;
    
    scoreEl.textContent = newTotalScore;
}

// Sets the toatl score of the active player.
// Depending on the active player, we pass the corresponding current score and total score element.
const holdCurrentScore = function() {
    const activePlayer = getCurrentPlayer();
    let isGameOver = false;

    if (activePlayer.classList.contains('player--0')) {
        addToTotalScore(score0El, current0El);
        removeCurrentPlayerScore(current0El);
        isGameOver = hasPlayerWon(score0El, "Player 1");
    } else {
        addToTotalScore(score1El, current1El);
        removeCurrentPlayerScore(current1El);
        isGameOver = hasPlayerWon(score1El, "Player 2");
    }
    
    if (isGameOver === false) {
        switchPlayer();
    }
}

// Switches the active player.
// Called when the active player rolls 1.
// Called when the active player holds their current score.
const switchPlayer = function() {
    if (player1El.classList.contains('player--active')) {
        player1El.classList.remove('player--active');
        player2El.classList.add('player--active');
    } else {
        player1El.classList.add('player--active');
        player2El.classList.remove('player--active');
    }
}

const hasPlayerWon = function(playerTotalScoreEl, playerName) {
    const totalScore = parseInt(playerTotalScoreEl.textContent);
    const playerEl = playerName === 'Player 1' ? player1El : player2El;

    if (totalScore >= 100) {
        diceEl.classList.add('hidden');
        btnRollEl.classList.add('hidden');
        btnHoldEl.classList.add('hidden');
        playerEl.classList.add('player--winner');
        playerEl.classList.remove('player--active');
        return true;
    }

    return false;
}

const newGame = function() {
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    btnRollEl.classList.remove('hidden');
    btnHoldEl.classList.remove('hidden');
    player1El.classList.add('player--active');
    player2El.classList.remove('player--active');
    player1El.classList.remove('player--winner');
    player2El.classList.remove('player--winner');
}

btnNewEl.addEventListener('click', newGame.bind(this));
btnRollEl.addEventListener('click', rollDice.bind(this));
btnHoldEl.addEventListener('click', holdCurrentScore.bind(this));
