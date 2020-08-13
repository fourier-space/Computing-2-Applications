// In this exercise, we will create a Bot
// that will talk to you when called.
// Modify the following code so that:
// when there is not function parameter, returns "What can I help?"
// when the username is given, returns "Hello <username>!"
// when the input is "getWater()", only returns "Water is on the way".

import greeting from "./greetings.js";

const greetingBot = function (name, service) {
    // this function is incomplete but acts as the basics
    // for your start
    console.log("Welcome to the Botty World!");
    console.log(greeting(name));
    console.log(service);
};


const getWater = function () {
    return "Roger that. Water is on the way.";
};

// you can create your own service types to play around

greetingBot();
greetingBot("Amy", getWater());

// Learning point:
// 1. Practice importing modules, and use previously defined functions
// (remember to set type to "module" in the package.json)
//
// 2. Appreciate function as the first class Object
// i.e. function can be stored in variables and passed to function
// calls just like Number and string.
