/*

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

*/

////////////////////////////////////////////////////////
// Class on 6/12
/////////////////////////////////////////////////////////

// function calculateTip(preTip, tipPercent) {
//     const tipResult = preTip * tipPercent
//     return tipResult
// }

// const preTipTotal = 100
// const tipPercentage = 0.15
// const tipCost = calculateTip(preTipTotal, tipPercentage)
// const totalBill = preTipTotal + tipCost
// console.log('Your total bill is $' + totalBill)


//declare tipCost using anonymous function
const preTipTotal = 100
const tipPercentage = 0.15

// const tipCost = function (preTip, tipPercent) {
//     const tipResult = preTip * tipPercentage
//     return tipResult
// }
// const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage)
// console.log("Your total bill is $" + totalBill)


//Arrow functions

// const tipCost = (preTip, tipPercent) => {
//     // const tipResult = preTip * tipPercent
//     // return tipResult
//     return preTip * tipPercent
// }

// const totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage)
// console.log("Your total bill is $" + totalBill)


const roundTo = (n, step) => {
    let remainder = n % step
    return n - remainder + (remainder < step / 2 ? 0 : step)
    //ternary operator - condition t or f ? first result:secondResult
}

//console.log(roundTo(40, 3))

//n = 40, step = 3
// remainder = 40 % 3 = 1
//return 40 - 1 + (1 < 3 / 2 ? 0 : 3)


const sum = (num1, num2) => num1 + num2

const square = num => num * num

const addTwoNumbers = () => 5 + 3


//////////////////////////////
// Objects
//////////////////////////////

const vehicle = {
    name: "Fiat",
    model: "500",
    weight: 850,
    color: "white",
    start(speed) {
        console.log("Starting car")
        for (let i = 0; i <= speed; i += 5) {
            console.log('Accelerating at ' + i + 'mph')
        }
        console.log('Reached desired speed')
    },
    makeAndModel: function () {
        return this.name + " " + this.model //refers to this vehicle object
    },
    weightInKgs: () => {
        return vehicle.weight + "kg"
    }
}

// objectName.property
// objectName["property"]
// objectName[expression]

// console.log("My newest car is a " + vehicle.color + ' ' + vehicle.makeAndModel())
// console.log("My " + vehicle.name + " weighs " + vehicle.weightInKgs())
// console.log(vehicle.start(55))

const adult = { firstName: "Bob", lastName: "Ross", age: 50, eyeColor: "blue" }

const duck1 = {}
const duck2 = new Object()

duck1.color = "magenta"
// console.log(duck1)

let duckColor = duck1["color"]
// console.log(duckColor)

const person = {
    name: "Bill",
    age: 54,
    2: "Thompson",
    "Joe Cool": "Snoopy"
}

person.jeanSize = 42
// console.log(person)
// console.log(person["name"])
person["country"] = "USA"
// console.log(person)
person.name = "John"
// console.log(person)
let i = "Joe Cool"
// console.log(person[i])
person[i] = "Spike"
// console.log(person)
delete person.name
// console.log(person.name)
// console.log(person)
// console.log("country" in person)
// console.log("name" in person)
// console.log(Object.keys(person))
//console.log(person.2) //wrong
// console.log(person[2])
//person.2 = "Johnson"  //wrong
person[2] = "Johnson"
// console.log(person)
// person."2" = 'Baird' //wrong
person['2'] = 'Baird'
// console.log(person)
person[1 + 1] = 'Smith'
// console.log(person)
// person.Joe Cool = "Sonny" //wrong
// person."Joe Cool" = "Sonny" //wrong
// person[Joe Cool] = "Sonny" //wrong
person["Joe Cool"] = "Sonny"
// console.log(person)


const myself = {
    name: "John",
    age: 30,
    myCars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    },
    myClasses: [
        {
            className: "Science",
            roomNumber: "102",
            teacher: "O'Grady"
        },
        {
            className: "History",
            roomNumber: "303",
            teacher: "Hanon",
            gpa: 3.5
        }
    ]
}

let venue = "QUEST CENTER"
let venueFormtatted = venue.toLowerCase()
// console.log(venue, venueFormtatted)

let price = 5.8679132
let priceFormatted = price.toFixed(2)
// console.log(priceFormatted)

const treeFruits = ["Apple", "Orange", "Banana"]
// console.log(treeFruits.length)
// console.log(treeFruits)
treeFruits.push("Kiwi")
// console.log(treeFruits.length)
// console.log(treeFruits)
treeFruits.pop()
// console.log(treeFruits.length)
// console.log(treeFruits)
treeFruits[3] = 'Dragonfruit'
// console.log(treeFruits.length)
// console.log(treeFruits)
treeFruits[2] = "Peach"
// treeFruits[6] = "New thing" //bad way, creates empty spaces
// console.log(treeFruits)
const treeFruitsString = treeFruits.toString()
// console.log(treeFruitsString)
treeFruits.sort()
// console.log(treeFruits)
// console.log(treeFruits[treeFruits.length - 1])
// treeFruits.forEach((item, index) => {
//     console.log('Item #' + (index + 1) + ": " + item)
// })
// let myFruit = treeFruits[2]
// console.log(myFruit)
// let yourFruit = treeFruits.at(2)
// console.log(yourFruit)
// let hisFruit = treeFruits.at(-1)
// console.log(hisFruit)
// console.log(treeFruitString1 = treeFruits.toString())
// console.log(treeFruitString1 = treeFruits.join(" * "))
// console.log(treeFruits)
// console.log(treeFruits.length)
// treeFruits.shift()
// console.log(treeFruits)
// console.log(treeFruits.length)
// treeFruits.unshift("Lemon")
// console.log(treeFruits)
// console.log(treeFruits.length)

const children = ["Joseph", "Bethany", "Zachary"]
const adults = ["Amy", "Andrea", "Ingrid"]
const parents = ["Errol", "Francene"]
const myRelatives = children.concat(adults, parents)
console.log(myRelatives)
console.log(children)
console.log(adults)
const myKin = myRelatives.concat('Eric')
console.log(myKin)

const testScores = [[99, 100], [86, 92], [77, 79]]
console.log(testScores)
const newTestScores = testScores.flat()
console.log(newTestScores)