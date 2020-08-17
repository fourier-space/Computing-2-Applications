"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuidV = exports.uuid = void 0;
const IntegerArbitrary_1 = require("./IntegerArbitrary");
const TupleArbitrary_1 = require("./TupleArbitrary");
const padEight = (arb) => arb.map((n) => n.toString(16).padStart(8, '0'));
function uuid() {
    const padded = padEight(IntegerArbitrary_1.nat(0xffffffff));
    const secondPadded = padEight(IntegerArbitrary_1.integer(0x10000000, 0x5fffffff));
    const thirdPadded = padEight(IntegerArbitrary_1.integer(0x80000000, 0xbfffffff));
    return TupleArbitrary_1.tuple(padded, secondPadded, thirdPadded, padded).map((t) => {
        return `${t[0]}-${t[1].substring(4)}-${t[1].substring(0, 4)}-${t[2].substring(0, 4)}-${t[2].substring(4)}${t[3]}`;
    });
}
exports.uuid = uuid;
function uuidV(versionNumber) {
    const padded = padEight(IntegerArbitrary_1.nat(0xffffffff));
    const secondPadded = padEight(IntegerArbitrary_1.nat(0x0fffffff));
    const thirdPadded = padEight(IntegerArbitrary_1.integer(0x80000000, 0xbfffffff));
    return TupleArbitrary_1.tuple(padded, secondPadded, thirdPadded, padded).map((t) => {
        return `${t[0]}-${t[1].substring(4)}-${versionNumber}${t[1].substring(1, 4)}-${t[2].substring(0, 4)}-${t[2].substring(4)}${t[3]}`;
    });
}
exports.uuidV = uuidV;
