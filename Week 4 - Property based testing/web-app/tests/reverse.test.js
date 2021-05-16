import fc from "fast-check";
import Reverse from "../reverse.js";

describe("Reverse", function () {

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

});
