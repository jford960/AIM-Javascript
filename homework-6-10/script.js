function inchToCentimeters(inches) {
    console.log(inches * 2.54)
}

inchToCentimeters(2)
inchToCentimeters(3)
inchToCentimeters(4.5)

//////////////////////////////////////

function isPosNegOrEvenOdd(x) {
    let isPositive;
    let isEven;
    if (x >= 0) {
        isPositive = "positive"
    } else {
        isPositive = 'negative'
    }
    if (x % 2 == 0) {
        isEven = 'even'
    } else {
        isEven = 'odd'
    }
    console.log(`The number ${x} is ${isPositive} and ${isEven}.`)
}

isPosNegOrEvenOdd(4)
isPosNegOrEvenOdd(-4)
isPosNegOrEvenOdd(3)
isPosNegOrEvenOdd(-3)
isPosNegOrEvenOdd(0)

//////////////////////////////////////

function ticketPrice(age) {
    if (age < 12) {
        return `Age: ${age}, Price: 5`;
    }
    else if (age < 18) {
        return `Age: ${age}, Price: 10`;
    }
    else if (age < 60) {
        return `Age: ${age}, Price: 20`;
    }
    else return `Age: ${age}, Price: 15`;
}

console.log(ticketPrice(6))
console.log(ticketPrice(12))
console.log(ticketPrice(16))
console.log(ticketPrice(18))
console.log(ticketPrice(50))
console.log(ticketPrice(60))
console.log(ticketPrice(70))

//////////////////////////////////////////

function BMI(weight, height) {
    let BMI = (weight / (height * height) * 703).toFixed(2);

    let category;
    if (BMI < 18.5) {
        category = 'Underweight';
    }
    else if (BMI <= 24.9) {
        category = 'Healthy';
    }
    else if (BMI <= 29.9) {
        category = 'Overweight';
    }
    else category = 'Obese';
    console.log(`Height: ${height}, Weight: ${weight}, BMI: ${BMI}`);
    console.log('Diagnosis: ' + category);
}

BMI(150, 66);
BMI(220, 76);
BMI(150, 56);
BMI(100, 64);
BMI(450, 66);

/////////////////////////////////////////////////////

function sorter(num1, num2, num3) {
    let sorted = [];
    if (num1 >= num2 && num1 >= num3) {
        sorted.push(num1);
        if (num2 >= num3) {
            sorted.push(num2, num3);
        }
        else {
            sorted.push(num3, num2);
        }
    }
    if (num2 >= num1 && num2 >= num3) {
        sorted.push(num2);
        if (num1 >= num3) {
            sorted.push(num1, num3);
        }
        else {
            sorted.push(num3, num1);
        }
    }
    if (num3 >= num2 && num3 >= num1) {
        sorted.push(num3);
        if (num2 >= num1) {
            sorted.push(num2, num1);
        }
        else {
            sorted.push(num1, num2);
        }
    }
    console.log(sorted);
}

sorter(17, 8, 35);
sorter(8, 35, 17);
sorter(35, 8, 17)

//////////////////////////////////////////////////////

function arraySum(array1, array2) {
    let runningSum = 0;
    for (const x of array1) {
        runningSum += x;
    }
    for (const y of array2) {
        runningSum += y;
    }
    console.log(`The sum of the arrays is: ${runningSum}.`);
}

arraySum([5, -5, 5], [10, 10, 15]);

//////////////////////////////////////////////////////

function searchS(toSearch) {
    if (toSearch.search('s') >= 0) {
        console.log('Yes')
    }
    else console.log('No')
}

searchS('hello');
searchS('house');
searchS('seven');

///////////////////////////////////////////////////////

function summation(stopHere) {
    let runningSum = 0;
    for (let index = 0; index <= stopHere; index++) {
        runningSum += index;
    }
    console.log(runningSum);
}

summation(6);