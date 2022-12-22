'use strict';

// Selecting DOM elements
const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let player1 = {
    score: score0El.textContent,
};

let player2 = {
    score: score1El.textContent,
}