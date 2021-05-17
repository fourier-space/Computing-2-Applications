import fc from "fast-check";
import Reverse from "../reverse.js";

describe("Reverse", function () {

    it("Known examples reverse correctly", function () {

        const examples = [
            ["Hello", "olleH"],
            ["Freddie", "eidderF"],
            ["0123456", "6543210"],
            ["ABBA", "ABBA"],
            ["Imperial", "lairepmI"]
        ];

        examples.forEach(function ([string, answer]) {

            const reverse = Reverse.reverse(string);

            if (answer !== reverse) {
                throw (
                    `Expected "${string}" to reverse to "${answer}" ` +
                    `insted we got "${reverse}"`
                );
            }
        });

    });

    it("Reversing a string twice returns the original string", function () {

        fc.assert(fc.property(
            fc.string(),
            function (str) {
                const reverseOnce = Reverse.reverse(str);
                const reverseTwice = Reverse.reverse(reverseOnce);
                return reverseTwice === str;
            }
        ));

    });

    it(
        "The nth character in a string is equal to the (length - 1 - n)th " +
        "character of its reversal",
        function () {

            fc.assert(fc.property(
                fc.string(),
                function (str) {
                    const reversal = Reverse.reverse(str);
                    const chars = str.split("");
                    const reversal_chars = reversal.split("");

                    return chars.every(
                        (c, n) => c === reversal_chars[chars.length - 1 - n]
                    );

                }
            ));

        }
    );

});
