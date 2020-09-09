// write a function that will send greeting of given name
// For example, if you call the function with the name "Bob",
// it should return "Hello Bob!".
// If no argument is passed, it shall return "Hello there!"

const greeting = function (name) {
    /**This is function description */
    // you can write your codes here
    return "Replace this with your own codes";
    // return "Hello, " + name + "!";
};

// we then export this as a module so codes outside this
// JS file can import it can use the greetings function
export default Object.freeze(greeting);

 /*
 Top Tips: String Concatenation
 With the `+` operator, you can join two strings together
 "A" + "B" => "AB"
 Use double quotes "", not single quotes as a good practice
 */