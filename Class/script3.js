/*
//Class for 6/24
const goToDinner = () => {
    const menu = [
        {
            dishName: "Beef Tenderloin",
            price: 14.75
        },
        {
            dishName: "Ribeye Steak",
            price: 17.50
        },
        {
            dishName: "Barbecue Chicken",
            price: 13.25
        }
    ];
    let menuList = '';
    for (let i = 0; i < menu.length; i++) {
        menuList += `${i + 1}. ${menu[i].dishName}: ${menu[i].price.toFixed(2)} \n`
    }
    let dinnerChoice = parseInt(prompt(
        `Please select your choice of meal: \n ${menuList}`
    ));

    if (Number.isNaN(dinnerChoice) || dinnerChoice < 1 || dinnerChoice >= menu.length + 1) {
        console.log('That is an invalid choice, please try again.');
        dinnerChoice = parseInt(prompt(
            `Please select your choice of meal: \n ${menuList}`
        ));
    }
    console.log(`You have chosen the ${menu[dinnerChoice - 1].dishName}`);
    // const dinnerChoiceString = `You have chosen the ${menu[dinnerChoice - 1].dishName}.`

    let preTipTotal = parseFloat((menu[dinnerChoice - 1].price).toFixed(2));
    console.log(`The pre tip total is ${preTipTotal.toFixed(2)}`);
    let tipPercentage = 0.095;
    let tipCost = (preTip, tipPercent) => {
        let tipResult = Math.round((preTip * tipPercent) * 100) / 100;
        console.log(`The tip comes to ${tipResult}`);
        return tipResult;
    }
    let totalBill = preTipTotal + tipCost(preTipTotal, tipPercentage);
    console.log(`Your total bill is ${totalBill}`)
};

goToDinner();

*/

//Class for 6/26

//let myDate = new Date('1995-12-17T03:24:00');
// let myDate = new Date(2024, 11, 24, 10, 33, 30, 42);
// myDate = new Date().getTime();
// myDate = new Date().getMonth();

// let myDate = new Date();
// const [month, day, year] = [
//     myDate.getMonth(),
//     myDate.getDate(),
//     myDate.getFullYear(),
// ]


// document.getElementById('date').innerHTML = myDate;
// console.log(myDate);

// const addOne = (value) => value + 1;
// const doubleValue = (value) => addOne(value) * 2;
// const makeTotal = (a, b) => {
//     return doubleValue(a) + doubleValue(b);
// }
// console.log(makeTotal(10, 20));


// function chicken() {
//     return egg();
// }

// function egg() {
//     return chicken();
// }

// console.log(chicken() + "came first.")

// function square(num) {
//     return num * num
// }

// console.log(square(2));
// console.log(square(4, true, "ford"));

// function minus(a, b) {
//     if (b === undefined) return -a;
//     else return a - b;
// }

// console.log(minus(10));
// console.log(minus(10, 5));

// function returnPlusTwo(num) {
//     let sum = num + 2;
//     return () => sum;
// }

// let threePlusTwo = returnPlusTwo(3);
// let fivePlusTwo = returnPlusTwo(5);

// function multiplier(factor) {
//     return number => number * factor
// }

// let twice = multiplier(2);
// console.log(twice(5));

// function twice(number){
//     let num2 = 2;
//     return function multiplier(factor){
//         return number*factor
//     }
// }

// const createSecret = (secret) => {
//     return {
//         getSecret: () => secret,
//         setSecret: (newSecret) => {
//             secret = newSecret
//         }
//     };
// };

// const mySecret = createSecret("My secret");
// console.log(mySecret.getSecret());

// mySecret.setSecret("My new secret");
// console.log(mySecret.getSecret());

// const add = (a) => (b) => a+b;
// const increment = add(1);
// console.log(increment(2));

//object without destructuring
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }

// const firstName = person.firstName;
// const lastName = person.lastName, age = person.age
// console.log(`My name is ${firstName} ${lastName}, and I am ${age} years old.`)

//Object with destructuring
// const { firstName, lastName, age } = person;
// console.log(`I am ${firstName} ${lastName}, and I am ${age} years old.`)

//array without destructuring
// const colors = ['red', 'green', 'blue'];
// const firstColor = colors[0], secondColor = colors[1], thirdColor = colors[2];
// console.log(`RGB stands for ${firstColor}, ${secondColor}, ${thirdColor}`)

//array with destructuring
// const [firstColor, secondColor, thirdColor] = colors;
// console.log(`${firstColor}, ${secondColor}, and ${thirdColor} are my favorite colors.`)

// const inventory = [
//     { fruit: "apples", quantity: 2 },
//     { fruit: "bananas", quantity: 0 },
//     { fruit: "oranges", quantity: 5 }
// ]

// const result = inventory.find(({ fruit }) => fruit === "oranges");
// console.log(result);

// const user = {
//     firstName: 'Alice',
//     age: 25,
//     address: {
//         city: 'Albany',
//         state: 'NY'
//     }
// };
// const { firstName, age, address: { city, state } } = user;
// console.log(firstName, age, city, state);

// const nestedNumberArray = [1, [2, 3], 4];
// const [a, [b, c], d] = nestedNumberArray;
// console.log(a, b, c, d);

// const { firstName, age = 28, gender = 'female' } = user;
// console.log(`My name is ${firstName}, and I am a ${age} year old ${gender}.`)

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30
// }

// const { firstName: givenName, lastName: familyName, age: yearsOld } = person;
// console.log(`I go by ${givenName} ${familyName}, and I have live ${yearsOld} years so far.`)


//Rest Parameters
// const double = (x) => x * 2;
// const sum = (x, y) => x + y;
// const doubleAndSum = (...numbers) => numbers
//     .map(double)
//     .reduce(sum, 0);
// console.log(doubleAndSum(1, 2, 3));
// console.log(doubleAndSum(1, 2, 3, 4));
// console.log(doubleAndSum(1, 2, 3, 4, 5));

// const someFunction = (a, b, c, ...others) => {
//     console.log(a, b, c, others)
// };

// someFunction('one', 'two', 'three', 'four', 'five', 'six');

// const colors2 = ['red', 'green', 'blue', 'yellow', 'orange'];
// const [firstColor, secondColor, ...otherColors] = colors2
// console.log(firstColor, secondColor, otherColors);


//Recursion
// function iterativeFactorial(n) {
//     let result = 1;
//     for (let i = n; i > 0; i--) {
//         result = result * i;
//     }
//     return result;
// }
// console.log(iterativeFactorial(5));

function recursiveFactorial(n) {
    if (n == 1) {
        return 1
    }
    return n * recursiveFactorial(n - 1)
}
console.log(recursiveFactorial(5))