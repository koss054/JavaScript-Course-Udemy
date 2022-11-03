// Assignment - Values and Variables
const country = "Bulgaria";
const continent = "Europe";
let population = 7000000;

console.log(country);
console.log(continent);
console.log(population);

// Assignment - Data Types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof language);

// Assignment - let, const, var
language = "Bulgarian";

// Assignment - Basic Operators
const countryHalfPopulation = population / 2;
console.log(countryHalfPopulation);

population++;
console.log(population);

const finlandPopulation = 6000000;
console.log(population > finlandPopulation);

const averageCountryPopulation = 33000000;
console.log(population > averageCountryPopulation);

let description =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;
console.log(description);

// Assignment - Strings and Template Literal
description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Assignment - Taking Decisions: if / else Statements
function isCountryPopulationAboveAverage(population, averageCountryPopulation, country) {
  if (population > averageCountryPopulation)  {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(`${country}'s population is ${averageCountryPopulation - population} million below average`);
  }
}

isCountryPopulationAboveAverage(population, averageCountryPopulation, country);

let populationBeforeTempChange = population;

population = 13000000;
isCountryPopulationAboveAverage(population, averageCountryPopulation, country);

population = 130000000;
isCountryPopulationAboveAverage(population, averageCountryPopulation, country);

population = populationBeforeTempChange;

// Assignment - Type Conversion and Coercion          *guessing the output
console.log('9' - '5');                               //4
console.log('19' - '13' + '17');                      //617
console.log('19' - '13' + 17);                        //23
console.log('123' < 57);                              //false
console.log(5 + 6 + '4' + 9 - 4 - 2);                 //1143

// Assignment - Equality Operators
let numNeighbours = Number(prompt("How many neighbour countries does your country have?"));

if (numNeighbours === 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border.");
} else {
  console.log("No borders.");
}

// Assignment - Logical Operators
if (language === "English" && population < 50000000 && !isIsland) {
  console.log(`You should live in ${country} :D`);
} else {
  console.log(`${country} does not meet your criteria D:`);
}