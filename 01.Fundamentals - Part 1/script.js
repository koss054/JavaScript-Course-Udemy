// let alertMsg = "Lets learn this language!";
// let isAmazing = "amazing";
// if (isAmazing === "amazing") alert(alertMsg);

// let sum = 10 + 20 + 30 + 50;
// console.log(sum);

// ********************
// Coding CHallenge #1
// ********************
function isFirstBMIHigher(firstBMI, secondBMI) {
    return firstBMI > secondBMI;
}

function calculateBMI(mass, height) {
    return (mass / height ** 2).toFixed(1);
}

// Test Data 1
let markMass = 78;
let markHeight = 1.69;
let markBMI = calculateBMI(markMass, markHeight);

let johnMass = 92;
let johnHeight = 1.95;
let johnBMI = calculateBMI(johnMass, johnHeight);

let firstCheckBMI = isFirstBMIHigher(markBMI, johnBMI);
console.log(firstCheckBMI);
checkMarkAndJohnBMI(firstCheckBMI);

// Test Data 2
markMass = 95;
markHeight = 1.88;
markBMI = calculateBMI(markMass, markHeight);

johnMass = 85;
johnHeight = 1.76;
johnBMI = calculateBMI(johnMass, johnHeight);

let secondCheckBMI = isFirstBMIHigher(markBMI, johnBMI);
console.log(secondCheckBMI);
checkMarkAndJohnBMI(secondCheckBMI);

// ********************
// Coding CHallenge #2
// ********************
function checkMarkAndJohnBMI(isMarkHigher) {
    if (isMarkHigher) {
        console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
    } else {
        console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
    }
}