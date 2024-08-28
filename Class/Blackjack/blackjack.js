let dealerSum = 0;
let playerSum = 0;

let dealerAceCount = 0;
let playerAceCount = 0;

let hidden;
let deck = [];
let numOfDecks = 7;

let canHit = true;

let playerMoney = 1000;
let playerBet = 0;
let bettingButtons = document.getElementsByClassName('bet-buttons');


//create deck and draw initial cards
window.onload = () => {
    buildDeck();
    shuffleDeck();
    getBet();
    // startGame();
}

const buildDeck = () => {
    let values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    let suits = ['C', 'D', 'H', 'S'];
    for (let deckNum = 0; deckNum < numOfDecks; deckNum++) {
        for (let i = 0; i < suits.length; i++) {
            for (let j = 0; j < values.length; j++) {
                deck.push(values[j] + '-' + suits[i]);
            }
        }
    }
    //console.log(deck);
}

const shuffleDeck = () => {
    for (let i = 0; i < deck.length; i++) {
        let j = Math.floor(Math.random() * deck.length);
        let temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    //console.log(deck);
}

const getBet = () => {
    for (const button of bettingButtons) {
        button.toggleAttribute('disabled');
    }
    bettingButtons[4].disabled = true;
}

const increaseBet = (addX) => {
    playerBet += addX;
    document.getElementById('bet-amount').innerText = '$' + playerBet;
    document.getElementById('place-bet').disabled = false;
}

const placeBet = () => {
    for (const button of bettingButtons) {
        button.toggleAttribute('disabled');
    }
    startGame()
}

const doubleDown = () => {
    playerBet *= 2;
    document.getElementById('bet-amount').innerText = '$' + playerBet;
    hit();
    stay();
}

const wait = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startGame() {

    for (let i = 0; i < 4; i++) {
        await wait(750);
        //console.log('waiting...')
        let cardImg = document.createElement('img');
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        if (i % 2 == 1) { //player cards
            playerSum += getValue(card);
            playerAceCount += checkAce(card);
            document.getElementById('player-cards').append(cardImg);
        } else { //dealer cards
            if (dealerSum != 0) { //hidden card
                hidden = card;
                // console.log('hidden card: ' + hidden)
                cardImg.src = "./cards/BACK.png";
                cardImg.id = 'hidden';
                document.getElementById('dealer-cards').append(cardImg);
                // console.log("Hidden card: " + hidden);
            } else {
                dealerSum += getValue(card);
                dealerAceCount += checkAce(card);
                document.getElementById('dealer-cards').append(cardImg);
            }
        }
    }
    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("player-sum").innerText = playerSum;
    document.getElementById('hit').disabled = false;
    document.getElementById('stay').disabled = false;
    // console.log("Dealer sum: " + dealerSum)
    // console.log("Player sum: " + playerSum)

    //doubling down
    if (playerSum >= 9 && playerSum <= 11) {
        document.getElementById('double-down').style.display = 'inline-block';
    }


}


const hit = () => {
    document.getElementById('double-down').style.display = 'none';

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
    // console.log("Drew card: " + card);
    // console.log("Player sum: " + playerSum);
}

async function stay() {
    document.getElementById('double-down').style.display = 'none';

    document.getElementById('hit').disabled = true;
    document.getElementById('stay').disabled = true;
    canHit = false;

    let hiddenCard = document.getElementById("hidden");
    //reveal hidden card
    hiddenCard.classList.toggle('flipped');
    document.getElementById("hidden").src = "./cards/" + hidden + ".png";
    dealerAceCount += checkAce(hidden);
    dealerSum += getValue(hidden);

    //reduce aces if needed
    dealerSum = reduceAce(dealerSum, dealerAceCount);
    playerSum = reduceAce(playerSum, playerAceCount);

    while (dealerSum < 17) {
        await wait(1000)
        let cardImg = document.createElement('img');
        let card = deck.pop();
        cardImg.src = "./cards/" + card + ".png";
        dealerSum += getValue(card);
        dealerAceCount += checkAce(card);
        document.getElementById('dealer-cards').append(cardImg);
    }

    let message = "";
    if (playerSum > 21) {
        message = "You Lose!";
        playerMoney -= playerBet;
    }
    else if (dealerSum > 21) {
        message = "You Win!";
        playerMoney += playerBet;

    }
    else if (playerSum > dealerSum) {
        message = "You Win!";
        playerMoney += playerBet;

    }
    else if (playerSum < dealerSum) {
        message = "You Lose!";
        playerMoney -= playerBet;
    }
    else if (playerSum == dealerSum) {
        message = "Tie Game!";
    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("player-sum").innerText = playerSum;
    document.getElementById("result").innerText = message;
    document.getElementById("result").style.visibility = 'visible';
    document.getElementById('new-game').disabled = false;
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
    } else return 0;
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
    console.log('Starting a new round')
    // console.log('The deck looks like this:')
    // console.log(deck);
    playerSum = 0;
    dealerSum = 0;
    playerAceCount = 0;
    dealerAceCount = 0;
    playerBet = 0;

    document.getElementById('bet-amount').innerText = '$0'
    document.getElementById('cash').innerText = '$' + playerMoney
    document.getElementById("result").style.visibility = 'hidden';
    // document.getElementById('hit').disabled = false;
    // document.getElementById('stay').disabled = false;
    document.getElementById('new-game').disabled = true;

    // for (const button of bettingButtons) {
    //     button.toggleAttribute('disabled');
    // }

    // document.getElementById("hidden").src = "./cards/" + "BACK.png";


    // document.getElementById("result").innerText = "";
    canHit = true;


    let playerCards = document.getElementById('player-cards')
    let dealerCards = document.getElementById('dealer-cards')
    while (playerCards.lastChild) {
        playerCards.removeChild(playerCards.lastChild);
    }
    while (dealerCards.lastChild) {//.id != 'hidden') { //remove all but the hidden first card
        dealerCards.removeChild(dealerCards.lastChild);
    }

    //remake and shuffle the deck when running out of cards
    //doing it when < 3 decks
    if (deck.length < 75) {
        console.log('Need more cards. Rebuilding deck...')
        deck = [];
        buildDeck();
        shuffleDeck();
        console.log('Using new deck...')
        // console.log(deck);
    }

    document.getElementById("dealer-sum").innerText = dealerSum;
    document.getElementById("player-sum").innerText = playerSum;

    getBet();
}

//hit, stay, and new game buttons
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("stay").addEventListener("click", stay);
document.getElementById("new-game").addEventListener("click", newGame);
document.getElementById("5-bet").addEventListener("click", function () { increaseBet(5); });
document.getElementById("10-bet").addEventListener("click", function () { increaseBet(10); });
document.getElementById("25-bet").addEventListener("click", function () { increaseBet(25); });
document.getElementById("50-bet").addEventListener("click", function () { increaseBet(50); });
document.getElementById("place-bet").addEventListener("click", placeBet);
document.getElementById("double-down").addEventListener("click", doubleDown);

