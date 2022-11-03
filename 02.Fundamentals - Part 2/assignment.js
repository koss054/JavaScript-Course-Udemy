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