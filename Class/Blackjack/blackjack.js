let dealerSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck = [];

let canHit = true;

//create deck and draw initial cards
window.onload = () => {
    buildDeck();
    shuffleDeck();
    startGame();
}

const buildDeck = () => {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suits = ['C', 'D', 'H', 'S'];

    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            deck.push(values[j] + '-' + suits[i]);
        }
    }
    console.log(deck);
}

const shuffleDeck = () => {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    console.log(deck);
}

const startGame = () => {
    // hidden = deck.pop();
    // dealerSum = getValue(hidden);
    // dealerAceCount += checkAce(hidden);
    // console.log("Hidden card: " + hidden);
    // console.log("Dealer sum: " + dealerSum);
    while (dealerSum < 17) {
        let cardImg = document.createElement('img');
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById('dealer-cards').append(cardImg);
    }
    console.log("Dealer sum: " + dealerSum)
    document.getElementById("dealer-sum").innerText = dealerSum;

    //draw two player cards
    for (let i = 0; i < 2; i++) {
        let cardImg = document.createElement('img');
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        playerSum += getValue(card);
        playerAceCount += checkAce(card);
        document.getElementById('player-cards').append(cardImg);
    }
    console.log("Player sum: " + playerSum)
    document.getElementById("player-sum").innerText = playerSum;


    //hit, stay, and new game buttons
    document.getElementById("hit").addEventListener("click", hit);
    document.getElementById("stay").addEventListener("click", stay);
    document.getElementById("new-game").addEventListener("click", newGame);
}


const hit = () => {
    if (!canHit) {
        return;
    }

    let cardImg = document.createElement('img');
    let card = deck.pop();
    cardImg.src = "./cards/" + card + ".png";
    playerSum += getValue(card);
    playerAceCount += checkAce(card);
    document.getElementById('player-cards').append(cardImg);

    if (reduceAce(playerSum, playerAceCount) > 21) {
        canHit = false;
    }

    document.getElementById("player-sum").innerText = playerSum;
    console.log("Drew card: " + card);
    console.log("Player sum: " + playerSum);
}


const stay = () => {
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    playerSum = reduceAce(playerSum, playerAceCount);

    canHit = false;
    //document.getElementById("hidden").src = "./cards/" + hidden + ".png";

    let message = "";
    if (playerSum > 21) {
        message = "You Lose!";
    }
    else if (dealerSum > 21) {
        message = "You Win!";
    }
    else if (playerSum > dealerSum) {
        message = "You Win!";
    }
    else if (playerSum < dealerSum) {
        message = "You Lose!";
    }
    else if (playerSum == dealerSum) {
        message = "Tie Game!";
    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("player-sum").innerText = playerSum;
    document.getElementById("result").innerText = message;
}

const getValue = (card) => {
    let data = card.split('-');
    let value = data[0];
    if (isNaN(value)) { //A, J, Q, K
        if (value == 'A') {
            return 11;
        }
        return 10;
    }

    return parseInt(value);
}

const checkAce = (card) => {
    if (card[0] == 'A') {
        return 1;
    }
}

//let ace count for 1
const reduceAce = (playerSum, playerAceCount) => {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}

//reset and start new game
const newGame = () => {
    console.log('Starting a new game')
    playerSum = 0;
    dealerSum = 0;
    playerAceCount = 0;
    dealerAceCount = 0;
    deck = [];
    document.getElementById("result").innerText = "";
    canHit = true;


    let playerCards = document.getElementById('player-cards')
    let dealerCards = document.getElementById('dealer-cards')
    while (playerCards.lastChild) {
        playerCards.removeChild(playerCards.lastChild);
    }
    while (dealerCards.lastChild.id != 'hidden') { //remove all but the hidden first card
        dealerCards.removeChild(dealerCards.lastChild);
    }

    //remake the deck and deal initial cards
    buildDeck();
    shuffleDeck();
    startGame();
}