// console.log("Hello there")

let total = 0
total = total + 2
total += 3
total++

// console.log(total)

//I want to say it's chilly if it's less than 40 degrees out

let temp = 32
if (temp < 40) {
    console.log("Brr, it is chilly")
}
else console.log("It's fine")

temp = 42
if (temp < 40) {
    console.log("Brr, it is chilly")
}
else console.log("It's fine")

function checkTemperature(tempToday) {
    console.log("Today's temp is: " + tempToday)
    if (tempToday < 40) {
        console.log("Brr, it is a little chilly")
    }
    else console.log("It's warm")
}

// checkTemperature(50);
// checkTemperature(Math.round(Math.random() * 100))

function checkCreditHealth(cardBalance, numOfLoans) {
    if (cardBalance > 5000 && numOfLoans > 7) {
        console.log("I am in trouble")
    }
}

// checkCreditHealth(6000, 8)
// checkCreditHealth(5000, 8)
// checkCreditHealth(6000, 7)

function checkCreditHealth2(cardBalance, numOfLoans) {
    if (cardBalance > 5000 && numOfLoans > 7) {
        console.log("I am in some trouble")
    }
    else {
        console.log("I am doing ok credit wise")
    }
}

// checkCreditHealth2(6000, 8)
// checkCreditHealth2(5000, 8)
// checkCreditHealth2(6000, 6)

function pickHairColor(mood) {
    if (mood == "happy") {
        console.log("I want green hair today!")
    }
    else if (mood == 'sad') {
        console.log("I want blue hair today")
    }
}

// pickHairColor("happy")
// pickHairColor("sad")
// pickHairColor("angry")

function checkGrade(score) {
    console.log(score)
    if (score >= 90) {
        console.log("I got an A!")
    }
    else if (score >= 80) {
        console.log("I got a B!")
    }
    else if (score >= 70) {
        console.log("I got a C!")
    }
    else if (score >= 60) {
        console.log("I got a D!")
    }
    else {
        console.log("I failed :(")
    }
}

// checkGrade(95)
// checkGrade(85)
// checkGrade(75)
// checkGrade(65)
// checkGrade(55)


function getTodaysClass(dayOfWeek) {
    switch (dayOfWeek) {
        case "Monday":
            console.log("Today is Science class")
            break;
        case "Tuesday":
            console.log("Today is Algebra")
            break
        case "Wednesday":
            console.log("Today is science lab")
            break
        case "Thursday":
            console.log("Today is History")
            break
        case "Friday":
            console.log("Today is a study day")
            break
        case "Saturday":
        case "Sunday":
            console.log("Hooray, it's the weekend!")
            break
        default:
            console.log("bad input")
            break;
    }
}

getTodaysClass("Monday")
getTodaysClass("Thursday")
getTodaysClass("Sunday")
getTodaysClass("Saturday")
getTodaysClass()


let fruits = ['apple', 'banana', 'orange', 'kiwi', 'watermelon']
function printFruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        console.log(`Fruit ${i + 1} is a ${fruits[i]}`)
    }
}

// printFruits(fruits)

function printFruits2() {
    for (let i = fruits.length - 1; i >= 0; i--) {
        console.log(`Fruit ${i + 1} is a ${fruits[i]}`)
    }
}

// printFruits2(fruits)

let cars = ['Audi', 'Chrysler', 'Ford', 'Honda', 'Subaru', 'Toyota']

printFruits(cars)
printFruits('hello')
printFruits(223)

function isDivisibleByfive() {
    for (let i = 1; i <= 30; i += 3) {
        if (i % 5 == 0) {
            console.log(`${i} is divisible by 5`)
        }
        else {
            console.log(i + " is not divisible by 5")
        }

    }
}

isDivisibleByfive()