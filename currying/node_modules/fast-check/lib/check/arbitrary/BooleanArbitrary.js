"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.boolean = void 0;
const IntegerArbitrary_1 = require("./IntegerArbitrary");
function boolean() {
    return IntegerArbitrary_1.integer(0, 1)
        .map((v) => v === 1)
        .noBias();
}
exports.boolean = boolean;
