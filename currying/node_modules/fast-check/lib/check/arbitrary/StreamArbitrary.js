"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.infiniteStream = void 0;
const Stream_1 = require("../../stream/Stream");
const stringify_1 = require("../../utils/stringify");
const symbols_1 = require("../symbols");
const Arbitrary_1 = require("./definition/Arbitrary");
const BiasedArbitraryWrapper_1 = require("./definition/BiasedArbitraryWrapper");
const Shrinkable_1 = require("./definition/Shrinkable");
class StreamArbitrary extends Arbitrary_1.Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng) {
        const g = function* (arb, clonedMrng) {
            while (true)
                yield arb.generate(clonedMrng).value_;
        };
        const producer = () => new Stream_1.Stream(g(this.arb, mrng.clone()));
        const toString = () => `Stream(${[...producer().take(10).map(stringify_1.stringify)].join(',')}...)`;
        const enrichedProducer = () => Object.assign(producer(), { toString, [symbols_1.cloneMethod]: enrichedProducer });
        return new Shrinkable_1.Shrinkable(enrichedProducer());
    }
    withBias(freq) {
        return BiasedArbitraryWrapper_1.biasWrapper(freq, this, () => new StreamArbitrary(this.arb.withBias(freq)));
    }
}
function infiniteStream(arb) {
    return new StreamArbitrary(arb);
}
exports.infiniteStream = infiniteStream;
