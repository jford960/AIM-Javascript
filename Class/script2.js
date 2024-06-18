//String.indexOf()
// console.log("one two three".indexOf("ee"))
// console.log("one two three".indexOf("d")) //not found = -1

//String.trim()
// console.log('   okay      \n  '.trim())
// console.log('   hello dear    '.trim())


// Math.round(), Math.ceil(), Math.floor()
// console.log(Math.round(4.8653))  //5
// console.log(Math.round(6.2653))  //6
// console.log(Math.round(5.5))  //6

// console.log(Math.ceil(4.8653))  //5
// console.log(Math.ceil(6.2653))  //7
// console.log(Math.ceil(5.5))  //6

// console.log(Math.floor(4.8653))  //4
// console.log(Math.floor(6.2653))  //6
// console.log(Math.floor(5.5))  //5

// Math.max(), math.min()
// console.log(Math.max(4, 8, -2, 16, 9))
// console.log(Math.min(4, 8, -2, 16, 9))


// Math.random()
// console.log(Math.random()) //returns decimal number between 0 and 1
// console.log(Math.random() * 10) //returns decimal number between 0 and 9.999...
// console.log(Math.floor(Math.random() * 10) + 1)
// console.log(Math.ceil(Math.random() * 10))
// console.log(Math.floor(Math.random() * 11))
// console.log(Math.floor(Math.random() * 38) + 17)
// console.log(Math.floor(Math.random() * (max - min + 1) + min))


//Call stack
// function greet(who){
//     console.log('Hello ' + who)
// }
// greet('Harry')
// console.log('Bye')


//optional arguments
function square3(num) {
    return num * num
}

// console.log(square3(5, 10, true, 'Beth'))

function minus(a, b) {
    if (b === undefined) return -a
    else return a - b
}

// console.log(minus(10))
// console.log(minus(10, 5))

//optional argument and default argument for step
function roundToAgain(num, step = 1) { //rounds to the nearest interval of step
    let remainder = num % step
    return num - remainder + (remainder < step / 2 ? 0 : step)
}

console.log(roundToAgain(4, 3))
console.log(roundToAgain(5, 3))
console.log(roundToAgain(6, 3))
console.log(roundToAgain(4))
console.log(roundToAgain(5))
console.log(roundToAgain(6))
