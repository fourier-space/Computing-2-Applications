import Ajax from "./ajax.js";

let game;

const rock_button = document.getElementById("rock_button");
const paper_button = document.getElementById("paper_button");
const scissors_button = document.getElementById("scissors_button");

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

const winner_text = [
    "Game Draw",
    "I Win",
    "Opponent Wins"
];

const button_click = function (my_play) {

    if (!game || game.closed) {
        Ajax.query({
            "type": "ready_to_play"
        }).then(function (response_game) {
            game = response_game;
            const player = (
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

            setTimeout(function () {
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

                        li.textContent = (
                            `I played ${final_plays[0]}, ` +
                            `Opponent played ${final_plays[1]}: ` +
                            `${winner_text[game.winner]}`
                        );

                        history_list.append(li);
                    } else {

                    }
                });
            }, game.play_due - Number(new Date()));
        });
    }

};

// const ai_play = function () {
//     const plays = ["Rock", "Paper", "Scissors"];
//     return plays[Math.floor(Math.random() * plays.length)];
// };
