// this is an example demonstrating that a variable declared by const
// is not really a `constant`. This is to prevent re-assignment but
// it can be updated.
// Therefore, to eliminate side effects, writing pure functions
// is always a good practice to be kept in mind.


const legalDrinkingAge = {UK: 18, US: 21, China: 18, Greece: 17, Iceland: 20};
const checkAge1 = function (country, age) {
    return age >= legalDrinkingAge[country];
};
console.log(checkAge1("UK", 15)); // => false


// pure
const checkAge2 = function (country, age) {
    const legalAge = {UK: 18, US: 21, China: 18, Greece: 17, Iceland: 20};
    return age >= legalAge[country];
};
console.log(checkAge2("UK", 15)); // => false

legalDrinkingAge.UK = 15;

console.log(checkAge1("UK", 16)); // => true ?!!
console.log(checkAge2("UK", 15)); // false