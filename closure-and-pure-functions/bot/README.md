# Welcome to the Exercise on Closure

In this exercise, we would like to introduce to you how to create a module pattern, where closure is applied.
Study the pattern below and try to think about what are the advantages.

```javascript
// This is a example of the module pattern
// where you use closure to create a 'class-like'
// object with its private properties and methods,
// and returns public properties and methods.

const module = function () {
    let privateProperty = "foo";
    function privateMethod(args) {
        // do something
    }

    return {
        publicProperty: "",
        publicMethod: function(args){
            // do something
        },
        privilegedMethod: function(args) {
        // calls private methods to do something on private properties
            privateMethod(args);
        }
    };
}
```

## Exercise

In `bot.js`, a `bot` object is created (we declared it as a `function` so closure could be applied, but functions are essentially objects in JavaScript). 

It has some basic private properties and private methods 'powering' the bot.
It returns public properties and methods that can be accessed by the users (if this is in a game interface). 

Your tasks:
1. In `bot.test.js`, verify the basic functionality of `bot`.
2. Write a private property `travelDistance`, which stores the information of total distance travelled by the bot.
3. Write a private method `removeTarget`, which takes in a `string`, or an `array` of coordinates (e.g. [2, 2, 2]), check whether the target location is stored in the `rescueTargets` property, and delete that target location.
4. Write a public method `nextTarget`, which will return the first key in `rescueTargets`in your debug console.
5. 
6. Write a public method `maintenance`, which returns the total distance travelled since initialisation, and returns `true` when the total distance travelled excceeds `20`.
7. Go wild and add whatever you think is useful.