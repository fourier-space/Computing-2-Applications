// play = one of: "Rock", "Paper", "Scissors"
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
 * takes one of "Rock", "Paper", "Scissors"
 * return 1 or 2 if player 1 or 2 wins
 * returns 0 if draw.
 */
RPS.play_round = function (player_1_play, player_2_play) {
    if (wins[player_1_play].includes(player_2_play)) {
        return 1;
    }
    if (wins[player_2_play].includes(player_1_play)) {
        return 2;
    }
    return 0;
};

export default Object.freeze(RPS);
