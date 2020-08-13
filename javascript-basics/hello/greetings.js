// write a function that will send greeting of given name
// For example, if you call the function with the name "Bob",
// it should return "Hello Bob!".
// If no argument is passed, it shall return "Hello there!"

const greeting = function (name) {
    return "This should return the name";
};

export default Object.freeze(greeting);

// top tips: String Concatenation
// With the `+` operator, you can join two strings together
// "A" + "B" => "AB"
// Use double quotes "", not single quotes as a good practice