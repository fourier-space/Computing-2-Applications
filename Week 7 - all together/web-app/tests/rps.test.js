import RPS from "../static/rps.js";
import fc from "fast-check";
import property from "./property.js";

const arbitrary_play = fc.oneof(
    fc.constant("Rock"),
    fc.constant("Paper"),
    fc.constant("Scissors")
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

});
