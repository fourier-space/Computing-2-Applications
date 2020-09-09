# Recursion - Tutorial
A recursive function is a function that calls itself (either directly or indirectly).
This is a very powerful programming technique in which a problem will be divided into
a set of similar subproblems, each solved with a trival solution.

## Thinking in Two Different Ways

let’s write a function `power(x, n)` that raises `x` to a natural power of `n`. In other words, multiplies `x` by itself `n` times.

```javascript
power(2, 2) // = 4
power(2, 3) // = 8
power(2, 4) // = 16
```
There are two ways to implement it:

1. **Iterative thinking**: the `for` loop;

```javascript
function power(x, n) {
  let result = 1;

  // multiply result by x n times in the loop
  for (let i = 0; i < n; i++) {
    result *= x;
  }

  return result;
}
```

2. ***Recursive thinking***: simplify the task and call self:

```javascript
function power(x, n) {
  if (n == 1) {
    return x;
  } else {
    return x * power(x, n - 1);
  }
}
```
When `power(x,n)` is called, the execution will split into two branches:
1. when `n == 1`, when it is trival that `power(x,1) = 1`. This is called a ***base step*** of recursion.
2. in other case, we represent `power(x, n)` as `x * power(x, n-1)`. This is called a ***recursive step***. In other words, `power` calls itself ***recursively*** until the base step is reached.

> Credited to [this tutorial](https://javascript.info/recursion).


## Challenge
Let's jump into the puzzle of the famous Towers of Hanoi:
> The Tower consists of three rods and a number of disks of different sizes, which can slide onto any rod. 
![tower of hanoi](.\recursion\img)


