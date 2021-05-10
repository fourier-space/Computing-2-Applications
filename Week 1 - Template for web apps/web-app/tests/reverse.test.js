import fc from "fast-check";
import Reverse from "../reverse.js";

// This test intentionally has a bug in it that you should fix.
// There is also a jslint error which should give a hint.
describe("Reverse", function () {
    it("Reversing a string twice returns the original string", function () {
        fc.assert(fc.property(fc.string(), function (str) {
            const reverseOnce = Reverse.reverse(str);
            const reverseTwice = Reverse.reverse(reverseOnce);
            return reverseTwice === str;
        }));
    });
});
