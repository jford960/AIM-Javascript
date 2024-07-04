/*
let dateInput1 = prompt('Enter the first date here in MM/dd/YYY format');
let dateInput2 = prompt('Enter the second date here in MM/dd/YYY format');

let date1 = new Date(dateInput1);
let date2 = new Date(dateInput2);

//Calculating the time difference of two dates
let differenceInTime = Math.abs(date2.getTime() - date1.getTime());

//calculating the number of days between two dates
let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24));

//to display the final number of days
console.log('Total number of days between dates\n' + date1.toDateString() + ' and ' + date2.toDateString() + " is " + differenceInDays);

*/ //end of exercise 1

/*
//One day time in milliseconds
let oneDay = 1000 * 60 * 60 * 24

//set present date to two variables
let presentDate = new Date();

//0-11 is month in javascript
let christmasDay = new Date(presentDate.getFullYear(), 11, 25);

//calculate next year's christmas if passed already
if (presentDate.getMonth() == 11 && presentDate.getDate() > 25) {
    christmasDay.setFullYear(christmasDay.getFullYear() + 1);
}

//calc result in milliseconds
let result = Math.round((christmasDay.getTime() - presentDate.getTime()) / oneDay);

//display final result
console.log(`Number of days remaining until Christmas:\n
${presentDate.toDateString()} and ${christmasDay.toDateString()} is: ${result} days`
);

*/ //end of exercise 2

//Start of Object Oriented Programming (OOP)

function speak(line) {
    console.log(`The ${this.type} rabbit says: ${line}`);
}

let whiteRabbit = {
    type: 'white',
    speak
}

let hungryRabbit = {
    type: 'hungry',
    speak
}

// whiteRabbit.speak('Oh my fur and whiskers');
// hungryRabbit.speak('Got any carrots?');

let finder = {
    find(array) {
        return array.some(v => v == this.value)
    },
    value: 5
};
// console.log(finder.find([4, 5]))

let object = {};
//console.log(Object.getPrototypeOf(object))

let person = {
    name: 'John',
    age: 30,
    occupation: 'Developer'
}

function personConstructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
}

let person2 = new personConstructor('Bill', 25, 'Bricklayer')

// console.log(person)
// console.log(person2)

// let numberObject = {
//     firstNum: 1,
//     secondNum: 2
// }

// console.log(numberObject.firstNum)
// console.log(numberObject.firstNum.toString())


let protoAnimal = {
    speak(line) {
        console.log(`The ${this.type} rabbit says: ${line}`)
    },
}

let dog = Object.create(protoAnimal)
dog.type = 'dog'
dog.speak('ruff')
let cat = Object.create(protoAnimal)
cat.type = 'cat'
cat.speak('miou')
cat.cleanSelf = () => console.log("licking my fur")
cat.cleanSelf()
//dog.cleanSelf()


class Car {
    personConstructor(color, bodyType, NumberOfSeats) {
        this.color = color;
        this.bodyType = bodyType;
        this.NumberOfSeats = NumberOfSeats;
    }
    accelerate(speed) {
        console.log(`I am accelerating to ${speed} miles per hour`);
    }
}

let dodgeCaravan = new Car('dark grey', 'van', 7);
dodgeCaravan.accelerate(60);
console.log(Object.getPrototypeOf(Car) == Function.prototype);
console.log(Object.getPrototypeOf(Object.getPrototypeOf(Car)) == Function.prototype);



