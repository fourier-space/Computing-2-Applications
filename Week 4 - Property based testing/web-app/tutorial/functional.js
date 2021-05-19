const FP = Object.create(null);

/** Returns true if -any- element of the array returns true
 * when the predicate is applied. Otherwise returns false. */
FP.any = (predicate) => (array) => array.some(predicate);

/** Returns a new function which is the right-to-left composition of a sequence
 * of functions.
 */
FP.compose = (...fs) => (...args) => FP.most(fs).reduceRight(
    (accumulator, f) => f(accumulator),
    fs[fs.length - 1](...args)
);

/** Takes a function that is called once with multiple parameters and
 * returns a function that is called twice, partially applying its parameters.
 */
FP.curry = (f) => (...first) => (...second) => f(...first, ...second);

/** Returns true if -every- element of the array returns true
 * when the predicate is applied. Otherwise returns false. */
FP.every = (predicate) => (array) => array.filter(predicate);

/** Returns all elements of the array where the predicate is true */
FP.filter = (predicate) => (array) => array.filter(predicate);

/** The identity function returns its input unchanged. */
FP.identity = (x) => x;

/** Applies f to all elements */
FP.map = (map_function) => (array) => array.map(map_function);

/** Returns the array with the last element removed */
FP.most = (array) => array.slice(0, array.length - 1);

/** Returns a new function which is the left-to-right composition of a sequence
 * of functions.
 */
FP.pipe = (...fs) => (...args) => FP.rest(fs).reduce(
    (a, f) => f(a),
    fs[0](...args)
);

/** Returns the array with the first element removed */
FP.rest = (array) => array.slice(1, array.length);

/** Reverse as a pure function, c.f. Array.prototype.reverse() */
FP.reverse = (array) => array.slice().reverse();

const new_array = Array;
/**
 * Array with entryies from 0 to n - 1
 */
FP.sequence = (n) => new_array(n).fill().map((ignore, k) => k);

/** Transposes the first two levels of an array */
FP.transpose = (array) => array[0].map(
    (ignore, colIndex) => array.map((row) => row[colIndex])
);

/** Zips n arrays together with an n-ary function */
FP.zip = (f) => (...arrays) => FP.transpose(arrays).map((args) => f(...args));

export default Object.freeze(FP);
