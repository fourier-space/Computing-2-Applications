# Array Methods: Map, Reduce, and Filter

Map, reduce, and filter are probably the three most important array methods. They can be used to follow an appropriate functional programming style (substituting loops etc.). This is a short reminder of what you learnt in the lectures:

1. **`Array.prototype.map`:**  It executes that function on every element within it, returning a new array with all of the values that the function returned. It can take up to three parameters in this order: current item (value), index, entire array.

    ```
    const originalArray = [1, 2, 3, 4];
    const newArray = originalArray.map(function (element) {
        return element + 1
    });

    // Expected value of newArray = [2, 3, 4, 5]
    ```
1. **`Array.prototype.reduce`:** This method reduces the array into a single value by passing on a function to carry out. It can pass up to four parameters in this order: `array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`
1. **`Array.prototype.filter`:** Filtering decreases the size of the array to remove elements that are not needed. The syntax is:
     `array.filter(function(currentValue, index, arr), thisValue)`

## Tutorial Questions

For this first set of questions we are going to be creating some functions to deal with colors, specifically arrays in the from [rrr, ggg, bbb] - RGB color codes.
1. **`Color.noRed`:** Under the even numbers function, create a function that takes in an arbitrary array of rgb colors and returns colors with no red in them.
1. **`Color.rgbToHexColor`:** Given an array of three elements with values from 0 to 255, return this rgb to a hex color code in the form `#rrggbb`
1. **`Color.mixColors`:** Givern two RGB array values, return an array that would combine both the colors (you might need to do a bit of research on color theory!)

For the next set of exercises go to the file matrix.js (these functions you are going to create might help you later as modules):

1. **`Matrix.generate`:** Given a single array and the dimensions of a matrix (in the form ("3,2"), generate the matrix.
1. **`Matrix.flatten`:** Given a matrix, generate a flattened version.
1. **`Matrix.flipHorizontal`:** Given a matrix, generate a flattened version.
1. **`Matrix.singleDigitFilter`:** Given an arbitrary matrix filled with numbers, filter each row so that only one digit numbers can be displayed.
1. **`Matrix.findDeterminant`:** Given an arbitrary matrix filled with mumbers, find its determinant and return it.
1. **`Matrix.sumMatrices`:** Given two arbitrary matrices filled with numbers, find their sum.
1. **`Matrix.transpose`:** Given an arbitrary matrix, return its transposed version.




