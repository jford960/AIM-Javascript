let dealerSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck = [];

let canHit = true;

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
    hidden = deck.pop();
    dealerSum = getValue(hidden);
    dealerAceCount += checkAce(hidden);
    console.log(hidden);
    console.log(dealerSum);
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

const reduceAce = (playerSum, playerAceCount) => {
    while (playerSum > 21 && playerAceCount > 0) {
        playerSum -= 10;
        playerAceCount -= 1;
    }
    return playerSum;
}