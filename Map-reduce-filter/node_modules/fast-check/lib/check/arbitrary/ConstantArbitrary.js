"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.constantFrom = exports.constant = exports.clonedConstant = void 0;
const Stream_1 = require("../../stream/Stream");
const symbols_1 = require("../symbols");
const Arbitrary_1 = require("./definition/Arbitrary");
const Shrinkable_1 = require("./definition/Shrinkable");
class ConstantArbitrary extends Arbitrary_1.Arbitrary {
    constructor(values) {
        super();
        this.values = values;
    }
    generate(mrng) {
        if (this.values.length === 1)
            return new Shrinkable_1.Shrinkable(this.values[0]);
        const id = mrng.nextInt(0, this.values.length - 1);
        if (id === 0)
            return new Shrinkable_1.Shrinkable(this.values[0]);
        function* g(v) {
            yield new Shrinkable_1.Shrinkable(v);
        }
        return new Shrinkable_1.Shrinkable(this.values[id], () => Stream_1.stream(g(this.values[0])));
    }
}
function constant(value) {
    if (symbols_1.hasCloneMethod(value)) {
        throw new Error('fc.constant does not accept cloneable values, use fc.clonedConstant instead');
    }
    return new ConstantArbitrary([value]);
}
exports.constant = constant;
function clonedConstant(value) {
    if (symbols_1.hasCloneMethod(value)) {
        const producer = () => value[symbols_1.cloneMethod]();
        return new ConstantArbitrary([producer]).map((c) => c());
    }
    return new ConstantArbitrary([value]);
}
exports.clonedConstant = clonedConstant;
function constantFrom(...values) {
    if (values.length === 0) {
        throw new Error('fc.constantFrom expects at least one parameter');
    }
    if (values.find((v) => symbols_1.hasCloneMethod(v)) != undefined) {
        throw new Error('fc.constantFrom does not accept cloneable values, not supported for the moment');
    }
    return new ConstantArbitrary([...values]);
}
exports.constantFrom = constantFrom;
