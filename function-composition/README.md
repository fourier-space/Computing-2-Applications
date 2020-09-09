# Function Composition

## Refresher: Composite Functions - Grade 9 Math
In Math, you may encounter something like ` y= ln(sin(x))`. 
This is actually a composite function, and in general, it's an operation taking two functions `f` and `g`, and produce a function `h` such that `h(x) = g(f(x))`. `h` is a higher-order function.

> Higher-order functions are functions that take other functions as arguments or return functions as their results.

What's really happening is that function `g` is applied to the result of applying function `f` to `x`. So it works as `h` directly maps the input to the final output.

![Concrete example for function composition](https://commons.wikimedia.org/w/index.php?curid=44553625)
Image By Stephan Kulla (User:Stephan Kulla) - Own work, CC BY-SA 4.0, https://commons.wikimedia.org/w/index.php?curid=44553625

## compose() and pipe() 

Let's look at the example of how higher-order function can be used.

```javascript
const arr = [1, 2, 3, 4, 5];

// we want to add 1 to it, then multiply by 3, and lastly taking the remainder if divided by 7

const add1 = (x) => x + 1;
const multiply3 = (x) => x * 3;
const remainderOf7 = (x) => x % 7;

// we can make composite function

let composite = remainderOf7(multiply3(add1(x)));
```

Even with only three consecutive operations, the code line looks quite verbose, with so many brackets. This could become problematic if the composite becomes more complex.

A convenient solution to this, is through `compose` function, or equivalently, the `pipe` function.
```javascript
const composite1 = compose(remainderOf7, multiply3, add1);

const composite2 = pipe(add1, multiply3, remainderOf7);

// you need to define `compose` and `pipe` first
```

Note that the `pipe` function, as its name suggests, "pipes" the input through a sequence of operations, while `compose` is closer to the mathematical expression.

## Implementation

We assume you understand how `reduce` works in JavaScript.

```javascript
const compose = (...fs) => (args) => fs.reduceRight((arg, fn) => fn(arg), args);

// e.g. 
const composite3 = compose(multiplier3, add1);
// composite3 is a higher-order function
// It will take an input, add 1 to the input first, then multiply by 3

```
What's happening in that one-liner expression?
+ `compose` returns another function, which is a higher order function
+ `compose` can take multiple functions as its argument. The spread operator `...` makes an array of functions as the parameters of `compose`.
+ `reduceRight` is applied to those functions, where the first parameter `arg` is the current argument, second `fn` is the last of the functions passed, and the result is returned for use in the next call. 

This is just the opposite way of reduce, which takes the first. So we can implement `pipe` in a fairly similar way:

```javascript
const pipe = (...fs) => (args) => fs.reduce((arg.fn) => fn(arg),args);
// e.g. 
const composite4 = pipe(add1, multiplier3);
// pipe works from left to right

```

## Implications
Using `compose` and `pipe` in production means we can write functions that does one specific task only, and combine them to achieve a more complex goal. For example, if you are doing a social study on income, and you want to firstly verifty that the data type is of number, secondly to filter outdata with annual income greater than $500,000, then calculate the average, you can write `isNumber`, `filterIncome`, and `average` as separate functions, and `compose` them (or `pipe` them through). It's much easier to debug, isn't it!

With the power of composition, we can unleash the power of functional programming!

## Exercise

Complete the exercise file `grading.js`.