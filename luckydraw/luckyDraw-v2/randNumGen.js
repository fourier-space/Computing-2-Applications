// This module export a function that takes two boundaries
// and returns a random integer between max and min

const generateRandom = function (max, min) {
    const random = Math.floor(Math.random() * (max - min + 1) + min);
    // if max is 9 , min is 0, results can be [0,9]
    return random;
};

export default Object.freeze(generateRandom);