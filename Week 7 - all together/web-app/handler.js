import RPS from "./rps.js";
const Handler = Object.create(null);

const list_of_games = [];

// game = {
//     "id": 0,
//     "full": false,
//     "play_due": new Date(),
//     "player_1_play": "Rock",
//     "player_2_play": "Rock",
//     "closed": true
// };

let last_id = 0;

Handler.ready_to_play = function () {
    const open_vacant_games = list_of_games.filter(
        (game) => !game.closed && !game.full
    );
    if (open_vacant_games.length === 0) {
        last_id += 1;
        const new_game = {
            "id": last_id,
            "full": false,
            "play_due": (new Date()) + 10000,
            "player_1_play": "",
            "player_2_play": "",
            "closed": false
        };
        return Promise.resolve(new_game);
    }
    const existing_game = open_vacant_games[0];
    existing_game.full = true;
    return Promise.resolve(existing_game);
};

Handler.play_a_move = function (request_object) {
    const game = list_of_games.find((g) => g.id === request_object.id);
    if (request_object.player === 1) {
        game.player_1_play = request_object.play;
    }
    if (request_object.player === 2) {
        game.player_2_play = request_object.play;
    }
    return Promise.resolve({"response": "success"});
};

Handler.check_result = function (request_object) {
    const game = list_of_games.find((g) => g.id === request_object.id);
    if (game.closed) {
        return Promise.resolve(game);
    }
    if (game.play_due < new Date()) {
        game.closed = true;
        game.winner = RPS.play_round(game.player_1_play, game.player_2_play);
        return Promise.resolve(game);
    }
    return Promise.resolve({"response": game.play_due});
};

export default Object.freeze(Handler);
