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
