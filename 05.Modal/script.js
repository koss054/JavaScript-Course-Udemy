'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

function showModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

function hideModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (let i = 0; i < btnOpenModal.length; i++) {
    btnOpenModal[i].addEventListener('click', showModal.bind(this));
}

btnCloseModal.addEventListener('click', hideModal.bind(this));
overlay.addEventListener('click', hideModal.bind(this));

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('hidden') === false) {
        hideModal.bind(this);
    }
});