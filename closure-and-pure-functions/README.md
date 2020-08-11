# Closure and Pure functions

## Objectives

## Content

### Closure

### Pure Function

> A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

```javascript
let arr = [1, 2, 3, 4, 5];

// pure
arr.slice(0, 3);
//=> [1, 2, 3]

arr.slice(0, 3);
//=> [1, 2, 3]

arr.slice(0, 3);
//=> [1, 2, 3]


// impure
arr.splice(0, 3);
//=> [1, 2, 3]

arr.splice(0, 3);
//=> [4, 5]

arr.splice(0, 3);
//=> []

//Note: => means 'return'

```

As you have observed that, `splice` would change our variable `arr`, in other words, it *mutates* the data. This is what we call *observable side effect*. In functional programming, we strive to create functions that are reliable, returning the same result given the same input every time. Therefore, although `splice` is very powerful in many cases, be careful of its data mutation side effect.


Let's take a look at another example (adapted from https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch3.html#oh-to-be-pure-again)

```javascript
// We would like to create a function that check whether the give age
// is legal to drink in the specific country

// impure
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

```


You may wonder why the impure function is indeed *impure*, as you would believe that you initialised a constant object legalDrinkingAge, and both `checkAge1` and `checkAge2` return the same expected results whatsoever.

Well, try running the following codes and you might be surprised that the impure function actually depends on the system state, and is subjected to factors external to input.

```javascript
// following the the example above

legalDrinkingAge.UK = 15; // if we mutate the key value in the object

console.log(checkAge1("UK", 15)); // => true ?!!
console.log(checkAge2("UK", 15)); // false
```
This shows that `checkAge1` is indeed impure if the external environment changes.

## Tutorial Activities

## Exercises