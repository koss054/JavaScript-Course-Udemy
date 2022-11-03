// let alertMsg = "Lets learn this language!";
// let isAmazing = "amazing";
// if (isAmazing === "amazing") alert(alertMsg);

// let sum = 10 + 20 + 30 + 50;
// console.log(sum);

// ********************
// Coding CHallenge #1
// ********************
function isFirstBMIHigher(firstMass, firstHeight, secondMass, secondHeight) {
    let firstBMI = firstMass / (firstHeight * firstHeight);
    let secondBMI = secondMass / (secondHeight * secondHeight);

    return firstBMI > secondBMI;
}

// Test Data 1
let markMass = 78;
let markHeight = 1.69;
let johnMass = 92;
let johnHeight = 1.95;

let firstCheckBMI = isFirstBMIHigher(markMass, markHeight, johnMass, johnHeight);
console.log(firstCheckBMI);

// Test Data 2
markMass = 95;
markHeight = 1.88;
johnMass = 85;
johnHeight = 1.76;

let secondCheckBMI = isFirstBMIHigher(markMass, markHeight, johnMass, johnHeight);
console.log(secondCheckBMI);

// ********************
// Coding CHallenge #2
// ********************

