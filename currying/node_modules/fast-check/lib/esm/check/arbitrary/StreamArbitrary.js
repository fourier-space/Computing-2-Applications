import { Stream } from '../../stream/Stream.js';
import { stringify } from '../../utils/stringify.js';
import { cloneMethod } from '../symbols.js';
import { Arbitrary } from './definition/Arbitrary.js';
import { biasWrapper } from './definition/BiasedArbitraryWrapper.js';
import { Shrinkable } from './definition/Shrinkable.js';
class StreamArbitrary extends Arbitrary {
    constructor(arb) {
        super();
        this.arb = arb;
    }
    generate(mrng) {
        const g = function* (arb, clonedMrng) {
            while (true)
                yield arb.generate(clonedMrng).value_;
        };
        const producer = () => new Stream(g(this.arb, mrng.clone()));
        const toString = () => `Stream(${[...producer().take(10).map(stringify)].join(',')}...)`;
        const enrichedProducer = () => Object.assign(producer(), { toString, [cloneMethod]: enrichedProducer });
        return new Shrinkable(enrichedProducer());
    }
    withBias(freq) {
        return biasWrapper(freq, this, () => new StreamArbitrary(this.arb.withBias(freq)));
    }
}
function infiniteStream(arb) {
    return new StreamArbitrary(arb);
}
export { infiniteStream };
