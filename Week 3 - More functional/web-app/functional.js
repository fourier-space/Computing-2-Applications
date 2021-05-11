
// const add_3 = function (x) {
//     return x + 3;
// };

const curry = function (f) {
    return function (first) {
        return function (second) {
            return f(first, second);
        };
    };
};

const add = function (x, y) {
    return x + y;
};

const add_n = curry(add);

// const add_n = function (n) {
//     return function (x) {
//         return x + n;
//     };
// };

const add_3 = add_n(3);

const twice = function (f) {
    return function (args) {
        return f(f(args));
    };
};



debugger;
