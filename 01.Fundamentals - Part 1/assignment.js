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