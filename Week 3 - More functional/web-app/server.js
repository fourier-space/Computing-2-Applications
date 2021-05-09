import game_2048 from "./game_2048.js";
const left = game_2048.left;

const board = [
    [1, 1, 0, 0],
    [1, 0, 2, 0],
    [0, 2, 0, 2],
    [1, 1, 2, 0]
];

const print_boards = function (b1, b2) {
    const string_rows_1 = b1.map(String);
    const string_rows_2 = b2.map(String);
    const padding = ["       ", "  --\\  ", "  --/  ", "       "];
    const output = padding.map(
        (p, k) => string_rows_1[k] + p + string_rows_2[k] + "\n"
    ).reduce(
        (a, x) => a + x
    );
    console.log(output);
};

print_boards(board, left(board));
