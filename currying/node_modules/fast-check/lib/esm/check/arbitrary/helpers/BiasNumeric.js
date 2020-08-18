export function biasNumeric(min, max, Ctor, logLike) {
    if (min === max) {
        return new Ctor(min, max);
    }
    if (min < 0) {
        return max > 0
            ? new Ctor(-logLike(-min), logLike(max))
            : new Ctor((max - logLike((max - min))), max);
    }
    return new Ctor(min, min + logLike((max - min)));
}
