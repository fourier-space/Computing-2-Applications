import RPS from "../rps.js";
import fc from "fast-check";
import property from "./property.js";

const arbitrary_play = fc.constantFrom(
    "Rock",
    "Paper",
    "Scissors",
    "Lizard",
    "Spock"
);

describe("Rock Paper Scissors Rules", function () {

    property(
        "RPS outcomes are symmetric under swapping players' plays",
        [arbitrary_play, arbitrary_play],
        function (player_1_play, player_2_play) {
            const round_1 = RPS.play_round(player_1_play, player_2_play);
            const round_2 = RPS.play_round(player_2_play, player_1_play);

            return (
                (round_1 === 1 && round_2 === 2) ||
                (round_1 === 2 && round_2 === 1) ||
                (round_1 === 0 && round_2 === 0)
            );

        }
    );

    property(
        "If only one player makes a play then that player wins",
        [arbitrary_play, fc.constantFrom(1, 2)],
        function (play, player) {
            if (player === 1) {
                return RPS.play_round(play, "") === 1;
            } else {
                return RPS.play_round("", play) === 2;
            }
        }
    );

    it("If neither player plays, the game is a draw", function () {
        if (RPS.play_round("", "") !== 0) {
            throw "Game not drawn when both players make no move";
        }
    });

});
