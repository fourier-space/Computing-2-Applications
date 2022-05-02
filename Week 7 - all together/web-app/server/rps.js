/**
 * Rock Paper Scissors – RPS – a module for a Rock-Paper-Scissors game,
 * with extended throws, such as Lizard and Spock.
 * @namespace RPS
 */
const RPS = Object.create(null);

const wins = {
    "": [],
    "Rock": ["Scissors", "Lizard", ""],
    "Paper": ["Rock", "Spock", ""],
    "Scissors": ["Paper", "Lizard", ""],
    "Lizard": ["Paper", "Spock", ""],
    "Spock": ["Rock", "Scissors", ""]
};

/**
 * A legal throw in Rock Paper Scissors Lizard Spock.
 * @memberof RPS
 * @typedef {("Rock" | "Paper" | "Scissors" | "Lizard" | "Spock")} Throw
 */

/**
 * Gives the result of a single round of a rock paper scissors game.
 * @memberof RPS
 * @param {Throw} player_1_throw Player 1's throw.
 * @param {Throw} player_2_throw Player 2's throw.
 * @returns {(0|1|2)} Which player won, 1 or 2, or in a draw, 0.
 */
RPS.play_round = function (player_1_throw, player_2_throw) {
    if (wins[player_1_throw].includes(player_2_throw)) {
        return 1;
    }
    if (wins[player_2_throw].includes(player_1_throw)) {
        return 2;
    }
    return 0;
};

export default Object.freeze(RPS);
