import { stream } from '../../stream/Stream.js';
import { cloneMethod, hasCloneMethod } from '../symbols.js';
import { Arbitrary } from './definition/Arbitrary.js';
import { Shrinkable } from './definition/Shrinkable.js';
class ConstantArbitrary extends Arbitrary {
    constructor(values) {
        super();
        this.values = values;
    }
    generate(mrng) {
        if (this.values.length === 1)
            return new Shrinkable(this.values[0]);
        const id = mrng.nextInt(0, this.values.length - 1);
        if (id === 0)
            return new Shrinkable(this.values[0]);
        function* g(v) {
            yield new Shrinkable(v);
        }
        return new Shrinkable(this.values[id], () => stream(g(this.values[0])));
    }
}
function constant(value) {
    if (hasCloneMethod(value)) {
        throw new Error('fc.constant does not accept cloneable values, use fc.clonedConstant instead');
    }
    return new ConstantArbitrary([value]);
}
function clonedConstant(value) {
    if (hasCloneMethod(value)) {
        const producer = () => value[cloneMethod]();
        return new ConstantArbitrary([producer]).map((c) => c());
    }
    return new ConstantArbitrary([value]);
}
function constantFrom(...values) {
    if (values.length === 0) {
        throw new Error('fc.constantFrom expects at least one parameter');
    }
    if (values.find((v) => hasCloneMethod(v)) != undefined) {
        throw new Error('fc.constantFrom does not accept cloneable values, not supported for the moment');
    }
    return new ConstantArbitrary([...values]);
}
export { clonedConstant, constant, constantFrom };
