# Currying

Currying is a process in functional programming in which we can transform a function with multiple arguments into a sequence of nesting functions. It returns a new function that expects the next argument inline. It is useful because it helps you avoid having to pass the same parameter over and over again and helps you create a higher order function.

## Difference from Partial Application

Partial application is the process of applying a function to only some of its arguments, while currying meants transforming it into a sequence of nesting functions. Here is an example of currying AND partial application.

This is a great example of partial application:
``` javascript
    function add4(a,b,c,d) {
        return a + b + c + d;
    }

    function partialApply(func, a, b) {
        return function(c,d) {
            func(a,b,c,d);
    }

    const add2 = partialApply(add4, 1, 2)
    add2(3,4) // 10

```

This, on the other hand, is what currying looks like:

``` javascript
    function add4(a,b,c,d) {
        return a + b + c + d;
    }

    function curriedAdd4(a) {
        return function(b) {
            return function(c) {
                return function(d){
                    return a + b + c + d;
                }
            }
        }
    }

    const add3 = curriedAdd4(1)
    add3(2)(3)(4) // 10
    curriedAdd4(1)(2)(3)(4) // 10

```

## Tutorial Exercises

For this section of the module, you will only have to complete two functions, one which creates a general of partially applying functions, and another which curries them!

