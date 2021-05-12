# Week 3 #

## Monday ##
In this session we looked at coding the 2048 game.
We made a program to run in `server.js`
and a library, `game_2048.js` which provided functions
that will operate on a 2048 board.

Here we approached the problem using a *functional programming* style
where we decomposed a problem into a set of slightly easiser problems
that we can combine together.
This was both a strategy for solving the problem itself and writing code for it.

This approach brought a number of advantages:
1. Our code is more robust, since it is agnostic to implementation details – we care that we have a function that does what we want it to do, not how it does it.
1. Our solution was built out of *pure* functions – there was no internal state to them, so we can be confident that they will always provide the same output for the same input.
1. The code should be more readable, and communicate intention better. It allows us to be clearer explaining how the code works, and allowing a user to go deeper if they want to know at a lower level what is going on, but not presenting that at the top level.
1. It provided us with a way of thinking about approaching the problem.

The last two points may take a bit of practice for them to ring true.
But by engaging in this style we'll learn a new way of thinking about coding,
which should be of use even when coding in other languages.

### Task ###
In class we never implemented `up` or `down`.
As a task, see if you can implement this yourself.

As a hint, it's going to be a similar strategy to `right` where we
did an operation to the board,
then applied a `left` move,
then did another operation afterwards.
What matrix operation swaps vertical and horizontal?
Try to implement it – this one is a little tricky, so don't worry if you get stuck.

## Tuesday ##
In this session we are going to go a little deeper into functional programming
and look at functions that take and return other functions.
We've seen functions that take other functions as arguments, i.e. `map`, `filter`
etc.

Next we look at functions that return functions.
We will see that this can provide a toolkit for making more expressive programs
in the functional style. E.g. if we use `compose` to solve some of the 2048 problems.

## Tutorial Tasks ##
### Recursion ###
One of the strategies we used was *recursion*, where a function calls itself.
This works by defining a base case that the function can return an answer for,
and then saying the general case can be provided in terms of a more simple case,
such that eventually we reduce to the base case.

In the Q&A the example we used was the `factorial` function.
The base case here was `factorial(0) = 1`,
and the general case is `factorial(n) = n * factorial(n - 1)`.

**Re-implement this yourself and check the results agree with what you expect.**

