import RPS from "./rps.js";

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
    "CPU Wins"
];

const button_click = function (my_play) {
    const their_play = ai_play();
    const winner = RPS.play_round(my_play, their_play);

    const li = document.createElement("li");

    li.textContent = (
        `I played ${my_play}, CPU played ${their_play}: ${winner_text[winner]}`
    );

    history_list.append(li);

    // Ajax.query({"type": "play_a_move", "move": my_play});
};

const ai_play = function () {
    const plays = ["Rock", "Paper", "Scissors"];
    return plays[Math.floor(Math.random() * plays.length)];
};
