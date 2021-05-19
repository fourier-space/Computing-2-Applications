import fc from "fast-check";

const property = function (description, arbitraries, predicate, options = {}) {
    return it(description, function () {
        fc.assert(fc.property(
            ...arbitraries,
            predicate
        ), options);
    });
};

export default Object.freeze(property);
