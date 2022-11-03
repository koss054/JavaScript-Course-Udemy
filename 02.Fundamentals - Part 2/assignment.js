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

function percentageOfWorld1(population, countryName) {
    const populationPercentage = ((population / worldPopulation) * 100).toFixed(1);
    const populationForString = population / 1_000_000;
    return `${countryName} has ${populationForString} million people, so it's about ${populationPercentage}% of the world population`;
}

const china = percentageOfWorld1(1_441_000_000, "China");
const brazil = percentageOfWorld1(212_000_000, "Brazil");
const portugal = percentageOfWorld1(10_000_000, "Portugal");

console.log(china);
console.log(brazil);
console.log(portugal);