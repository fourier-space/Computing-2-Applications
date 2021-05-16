const game_2048 = Object.create(null);

////
// Functional programming toolkit
////

const identity = (x) => x;

const map = (map_function) => (array) => array.map(map_function);

const filter = (filter_function) => (array) => array.filter(filter_function);

const every = (predicate) => (array) => array.every(predicate);

const any = (predicate) => (array) => array.some(predicate);

const transpose = (array) => array[0].map(
    (ignore, colIndex) => array.map((row) => row[colIndex])
);

const zip = (f) => (...arrays) => transpose(arrays).map((args) => f(...args));

const most = (array) => array.slice(0, array.length - 1);
const rest = (array) => array.slice(1, array.length);

// I've tidied compose and pipe with arrow functions.
// Also changed it so multiple arguments can be accepted on the first call.
const compose = (...fs) => (...args) => most(fs).reduceRight(
    (a, f) => f(a),
    fs[fs.length - 1](...args)
);
const pipe = (...fs) => (...args) => rest(fs).reduce(
    (a, f) => f(a),
    fs[0](...args)
);

const reduce = (reducer) => (array) => array.reduce(reducer);

const sum = reduce((a, x) => a + x);

////
// 2048 Specific helper functions
////

const row_flip = (row) => row.slice().reverse();

// I've replaced the array.map with a curried version of map.
const h_flip = map(row_flip);

// I've replaced the array.filter with a curried version of filter.
const strip_zeros = filter((x) => x !== 0);

const combine_tiles = function (row, new_row = []) {
    if (row.length === 0) {
        return new_row;
    }
    if (row.length === 1) {
        return new_row.concat(row[0]);
    }
    const [a, b, ...remaining] = row;
    if (a === b) {
        return combine_tiles(remaining, [...new_row, a + 1]);
    } else {
        return combine_tiles([b, ...remaining], [...new_row, a]);
    }
};

const pad_zeros = (row) => row.concat([0, 0, 0, 0]).slice(0, 4);

const row_left = pipe(
    strip_zeros,
    combine_tiles,
    pad_zeros
);

const row_score = pipe(strip_zeros, map((n) => 2**n), sum);

const equal = (a, b) => a === b;

const row_equal = pipe(zip(equal), every(identity));

const board_equal = pipe(zip(row_equal), every(identity));

////
// 2048 Public interface
////

// I've replaced the array.map with a curried version of map.
game_2048.left = map(row_left);

game_2048.right = compose(h_flip, game_2048.left, h_flip);

game_2048.up = compose(transpose, game_2048.left, transpose);

game_2048.down = compose(transpose, game_2048.right, transpose);

const moves = [
    game_2048.left,
    game_2048.right,
    game_2048.up,
    game_2048.down
];

game_2048.new_board = () => [
    [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]
];

game_2048.score = pipe(map(row_score), sum);

// A move is valid if perfoming that move gives a different board configuration.
game_2048.any_valid_moves = (board) => any(
    (move) => !board_equal(move(board), board)
)(moves);

game_2048.free_spaces = (board) => board.flatMap(
    (row, j) => row.flatMap(
        (tile, i) => (
            tile === 0
            ? []
            : [[i, j]]
        )
    )
);

const clone = pipe(map, map)(identity);
game_2048.add_tile = function (board, [i, j], value) {
    const result_board = clone(board);

    // In principle, this is a mutation.
    // But it's confined to the function, so as an interface is still pure.
    result_board[j][i] = value;

    return result_board;
};

const try_moves = function (board, move_list) {
    if (move_list.length === 0) {
        return board;
    }
    const trial = move_list[0](board);
    if (!board_equal(trial, board)) {
        return trial;
    }
    return try_moves(board, rest(move_list));
};

// The strategy here is to try doing a down, right, left, up move in order.
// It's not perfect, but it does pretty well.

// I've also changed the signature from the sheet to return the resulting board,
// rather than the move itself.
game_2048.best_move = (board) => try_moves(board, [
    game_2048.down, game_2048.right, game_2048.left, game_2048.up
]);

export default Object.freeze(game_2048);
