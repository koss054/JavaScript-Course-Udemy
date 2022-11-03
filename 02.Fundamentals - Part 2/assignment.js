// Assignment - Functions
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const bulgaria = describeCountry("Bulgaria", 7000000, "Sofia");
const romania = describeCountry("Romania", 19000000, "Bucharest");
const germany = describeCountry("Germany", 83000000, "Berlin");

console.log(bulgaria);
console.log(romania);
console.log(germany);

// Assignment - Function Declarations vs. Expressions
const worldPopulation = 7_900_000_000;

// Function Declaration
function percentageOfWorld1(population, countryName) {
    const populationPercentage = ((population / worldPopulation) * 100).toFixed(1);
    const populationForString = population / 1_000_000;
    return `${countryName} has ${populationForString} million people, so it's about ${populationPercentage}% of the world population`;
}

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
console.log(portugal);

// Assignment - Arrow Functions
const percentageOfWorld3 = (population, countryName) => {
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
console.log(portugal);