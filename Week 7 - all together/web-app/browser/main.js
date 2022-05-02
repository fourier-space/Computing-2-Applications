import Ajax from "./ajax.js";

let game;
let player;

const rock_button = document.getElementById("rock_button");
const paper_button = document.getElementById("paper_button");
const scissors_button = document.getElementById("scissors_button");
const lizard_button = document.getElementById("lizard_button");
const spock_button = document.getElementById("spock_button");

const history_list = document.getElementById("history_list");

rock_button.onclick = function () {
    button_click("Rock");
};

paper_button.onclick = function () {
    button_click("Paper");
};

scissors_button.onclick = function () {
    button_click("Scissors");
};

lizard_button.onclick = function () {
    button_click("Lizard");
};

spock_button.onclick = function () {
    button_click("Spock");
};

const winner_text = [
    "Game Draw",
    "I Win",
    "Opponent Wins"
];

const check_result = function () {
    Ajax.query({
        "type": "check_result",
        "id": game.id
    }).then(function (result_game) {
        game = result_game;
        if (game.closed) {
            const li = document.createElement("li");

            const final_plays = (
                player === 1
                ? [game.player_1_play, game.player_2_play]
                : [game.player_2_play, game.player_1_play]
            );

            let winner; // Here 1 is me, 2 is opponent.
            if (game.winner === 0) {
                winner = 0;
            } else if (player === 1) {
                winner = game.winner;
            } else {
                winner = 3 - game.winner; // 1 → 2, 2 → 1
            }

            li.textContent = (
                `I played ${final_plays[0]}, ` +
                `Opponent played ${final_plays[1]}: ` +
                `${winner_text[winner]}`
            );

            history_list.append(li);

            my_play_span.textContent = emoji[final_plays[0]];
            their_play_span.textContent = emoji[final_plays[1]];


        } else {
            setTimeout(check_result, game.play_due - game.current_time);
        }
    });
};

const my_play_span = document.getElementById("my_play");
const their_play_span = document.getElementById("their_play");
const emoji = {
    "Rock": "🪨",
    "Paper": "🧻",
    "Scissors": "✂️",
    "Lizard": "🦖",
    "Spock": "🖖",
    "": "💁"
};

const button_click = function (my_play) {

    my_play_span.textContent = emoji[my_play];

    if (!game || game.closed) {
        their_play_span.textContent = emoji[""];
        Ajax.query({
            "type": "ready_to_play"
        }).then(function (response_game) {
            game = response_game;
            player = (
                game.full
                ? 2
                : 1
            );

            Ajax.query({
                "type": "play_a_move",
                "id": game.id,
                "player": player,
                "play": my_play
            });

            setTimeout(check_result, game.play_due - game.current_time);
        });
    } else {
        Ajax.query({
            "type": "play_a_move",
            "id": game.id,
            "player": player,
            "play": my_play
        });
    }

};

// const ai_play = function () {
//     const plays = ["Rock", "Paper", "Scissors"];
//     return plays[Math.floor(Math.random() * plays.length)];
// };
