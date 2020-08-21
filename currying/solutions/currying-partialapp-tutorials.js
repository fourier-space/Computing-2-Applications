
const partialApply = function (fn, ...args) {
    return fn.bind(null, ...args);
};

const curry = (fn, ...args) => (
    fn.length <= args.length
    ? fn(...args)
    : (...more) => curry(fn, ...args, ...more)
);

export default Object.freeze(partialApply, curry);