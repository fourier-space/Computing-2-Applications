// This is an example of closure - inner function could
// get access to variables outside, but not vice versa.

const x = "declared outside function";

exampleFunction();

function exampleFunction() {
    const y = "declared within function";
    console.log("Inside function");
    console.log(x);
    console.log(y);
}

console.log("Outside function");
console.log(x); // => "declared outside function"
console.log(y); // => error