import { Arbitrary } from './definition/Arbitrary.js';
export class LazyArbitrary extends Arbitrary {
    constructor(name) {
        super();
        this.name = name;
        this.numBiasLevels = 0;
        this.lastBiasedArbitrary = null;
        this.underlying = null;
    }
    generate(mrng) {
        if (!this.underlying) {
            throw new Error(`Lazy arbitrary ${JSON.stringify(this.name)} not correctly initialized`);
        }
        return this.underlying.generate(mrng);
    }
    withBias(freq) {
        if (!this.underlying) {
            throw new Error(`Lazy arbitrary ${JSON.stringify(this.name)} not correctly initialized`);
        }
        if (this.numBiasLevels >= LazyArbitrary.MaxBiasLevels) {
            return this;
        }
        if (this.lastBiasedArbitrary !== null &&
            this.lastBiasedArbitrary.freq === freq &&
            this.lastBiasedArbitrary.arb === this.underlying &&
            this.lastBiasedArbitrary.lvl === this.numBiasLevels) {
            return this.lastBiasedArbitrary.biasedArb;
        }
        ++this.numBiasLevels;
        const biasedArb = this.underlying.withBias(freq);
        --this.numBiasLevels;
        this.lastBiasedArbitrary = {
            arb: this.underlying,
            lvl: this.numBiasLevels,
            freq,
            biasedArb,
        };
        return biasedArb;
    }
}
LazyArbitrary.MaxBiasLevels = 5;
function isLazyArbitrary(arb) {
    return typeof arb === 'object' && arb !== null && Object.prototype.hasOwnProperty.call(arb, 'underlying');
}
export function letrec(builder) {
    const lazyArbs = Object.create(null);
    const tie = (key) => {
        if (!Object.prototype.hasOwnProperty.call(lazyArbs, key))
            lazyArbs[key] = new LazyArbitrary(key);
        return lazyArbs[key];
    };
    const strictArbs = builder(tie);
    for (const key in strictArbs) {
        if (!Object.prototype.hasOwnProperty.call(strictArbs, key)) {
            continue;
        }
        const lazyAtKey = lazyArbs[key];
        const lazyArb = isLazyArbitrary(lazyAtKey) ? lazyAtKey : new LazyArbitrary(key);
        lazyArb.underlying = strictArbs[key];
        lazyArbs[key] = lazyArb;
    }
    return strictArbs;
}
