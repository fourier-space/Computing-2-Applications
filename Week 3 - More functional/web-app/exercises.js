const exercises = Object.create(null);

let cache = [0, 1];
const fibonacci = function (n) {
    if (cache[n] !== undefined) {
        return cache[n];
    }
    const result = fibonacci(n - 1) + fibonacci(n - 2);
    cache[n] = result;
    return result;
};

const fibonacci_2 = function (n, a, b) {
    if (n === 0) {
        return a;
    } else {
        return fibonacci_2(n - 1, b, a + b);
    }
};


const cat = {"name": "tiddles", "toy": "ball", "fleas": false};


let hedge_toy = "bone";
const encounter_hedge = function (animal) {
    [animal.toy, hedge_toy] = [hedge_toy, animal.toy];
    animal.fleas = true;
};

encounter_hedge(cat)


export default Object.freeze(exercises);
