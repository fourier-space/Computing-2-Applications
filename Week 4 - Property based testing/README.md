# Week 4 #
## Monday ##
In the first half of this week, we will explore Property Based Testing (PBT),
which is a form of unit testing.
We will use two frameworks to assist us in this.
The first one is *mocha*, a unit testing framework,
which also integrates nicely with vscode.
And building on top of this, we will use *fast-check*
which allows us to write property based tests.

The strategy for writing our programs is to decompose them into separate parts,
a main program, any user interface, and a core of functionality that we provide.
It is the core of functionality that we will be testing.

The tests you will have seen outside this module will have been
example based tests,
where we compare the output of a function when we give it a known input to a
reference value.
If the function under test gives the correct output to the reference inputs,
then we have some confidence that our function is correct.
The more diverse examples that we can test, the more confidence we will have.

However there is a problem here, if we are the same people writing the code
as writing the tests, there may be edge cases that we haven't considered
and inputs for which the function does not perform as expected,
these may be difficult to find, only occur in special circumstances,
or represent an input or pathway that we have not considered.

This is where property based testing comes in handy.
The PBT framework, in this case fast-check, can generate lots of input examples
for us that we can run through our functions,
and this represents more test cases that we could code by hand,
and a diverse set of inputs, including edge cases
(negative numbers, empty strings, special characters, etc.)
that we may not have considered ourselves.

The catch, however, is that we can't easily generate input-output pairs
as we would do in example based testing, since we run the risk of
re-implementing our function in the tests and re-introducing all the bugs we
missed in the code.

So the alternative is properties. Can we think of statements that hold true for
the function and its output.
In the best case scenario,
our properties entirely determine the required behaviour of our function,
and can even be used to specify what our function should do.
However thinking about properties for the first time can take a while to get
used to.

### Exercises ###
I always find the way that properties are defined in test files can be a bit clunky.
```
describe("Heading for a unit under test", function () {

    it("Description of an expectation or property", function () {

        fc.assert(fc.property(
            fc.array(fc.string), // What kind of input arguments are expected.
            function (input) {
                // ...
                return true; // or false – on success or failure.
            }
        ));

    })

});
```
I like to define a function like in `property.js`,
```
const property = function (description, arbitraries, predicate, options = {}) {
    return it(description, function () {
        fc.assert(fc.property(
            ...arbitraries,
            predicate
        ), options);
    });
};
```
which cuts down on a bit of the noise.
This way you can write your tests as:
```
import property from "./property.js";

describe("Heading for a unit under test", function () {

    property(
        "Description of an expectation or property",
        [ // What kind of input arguments are expected.
            fc.array(fc.string)
        ],
        function (input) {
            // ...
            return true; // or false – on success or failure.
        }
    );

});
```
Which I think is a bit better, but with the warning that it's non-standard.
Feel free to use this form in your own code.
We'll use this form in this exercise.

#### Deck of cards ####
In the folder `web-app/tutorial` you will find a file `deck.js`
and a test file `tests/deck.test.js`.
This represents a deck of cards and some of the operations you can perform on it.

This example is going to focus on the
[Faro Shuffle](https://en.wikipedia.org/wiki/Faro_shuffle)
Particularly the *out-shuffle*.
This is when you take a deck of cards,
cut them down the middle and riffle the two piles perfectly into each other
with cards alternating from each half of the deck.
[See this Matt Parker video – timestamped.](https://youtu.be/s9-b-QJZdVA?t=475)

E.g if we had a deck
`[A♡ 2♡ 3♡ 4♡ 5♢ 6♢ 7♢ 8♢]`, then the Faro out-shuffle would always return
`[A♡ 5♢ 2♡ 6♢ 3♡ 7♢ 4♡ 8♢]`.
Here the top card and bottom card are unchanged in the out-shuffle.

Initially the shuffle is implemented wrongly as just returning the original deck unshuffled.
This passes two of the provided tests, but fails the third.
**Implement `Deck.faro-out-shuffle` such that it passes all the tests.**

In principle, the tests provided don't fully lock down the behaviour of an out-shuffle.
**See if you can write a malicious version of `Deck.faro-out-shuffle` that passes all the tests, but gives an incorrect result.**

In principle, we can write a test to lock this method down fully.
There is a relationship between the position of all cards in the original and shuffled decks.
See if you can think what this is.
**Write a new test which encodes this relationship. Show that only your good implementation of `Deck.faro-out-shuffle` passes this test.**

Next, we can consider the Faro in-shuffle, where the top card ends up one-in,
E.g if we had a deck
`[A♡ 2♡ 3♡ 4♡ 5♢ 6♢ 7♢ 8♢]`, then the Faro **in**-shuffle would always return
`[5♢ A♡ 6♢ 2♡ 7♢ 3♡ 8♢ 4♡]`.
**Write a new set of tests for a `Deck.faro-in-shuffle` based on your out-shuffle tests.**
**See if you can write the tests before the code for in-shuffle.**

Finally, see what other operations you can do with a deck of cards,
and what tests you can write for them.

### Further Reading ###
I have included solutions to the week 1 exercises.
Have a look at the tests, see if you can work out what they are doing.

The fastcheck documentation is also a good reference once you get the hang of things
https://github.com/dubzzz/fast-check

Not javascript, but the next video gives some good insights how to construct tests.
[The lazy programmer's guide to writing thousands of tests - Scott Wlaschin](https://www.youtube.com/watch?v=IYzDFHx6QPY)

