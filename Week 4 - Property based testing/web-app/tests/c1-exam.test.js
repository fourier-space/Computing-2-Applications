/**
 * This test file is different from the one supplied in the exam.
 * Here we make use of Property Based Testing.
 * The tests may look a bit more hairy than what you are used to.
 * Don't Panic! We'll discuss PBT fully later in the module.
 */

import Exam from "../c1-exam.js";
import fc from "fast-check";

describe("Lists – every_third", function () {
    it((
        "Given an array; " +
        "When each element is replaced by a sequence of three values," +
        "the first of which is that element; " +
        "Then applying every_third will return the original array."
    ), function () {
        fc.assert(fc.property(
            fc.array(fc.integer()),
            function (array) {
                const padded_array = array.flatMap(
                    (val) => [val, "junk", "data"]
                );
                const every_third_padded_array = Exam.every_third(padded_array);
                return ( // JSON.stringify is a way to compare arrays.
                    JSON.stringify(every_third_padded_array) ===
                    JSON.stringify(array)
                );
            }
        ));
    });
});

const even_sentence = fc.array(
    fc.string().filter(
        (str) => str.length !== 0 && str.indexOf(" ") === -1
    )
).filter(
    (arr) => arr.length !== 0 && arr.length % 2 === 0
).map(
    (arr) => arr.join(" ")
);

describe("Strings – merge_sentences", function () {
    it((
        "Given a sentence string with an even number of words; " +
        "When it is split into two sentences of the odd and even words; " +
        "Then applying merge_sentences will return the original sentence."
    ), function () {
        fc.assert(fc.property(
            even_sentence,
            function (sentence) {
                const words = sentence.split(" ");
                const even_words = words.filter((ignore, k) => k % 2 === 0);
                const odd_words = words.filter((ignore, k) => k % 2 !== 0);
                const s1 = even_words.join(" ");
                const s2 = odd_words.join(" ");
                return Exam.merge_sentences(s1, s2) === sentence;
            }
        ));
    });
});

const lc = "abcdefghijklmnopqrstuvwxyz";
const lowercase_letters = fc.constantFrom(
    ...lc.split("")
);
const n_lowercase = (n) => fc.array(
    lowercase_letters,
    {"minLength": n, "maxLength": n}
).map((arr) => arr.join(""));

const n_uppercase = (n) => n_lowercase(n).map((str) => str.toUpperCase());

describe("Strings – lowercase_count", function () {
    it((
        "Given a string of n lowercase letters, " +
        "and another of m uppercase letters; " +
        "When the strings are conncatenated and shuffled; " +
        "Then applying lowercase_count will return n."
    ), function () {
        fc.assert(fc.property(
            fc.tuple(fc.nat(128), fc.nat(128)).chain(function ([n, m]) {
                return fc.tuple(
                    fc.constant(n),
                    n_lowercase(n),
                    n_uppercase(m)
                );
            }),
            function ([n, lowers, uppers]) {
                const camel_string = lowers + uppers;
                return Exam.lowercase_count(camel_string) === n;
            }
        ));
    });
});

const arb_long_key = fc.string({"minLength": 1});
const keys = arb_long_key.chain(
    (long_key) => fc.tuple(
        fc.constant(long_key),
        fc.array(fc.string({"maxLength": long_key.length - 1}))
    )
);

describe("Objects – longest_key", function () {
    it((
        "Given a string key; " +
        "When an array of strings shorter than the key is generated, " +
        "and that array, with the original key, " +
        "becomes the keys to a new object; " +
        "Then applying longest_key to that object returns the original key."
    ), function () {
        fc.assert(fc.property(
            keys,
            function ([long_key, keys]) {
                const all_keys = keys.concat(long_key);
                const object = Object.fromEntries(
                    all_keys.map((key) => [key, "value"])
                );
                return Exam.longest_key(object) === long_key;
            }
        ));
    });
});

const large_even = fc.integer().map((n) => 2 * n);
const smaller_integers = large_even.chain((le) => fc.tuple(
    fc.constant(le),
    fc.array(fc.integer({"min": -Math.abs(2 * le) - 2, "max": le - 1}))
));
const odd_numbers = fc.array(fc.integer().map((n) => 2 * n + 1));

describe("Objects – value_greatest_even", function () {
    it((
        "Given an even integer; " +
        "When an array of smaller integers is generated, " +
        "and an array of arbitrarily sized odd numbers, " +
        "and these become the values of a new object; " +
        "Then applying value_greatest_even to that object " +
        "returns the original integer."
    ), function () {
        fc.assert(fc.property(
            smaller_integers,
            odd_numbers,
            function ([great_even, others], odds) {
                const all_values = others.concat(odds, great_even);
                const object = Object.fromEntries(
                    all_values.map((v) => [`k${v}`, v])
                );
                return Exam.value_greatest_even(object) === great_even;
            }
        ));
    });
});

describe("Arguments – greeting", function () {
    it((
        "Calling greeting without a second argument has 'London' as a substring"
    ), function () {
        fc.assert(fc.property(
            fc.string(),
            function (name) {
                return Exam.greeting(name).indexOf("London") !== -1;
            }
        ));
    });

    it((
        "Calling greeting with two arguments where neither are 'London' " +
        "does not have 'London' as a substring"
    ), function () {
        fc.assert(fc.property(
            fc.string().filter((str) => str !== "London"),
            fc.string().filter((str) => str !== "London"),
            function (name, location) {
                return Exam.greeting(name, location).indexOf("London") === -1;
            }
        ));
    });
});

describe("Arguments – floor_line", function () {
    it((
        "Calling floor_line with numbers always returns non-negative numbers"
    ), function () {
        fc.assert(fc.property(
            fc.double({"min": -1024, "max": 1024}),
            fc.double({"min": -1024, "max": 1024}),
            fc.double({"min": -1024, "max": 1024}),
            function (x, scalar, offset) {
                return Exam.floor_line(x, scalar, offset) >= 0;
            }
        ));
    });
});
