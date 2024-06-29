function multiplier(fac1 = 2, fac2 = 3, fac3 = fac1 + fac2, fac4 = fac2 + fac3) {
    return `${fac1} * ${fac2} * ${fac3} * ${fac4} = ${fac1 * fac2 * fac3 * fac4}`;
}

console.log(multiplier(3, 4, 6, 4))
console.log(multiplier(3, 4, 6))
console.log(multiplier(3, 4))
console.log(multiplier(3))
console.log(multiplier(undefined, 4, 6, 4))

///////////////////////////////////////////////////////

function recursiveSum(toAdd) {
    if (toAdd.length == 1) {
        return toAdd[0]
    }
    return toAdd.pop() + recursiveSum(toAdd)
}

// console.log(recursiveSum([2]));  //2
// console.log(recursiveSum([2, 3])); //5
// console.log(recursiveSum([2, 3, 4])); //9
console.log(recursiveSum([2, 3, 4, 5])); //14

///////////////////////////////////////////////////////

function maxPlusMin(inputArray) {
    let minVal = Infinity;
    let maxVal = -Infinity;
    for (x in inputArray) {
        if (inputArray[x] <= minVal) {
            minVal = inputArray[x]
        }
        if (inputArray[x] >= maxVal) {
            maxVal = inputArray[x]
        }
    }
    //console.log(maxVal, minVal, minVal + maxVal)
    return minVal + maxVal;
}

const numbers = [5, 2, 6, 9, 7];
maxPlusMin(numbers);

function maxPlusMinMultiplied(factor) {
    return maxPlusMin(numbers) * factor
}
console.log(maxPlusMinMultiplied(2));