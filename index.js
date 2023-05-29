let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let player = {
    name: "Chris",
    chips: 200
}
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

let box1El = document.getElementById("box1-el");
let box2El = document.getElementById("box2-el");

function getRandomCard() {
    let card = Math.floor(Math.random() * 13) + 1;
    if (card > 10) {
        return 10;
    } else if (card === 1) {
        return 11;
    } else {
        return card;
    }
}

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;

    box1El.textContent = firstCard;
    box2El.textContent = secondCard;
    let boxContainer = document.querySelector(".container");
    boxContainer.style.display = "flex";
    renderGame();
}

function renderGame() {
    if (sum <= 20) {
        message = "Do you want to hit?";
    } else if (sum === 21) {
        message = "You got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You busted! You are out of the game.";
        isAlive = false;
    }

    cardsEl.textContent = "Cards: ";
    for (let i=0; i<cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
}

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let extraCard = getRandomCard();
        sum += extraCard;
        cards.push(extraCard);
        renderGame();
    }
}