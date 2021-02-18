/*
    **** Challenge ****
    
    For this challenge destruture the following object.
*/

const student = {
    name: "Kyle",
    age: 24,
    projects: {
        diceGame: "Two player dice game using JavaScript"
    }
}

const {name, age, projects:{diceGame}} = student

console.log(`Player is ${name} and is ${age} years old and built ${diceGame}`)