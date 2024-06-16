//1
console.log("Question 1:")
let myFamily = {
    lastName: 'Dunphy',
    city: 'Pawnee',
    state: 'CO',
    familyMembers: [
        {
            firstName: 'Phil',
            profession: 'Realtor',
            age: 42,
            familyRole: 'Father',
            hobbies: ['Magic', 'Powerwalking', 'Technology'],
        },
        {
            firstName: 'Claire',
            profession: 'Homemaker',
            age: 40,
            familyRole: 'Mother',
            hobbies: ['Running', 'Concerts', 'Reading'],
        },
        {
            firstName: 'Alex',
            profession: 'Student',
            age: 16,
            familyRole: 'Daughter',
            hobbies: ['Math', 'Cello', 'Texting'],
        }
    ]
}

//2
console.log("Question 2:")
myFamily.familyMembers[2].gradeLevel = 5
console.log(myFamily.familyMembers[2].gradeLevel)

//3
console.log("Question 3:")
myFamily.familyMembers[0].hobbies.push('Music')
console.log(myFamily.familyMembers[0].hobbies)

//4
console.log("Question 4:")
myFamily.familyMembers[1].hobbies.pop()
console.log(myFamily.familyMembers[1].hobbies)

//5
console.log("Question 5:")
myFamily.familyMembers[2].hobbies.sort()
console.log(myFamily.familyMembers[2].hobbies)

//6
console.log("Question 6:")
myFamily['zip code'] = 68124
console.log(myFamily['zip code'])

//7
console.log("Question 7:")
console.log(Object.keys(myFamily))

//8
console.log("Question 8:")
delete myFamily.state
console.log(myFamily)

//9
console.log("Question 9:")
myFamily['zip code'] = 68134
console.log(myFamily['zip code'])

//10
console.log("Question 10:")
let testArray = [2, 9, 7, 6, 8, 4, 3, 5, 1]
let firstNArray = function (inputArray, n) {
    newArray = []
    for (i = 0; i < n && i < inputArray.length; i++) {
        newArray.push(inputArray[i])
    }
    return newArray
}
console.log(firstNArray(testArray, 1))
console.log(firstNArray(testArray, 3))
console.log(firstNArray(testArray, 4))
// console.log(firstNArray(testArray, 12))

//11
console.log("Question 11:")
testArray.shift()
console.log(testArray)

//12
console.log("Question 12:")
let namesArray = ["Bill", "John", "Jackson", "Derrick", "Brad", "Walter", "Kevin", "Lance"]
let lastNArray = function (inputArray, n) {
    newArray = []
    for (i = 0; i < n && i < inputArray.length; i++) {
        newArray.push(inputArray[inputArray.length - 1 - i])
    }
    return newArray
}
console.log(lastNArray(namesArray, 1))
console.log(lastNArray(namesArray, 3))
console.log(lastNArray(namesArray, 4))
// console.log(lastNArray(namesArray, 8))
// console.log(lastNArray(namesArray, 9))
// console.log(lastNArray(namesArray, 12))

//13
console.log("Question 13:")
namesArray.unshift("Alan")
console.log(namesArray)

//14
console.log("Question 14:")
let secretLetter = "R"
let userInput = ""
while (secretLetter != userInput.toUpperCase()) {
    userInput = prompt("Want to play a game? Please guess my secret letter")
    if (secretLetter == userInput.toUpperCase()) {
        console.log("Correct, great job!")
    }
    else {
        console.log("Incorrect, please try again")
    }
}