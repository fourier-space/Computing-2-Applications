import { integer } from './IntegerArbitrary.js';
function boolean() {
    return integer(0, 1)
        .map((v) => v === 1)
        .noBias();
}
export { boolean };
