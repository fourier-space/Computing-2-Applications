/* jslint long*/
// import {fc} from "fast-check";
import {describe} from "describe";
import {it} from "it";
import {chai} from "chai";
import {Matrix} from "../matrix.js";
// const it = window.it;
// const fc = window.fastcheck;
// const chai = window.chai;

describe("Example Based Testing", function () {
    it("Sorting of users based on scores works as expected", function () {
        chai.expect(Matrix.flatten([
            [2, 4, 5, 6],
            [3, 5, 8, 10],
            [6, 6, 6, 6]
        ])).to.deep.equal([2, 4, 5, 6, 3, 5, 8, 10, 6, 6, 6, 6]);

    });
});