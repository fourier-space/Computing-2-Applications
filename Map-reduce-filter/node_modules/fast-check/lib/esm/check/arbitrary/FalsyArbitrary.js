import { constantFrom } from './ConstantArbitrary.js';
function falsy(constraints) {
    if (!constraints || !constraints.withBigInt)
        return constantFrom(false, null, undefined, 0, '', NaN);
    else
        return constantFrom(false, null, undefined, 0, '', NaN, BigInt(0));
}
export { falsy };