Another function that can be used to demonstrate recursion is the
[Fibonacci numbers](https://en.wikipedia.org/wiki/Fibonacci_number).

i.e. `0  1  1  2  3  5  8  13  21  …`

Which have the property that the next number in the sequence is
the sum of the previous two.

I.e. `fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)`
with base cases `fibonacci(0) = 0`, `fibonacci(1) = 1`.

**Implement this yourself and see if you can match the correct answers.**

A related sequence is the
[Lucas numbers](https://en.wikipedia.org/wiki/Lucas_number).
These have the same recursion rule, but the base cases are different.
Here `lucas(0) = 2`, and `lucas(1) = 1`.

**Implement these, you should find `lucas(10) = 123`.**

There are a number of such Fibonacci-like sequences,
including the *[Brady Numbers](https://www.youtube.com/watch?v=D8ntDpBm6Ok)*
which were explored on Numberphile.
These have a base case of `b(0) = 2308` and `b(1) = 4261`.

**Write a function that takes the values of the base cases and returns a Fibonacci-like function.**
i.e `b = fibonacci-like(2308, 4261)` returns a function that gives Brady numbers.
Check that `b(10) = 312827`, and `fibonacci-like(2308, 4261)(8) = 119485`.

You should also have that `fibonacci-like(0, 1)`
will return a function equivalent to `fibonacci` and
`fibonacci-like(2, 1)`
will return a function equivalent to `lucas`.

#### Stretch Goal ####
Depending on how you implemented `fibonacci`, it's performance might not be great.
Try caluclating `fibonacci(40)` and see how long it takes.

A more efficient way to implement it is using *tail-recursion*.
If you want to look further, watch
[this computerphile video](https://www.youtube.com/watch?v=_JtPhF8MshA)
and try to implement both `factorial` and `fibonacci` using tail recursion.

### 2048 Game ###
There's more fun to be had with 2048.
If you have written the functions for `up` and `down`,
see if you can implement the following new functions:

1. `new_board = () => board`, this function takes no arguments and returns a new empty board.
1. `score = (board) => number`, write a score function which takes a board and returns the score for that board. 0 tiles score zero, all other numbered tiles score 2**n points.
1. `any_valid_moves = (board) => boolean`, write a function that returns true if there are moves that can be made on the board, and false if there are no more moves left.
1. `free_spaces = (board) => [[number, number]]`, this function returns an array of the indices of all the free spaces (zeros) on the board.
1. `add_tile = (board, indices, value) => board`, return a new board with a tile of `value` placed at `indices`. Make sure this function doesn't edit the old board.
1. **Bonus** `best_move = (board) => move`. Try writing a function that returns a move – one of `up`, `down`, `left`, `right` – that it thinks is the best to play in a particular situation.

### Connect Four ###
We can play other games too.
[Connect Four](https://en.wikipedia.org/wiki/Connect_Four) is one such game.
Try to write a module that implements this.

You may wish to implement the following functions
1. `new_board = () => board`, this function takes no arguments and returns a new empty board.
1. `red_move = (number) => (board) => board`, this curried function takes a column index in its first call, and a board in its second, and returns a new board which is the current board after red has played a token in the specified column.
1. `yellow_move = (number) => (board) => board`, same as `red_move`, but for the yellow player.
1. `status = (board) => string`, this takes a board and return's one of the following strings depending on the current state of the board: `"red to move"`, `"yellow to move"`, `"red win"`, `"yellow win"`, `"draw"`.
1. `is_column_free = (number) => (board) => boolean`. Curried function that takes a column index and then a board and returns if there are any free spaces in that column.
1. **Bonus** `best_move = (board) => number`. Try writing a function that returns a column index that it thinks is the best to play in a particular situation.

### Array Functions ###
Array functions can be really powerful in functional programming.
However the javascript api that is provided isn't always clear
which of its functions are *pure functions* that are good to use for *FP*.

It will be useful to build up your own toolkit of functions that work on arrays.

Make a new file `list.js` that exports an object `List` that defines the following
functions in its interface.

I'll provide two to start,
1. `sequence = (number) => array`. Returns a new array with entries from `0` to `n-1`.
1. `transpose = (array) => array`. Transposes a 2×2 array (swaps rows and columns).

See if you can write the following:
1. `range = (start, end, step) => array`. Returns an array with equally spaced entries starting at `start` and ending at `end` (exclusive) in steps of `step`. i.e. `range(2, 5, 0.5) = [2, 2.5, 3, 3.5, 4, 4.5]`.
1. Write curried versions of `map`, `includes`, `filter`, `every`, `some`, `flat_map` – i.e. for map, write a function with the signature `map = (function) => (array) => array`, that on its first call takes a function, and on its second takes an array and returns that function mapped to the array.
1. write `reject = (function) => (array) => array`, which is the oposite of `filter`, e.g. removes all values for which the function returns `true`.
1. write `first = (array) => element` that returns the first element of the array, also write `last`
1. `rest = (array) => array`, return an array with the first element removed.
1. `most = (array) => array`, return an array with the last element removed.
1. `zip = (function) => (array) => (array) => array`, Zip is a function like `map` but that applies to two arrays. E.g. `zip(g)([a, b, c])([x, y, z])` would return `[g(a, x), g(b, y), g(c, z)]`.

What other useful array functions can be written as pure functions?
i.e. hold no state,
returns the same output for the same input,
has no side-effects, e.g. mutation.

## Further Watching ##
I explore higher order functons a bit more in this
[bonus video](https://imperial.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7ab4fb5c-86ed-4d44-9ba8-ad2401793965)
where I continue the friend list example.

There's a nice video series called
[*Fun fun function*](https://www.youtube.com/watch?v=BMUiFMZr7vk&list=PL0zVEGEvSaeEd9hlmCXrk5yUyqUag-n84)
that you might enjoy.

The following is **optional**, but if you really want to get into functional programming,
this video from Douglas Crockford has some good exercises in it.

* [Fun with functions - Douglas Crockford](https://www.youtube.com/watch?v=Aa_OWn03mDo&list=PLIcJ6p7QvGT09pN6L3qvjkVNrhD3ghlux&index=12)

Be warned – it's long.

## For Next Week ##
Ahead of next week, watch the following video on property based testing in Javascript.
* [The Magic of Generative Testing: Fast-Check in JavaScript - Gabriel Lebeq](https://www.youtube.com/watch?v=a2J_FSkxWKo&list=PLIcJ6p7QvGT09pN6L3qvjkVNrhD3ghlux&index=2)

Finally, the next video is optional, but interesting on writing good tests.
* [Structure and Interpretation of Test Cases - Kevlin Henney](https://www.youtube.com/watch?v=tWn8RA_DEic&list=PLIcJ6p7QvGT09pN6L3qvjkVNrhD3ghlux&index=1)
