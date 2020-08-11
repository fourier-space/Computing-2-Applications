# Closure and Pure functions

## Objectives

## Content

### Scope

### Closure

#### Examples

Let's look at the following interesting example, a `makeAdder` function:
```javascript
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2));  // 7
console.log(add10(2)); // 12
```
In this example, we have defined a function `makeAdder(x)`, that takes a single argument `x`, and **returns a new function**. The function it returns takes a single argument `y`, and returns the sum of `x` and `y`.
In essence, `makeAdder` is a **function factory**. It creates functions that can **add a specific value to their argument**. In the above example, the function factory creates two new functions — one that adds 5 to its argument, and one that adds 10.
`add5` and `add10` are both closures. They share the **same function body definition**, but **store different lexical environments**. In `add5`'s lexical environment, `x` is `5`, while in the lexical environment for `add10`, `x` is `10`.


### Pure Function

#### Definition
A pure function is a function that, given the same input, will always return the same output and does not have any observable side effect.

#### Examples
Let's take `slice` and `splice`. `slice` is pure because it returns the same output per input every time, guaranteed. `splice` will chew up its array and spit it back out forever changed which is an **observable effect**.

```javascript
const arr = [1, 2, 3, 4, 5];

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

As you have observed that, `splice` would change our variable `arr`, in other words, it ***mutates*** the data. In functional programming, we strive to create functions that are reliable, returning the same result given the same input every time. Therefore, although `splice` is very powerful in many cases, be careful of its data mutation side effect.


Let's take a look at another example.
 (adapted from https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch3.html#oh-to-be-pure-again)

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
This shows that `checkAge1` is indeed impure - if the external environment changes, its output varies given the same inputs.

#### Some more side effects
Side effects may include, but are not limited to

* changing the file system
* inserting a record into a database
* making an http call
* mutations
* printing to the screen / logging
* obtaining user input
* querying the DOM
* accessing system state
* ...

From the Most Adequete Guide to JavaScript:
> Any interaction with the world outside of a function is a side effect. 
> The philosophy of functional programming postulates that side effects are a primary cause of incorrect behavior.

#### Benefits of Pure Functions
* Cacheable
* Portable / Self-Documenting
* Testable
* Reasonable 
* Parallel Code
More details could be found at https://drboolean.gitbooks.io/mostly-adequate-guide-old/content/ch3.html#the-case-for-purity


## Tutorial Activities

## Exercises