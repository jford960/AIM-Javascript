
/*-------------------
1
--------------------*/
let cardsArray = ['king', 'queen', 'jack', 'ace', 'nine', 'four', 'three']
cardsArray.unshift(cardsArray.splice(3, 1)[0])
cardsArray.splice(4, 0, 'ten')
cardsArray.splice(6, 0, 'eight', 'seven', 'six', 'five')
cardsArray.push('two')
cardsArray.forEach((value, index) => {
    let card = value.toUpperCase().charAt(0) + value.substring(1)
    cardsArray[index] = card
});
console.log("Question 1")
console.log(cardsArray)


///////////////////////////////
//2
///////////////////////////////
console.log("Question 2")
let testArray = [-4, 0, 3, 7] //should return 10
function positiveSum(inputArray) {
    let runningSum = 0
    for (i = 0; i < inputArray.length; i++) {
        if (inputArray[i] > 0) {
            runningSum += inputArray[i]
        }
    }
    return runningSum
}
//console.log(positiveSum(testArray))

//////////////////////////////////
//3
//////////////////////////////////
console.log("Question 3")
console.log(diceRoll())
function diceRoll() {
    let player1 = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)
    let player2 = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)
    let player3 = Math.ceil(Math.random() * 6) + Math.ceil(Math.random() * 6)
    //let winner = "Player 1" //default
    //in case of ties, player 1 wins, then player 2
    console.log(player1, player2, player3)
    if (player1 >= player2 & player1 >= player3) {
        return "Player 1 wins!"
    }
    else if (player2 >= player1 & player2 >= player3) {
        return "Player 2 wins!"
    }
    else if (player3 >= player1 & player3 >= player2) {
        return "Player 3 wins!"
    }
    //console.log(winner)
    //Math.max(player1, player2, player3)
}


////////////////////////////////////
//4
////////////////////////////////////
console.log("Question 4")
let programWords = ["web", "code", "function", "method", "http", "html", "function", "java", "rust"]
//console.log(programWords)
programWords.fill("python", 2, 5)
console.log(programWords)
console.log(programWords.lastIndexOf("function"))
console.log(programWords.includes("java"))
console.log(programWords.includes("css"))

