const game_2048 = Object.create(null);

game_2048.left = (x) => x; // This is the identity function – does nothing.
game_2048.right = (x) => x;
game_2048.up = (x) => x;
game_2048.down = (x) => x;

export default Object.freeze(game_2048);
