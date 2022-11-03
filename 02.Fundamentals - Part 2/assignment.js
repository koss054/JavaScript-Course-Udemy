// Assignment - Functions
/* function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const bulgaria = describeCountry("Bulgaria", 7000000, "Sofia");
const romania = describeCountry("Romania", 19000000, "Bucharest");
const germany = describeCountry("Germany", 83000000, "Berlin");

console.log(bulgaria);
console.log(romania);
console.log(germany); */

// Assignment - Function Declarations vs. Expressions
const worldPopulation = 7_900_000_000;

// Function Declaration
function percentageOfWorld1(population, countryName) {
    const populationPercentage = ((population / worldPopulation) * 100).toFixed(1);
    const populationForString = population / 1_000_000;
    return `${countryName} has ${populationForString} million people, so it's about ${populationPercentage}% of the world population`;
}

/*
let china = percentageOfWorld1(1_441_000_000, "China");
let brazil = percentageOfWorld1(212_000_000, "Brazil");
let portugal = percentageOfWorld1(10_000_000, "Portugal");

console.log("Function Declaration")
console.log(china);
console.log(brazil);
console.log(portugal);

// Function Expression
const percentageOfWorld2 = function(population, countryName) {
    const populationPercentage = ((population / worldPopulation) * 100).toFixed(1);
    const populationForString = population / 1_000_000;
    return `${countryName} has ${populationForString} million people, so it's about ${populationPercentage}% of the world population`;
}

china = percentageOfWorld2(1_441_000_000, "China");
brazil = percentageOfWorld2(212_000_000, "Brazil");
portugal = percentageOfWorld2(10_000_000, "Portugal");

console.log("Function Expression");
console.log(china);
console.log(brazil);
console.log(portugal); */

// Assignment - Arrow Functions
/* const percentageOfWorld3 = (population, countryName) => {
    const populationPercentage = ((population / worldPopulation) * 100).toFixed(1);
    const populationForString = population / 1_000_000;
    return `${countryName} has ${populationForString} million people, so it's about ${populationPercentage}% of the world population`;
}

china = percentageOfWorld3(1_441_000_000, "China");
brazil = percentageOfWorld3(212_000_000, "Brazil");
portugal = percentageOfWorld3(10_000_000, "Portugal");

console.log("Arrow Function");
console.log(china);
console.log(brazil);
console.log(portugal); */

// Assignment - Functions Calling Other Functions
function describePopulation(country, population) {
    return percentageOfWorld1(population, country);
}

const bulgaria = describePopulation("Bulgaria", 7_000_000);
const romania = describePopulation("Romania", 19_000_000);
const germany = describePopulation("Germany", 83_000_000);

console.log(bulgaria);
console.log(romania);
console.log(germany); 

// Assignment - Introduction to Arrays
const populations = new Array(7_000_000, 19_000_000, 83_000_000, 212_000_000);
const countries = new Array("Bulgaria", "Romania", "Germany", "Brazil");

console.log(populations.length == 4);

const percentages = new Array(percentageOfWorld1(populations[0], countries[0]),
                              percentageOfWorld1(populations[1], countries[1]),
                              percentageOfWorld1(populations[2], countries[2]),
                              percentageOfWorld1(populations[3], countries[3]));

for (let i = 0; i < percentages.length - 1; i++) {
    console.log(percentages[i]);
}