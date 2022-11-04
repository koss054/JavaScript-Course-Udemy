// ********************
// Coding Challenge #1
// ********************
/* const calcAverage = (firstScore, secondScore, thirdScore) => (firstScore + secondScore + thirdScore) / 3;
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`Dolphins win (D: ${avgDolphins} vs. K: ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`Koalas win (K: ${avgKoalas} vs. D: ${avgDolphins})`);
    } else {
        console.log('No team wins.');
    }
}

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);
checkWinner(avgDolphins, avgKoalas);

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas); */

// ********************
// Coding Challenge #2
// ********************
const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
/* const calcTotal = (bills, tips) => {
    let totals = new Array();

    for (let i = 0; i < bills.length; i++) {
        totals.push(Number(bills[i]) + Number(tips[i]));
    }

    return totals;
}

const bills = new Array(125, 555, 44);
const tips = new Array(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
const total = calcTotal(bills, tips);

console.log(`Bills ${bills}`);
console.log(`Tips ${tips}`);
console.log(`Totals ${total}`); */

// ********************
// Dot vs. Bracket Notation Challenge
// ********************
/* const jonas = {
    firstName: "Jonas",
    birthYear: 1991,
    job: "teacher",
    hasDriversLicense: true,
    friends: ["Michael", "Melvin", "Matilda"],

    calcAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age;
    },

    getSummary: function() {
        return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense == true ? 'a' : 'no'} driver's license.`;
    }
};

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`); */

// ********************
// Object Methods Challenge
// ********************
/* jonas.calcAge();
console.log(jonas.getSummary());

jonas.hasDriversLicense = false;
console.log(jonas.getSummary()); */

// ********************
// Coding Challenge #3
// ********************
/* const mark = {
    firstName: "Mark",
    lastName: "Miller",
    mass: 78,
    height: 1.69,

    fullName: function() {
        this.fullName = this.firstName + " " + this.lastName;
        return this.fullName;
    },

    calcBMI: function() {
        this.BMI = (this.mass / this.height ** 2).toFixed(1);
        return this.BMI;
    }
};

const john = {
    firstName: "John",
    lastName: "Smith",
    mass: 92,
    height: 1.95,

    fullName: function() {
        this.fullName = this.firstName + " " + this.lastName;
        return this.fullName;
    },

    calcBMI: function() {
        this.BMI = (this.mass / this.height ** 2).toFixed(1);
        return this.BMI;
    }
};

console.log(mark.calcBMI() > john.calcBMI() 
    ? `${mark.fullName()}'s BMI (${mark.BMI}) is higher than ${john.fullName()}'s (${john.BMI})!`
    : `${john.fullName()}'s BMI (${john.BMI}) is higher than ${mark.fullName()}'s (${mark.BMI})!`); */

// ********************
// Coding Challenge #4
// ********************
const bills = new Array(22, 295, 176, 440, 37, 105, 10, 1100, 86, 52);
const tips = new Array();
const totals = new Array();

for (let i = 0; i < bills.length; i++) {
  const currentTip = Number(calcTip(bills[i]).toFixed(2));
  tips.push(currentTip);
  totals.push(bills[i] + currentTip);
}

console.log(bills);
console.log(tips);
console.log(totals);

// Calculate average of array function
function calcAverage(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += Number(arr[i]);
  }

  return Number(total / arr.length).toFixed(2);
}

console.log(calcAverage(bills));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
