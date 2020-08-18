"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.falsy = void 0;
const ConstantArbitrary_1 = require("./ConstantArbitrary");
function falsy(constraints) {
    if (!constraints || !constraints.withBigInt)
        return ConstantArbitrary_1.constantFrom(false, null, undefined, 0, '', NaN);
    else
        return ConstantArbitrary_1.constantFrom(false, null, undefined, 0, '', NaN, BigInt(0));
}
exports.falsy = falsy;
