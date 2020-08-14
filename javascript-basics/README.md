# Welcome to JavaScript Basics

## Learning Objectives

In this tutorial, you will learn:
+ The basic synax (grammer) of JavaScript
+ Understand JavaScript data types: `Number`, `String`, `Boolean`, `Object`, `Function`, and others

## Pre-requisite
This tutorial guide assumes you have the following pre-requisite:
+ A general understanding of the Internet and the Web
+ Some programming experience and understanding.
+ Installed [Node.js] and know how to do `npm init` and `npm install` to install node module packages
+ Managed to follow the [environment set-up and configuration].

## Instructions
1. Clone this repository to your own workspace.
2. Open the repository in your IDE (I used Visual Studio Code by default).
3. Follow this README file to complete the instruction.

## JavaScript in a Glance

> JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape. JavaScript was first released with Netscape 2 early in 1996. It was originally going to be called LiveScript, but it was renamed in an ill-fated marketing decision that attempted to capitalize on the popularity of Sun Microsystem's Java language — despite the two having very little in common.

> JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes, instead of classes. JavaScript also supports functional programming — because functions are objects that can be stored in variables and passed around like any other object.

More information can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript). 

*********************************

## Hello World

Just like `print()` in Python, `console.log()` will send output in the debug console.

Try to play with it and create your first JS program:

```javascript
console.log("hello World");
```
Now let's open the `hello.js` file inside the folder `hello`, complete the programme and run it in your debug console.

***Step 1:Go to your hello.js file. Press Fn+F5 or go to > Run > Start Debugging***
![You can press Fn+F5 or go to > Run > Start Debugging](./img/start-debugging-vscode.png | width=300)

***Step 2: Choose to debug on Node.js***
![Choose to debug on Node.js](img/debug-on-node-js.png || width=300)

***Step 3(result): The debug console displays the filler codes (you could also choose to create a launch.json file.)***
![Find your result in the debug console](img/console-results.png)

***************************
Great job! Let's continue by investigating different data types in JavaScript.

## Operators

Here are the basic arithmetic operators, for example:

|Operator |	Name          | Example | Result
|----------------| ----------------- | ---------------- | ----------------
|+        |	Addition      |	6 + 9  | 15 
|-        |	Subtraction	  | 20 - 15 | 5
|*        |	Multiplication| 3 * 7 | 21
|/        |	Division      | 10 / 5 | 2


You can find a more complete list of JavaScript operators and their usage <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators" target="_blank">on MDN web docs</a>.


## Number

The JavaScript `Number` type is a **double-precision 64-bit binary format IEEE 754 value**, like `double` in Java or C#.
A Number only keeps about **17 decimal places** of precision; arithmetic is subject to rounding. The largest value a Number can hold is about 1.8×10^308. Numbers beyond that are replaced with the special Number constant `Infinity`.

Try it yourself in Node.js terminal:
```javascript
123 === 123.0; // true
123 === "123"; // false
123 === Number("123"); //true
Number("onetwothree"); // NaN
Number(undefined); // NaN
1 / 0; // Infinity
-1 / 0; // -Infinity

// here's the tricky thing
0.1 + 0.2 == 0.3; // false (what?)
0.1 + 0.2 == 0.30000000000000004; // true. Surprise!
```

The built-in `parseInt()` function allows you to convert a string to an integer,taking the base for the conversion as an optional second argument (and you should always provide that).

```javascript
parseInt("2333", 10); // 2333
parseInt("010", 10); // 10
parseInt("010", 2); // 2
```

You may noticed eariler that, a special value called `NaN` (short for "Not a Number") is returned if the string is non-numeric：
```javascript
parseInt("zeroonezero", 10); // NaN
Math.sin("0"); // 0
Math.sin("pi"); // NaN
```
And `NaN` is toxic - if you provide it as an operand to any math operation, the result will also be `NaN`.
You can test for `NaN` with the built-in `isNaN()` function：

```javascript
NaN + 10; // NaN
isNaN(NaN*10); // true
isNan(Infinity*10); // true

```

## String
Strings in JavaScript are sequences of Unicode characters (specifically UTF-16 code units).
You can find the length of a string by accessing its `length` property:

```javascript
"hello".length; // 5
``` 
Note that `String` is an `Object`; they have methods that allow you to manipulate the string and access information about the string: 
```javascript
"hello".charAt(0); // "h"
"hello".slice(1,2); // "e"
"hello, world".replace("world", "earth"); // "hello, earth"
"hello".toUpperCase(); // "HELLO"
```

## Boolean
JavaScript has a boolean type, with possible values `true` and `false` (both of which are keywords.) Any value can be converted to a boolean according to the following rules:

1. `false`, `0`, empty strings (`""`), `NaN`, `null`, and `undefined` all become false.
2. All other values become true. 

## Other types

We also have `null`, which is a value that indicates **a deliberate non-value** (and is only accessible through the `null` keyword).
JavaScript distinguishes `null` from `undefined`, which is a value of type `undefined` that indicates an uninitialized variable (no value has been assigned yet).
```javascript
let a, b;
a = null;
console.log(a,b); // null undefined
```

## Variables
New variables in JavaScript are declared using one of three keywords: `let`, `const`, or `var`.
`const` stands for constant. In many sources it is interpreted as declaring a variable that is **immutable**. What it actually does is preventing any re-assignment to existing variables.
`let` 
In short, a Golden Rule of Thump is:
1. Always use `const` to declare a variable wherever possible.
2. If your variable values need to be changed, e.g. it counts in a loop, use `let`.
3. Stop using `var` to prevent undesirable mishaps (overwriting).

In most resources you have encountered, `var` is widely used. This is because `let` and `const` is a later feature in ES6.
From now on, you should remember the Golden Rule when declaring variables in your programme. 

## Object

JavaScript objects can be thought of as simple collections of **name-value pairs**.
There are two ways to create an empty object:
```javascript
const obj = new Object();
const obj2 = {}; // preferred
```

These are semantically equivalent; the second is called **object literal syntax** and is **more convenient**. This syntax is also the core of JSON format (we will talk about JSON some other time) and should be preferred at all times.

```javascript
const fruit = {
    name: "banana",
    price: "$10",
    details:{
        colour: "yellow",
        size: 10
    }
};

```

You can assess the attribute by:
```javascript
fruit.name; // "banana"
fruit.detail.colour; // "yellow"
fruit["details"]["size"]; // 10
```

## Array

Arrays in JavaScript is a special type of object but it has a magic property called `length`, which makes them convenient for data manipulation. We can use the array literal to declare an array:
```javascript
const arr = ["a", "b", "c", 1, 2, 3];
arr.length; // 6
arr[100] = "hi";
arr.length; // 101
arr[90]; // undefined
```
Note from the above example, the length of an array is one more than its highest index.

Array objects have methods. For example:
```javascript
const a = [1, 2, 3, 4, 4];
arr.push(5); // Appends items to the end of the array.
const str = arr.toSring()// Returns a string with the toString() of each element separated by commas.
arr.pop(); // Removes and returns the last item.
arr.length; // make a guess?


```

See also the [full documentation for array methods.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Function
JavaScript `Function` is a first class object (just as Array, Number, and Object), which can be assigned to variables and passed around. Here is a basic function:
```javascript
function add(x, y) {
    const total = x + y; // this variable is local to this function
    return total; // you must have the semicolon after the returned value
}
```

> A JavaScript function can take 0 or more named parameters. The function body can contain as many statements as you like and can declare its own variables which are local to that function. The return statement can be used to return a value at any time, terminating the function. If no return statement is used (or an empty return with no value), JavaScript returns `undefined`.



