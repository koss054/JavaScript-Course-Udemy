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

// ********************
// Coding CHallenge #3
// ********************
function getAverageTeamScore(firstScore, secondScore, thirdScore) {
    return Math.round((firstScore + secondScore + thirdScore) / 3);
}

function dolphinsVersusKoalasResult(dolphinsAverageScore, koalasAverageScore) {
    console.log(`Dolphins: ${dolphinsAverageScore} - Koalas: ${koalasAverageScore}`);
    
    if (dolphinsAverageScore >= 100 || koalasAverageScore >= 100) {
        if (dolphinsAverageScore > koalasAverageScore) {
            console.log("Dolphins win!");
        } else if (dolphinsAverageScore === koalasAverageScore) {
            console.log("It's a draw!");
        } else {
            console.log("Koalas win!");
        }
    } else {
        console.log("No winners - both teams are under 100 points!");
    }
}

let dolphinsFirstScore = 96;
let dolphinsSecondScore = 108;
let dolphinsThirdScore = 89;

let dolphinsAverageScore 
    = getAverageTeamScore(dolphinsFirstScore, dolphinsSecondScore, dolphinsThirdScore);

let koalasFirstScore = 88;
let koalasSecondScore = 91;
let koalasThirdScore = 110;

let koalasAverageScore 
    = getAverageTeamScore(koalasFirstScore, koalasSecondScore, koalasThirdScore);

dolphinsVersusKoalasResult(dolphinsAverageScore, koalasAverageScore);

// Data Bonus 1
dolphinsFirstScore = 97;
dolphinsSecondScore = 112;
dolphinsThirdScore = 101;

dolphinsAverageScore 
    = getAverageTeamScore(dolphinsFirstScore, dolphinsSecondScore, dolphinsThirdScore);

koalasFirstScore = 109;
koalasSecondScore = 95;
koalasThirdScore = 123;

koalasAverageScore 
    = getAverageTeamScore(koalasFirstScore, koalasSecondScore, koalasThirdScore);

dolphinsVersusKoalasResult(dolphinsAverageScore, koalasAverageScore);

// Data Bonus 2
dolphinsFirstScore = 97;
dolphinsSecondScore = 112;
dolphinsThirdScore = 101;

dolphinsAverageScore 
    = getAverageTeamScore(dolphinsFirstScore, dolphinsSecondScore, dolphinsThirdScore);

koalasFirstScore = 109;
koalasSecondScore = 95;
koalasThirdScore = 106;

koalasAverageScore 
    = getAverageTeamScore(koalasFirstScore, koalasSecondScore, koalasThirdScore);

dolphinsVersusKoalasResult(dolphinsAverageScore, koalasAverageScore);


// Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106