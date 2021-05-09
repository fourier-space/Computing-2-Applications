const game_2048 = Object.create(null);

// The identity function returns whatever it is passed. i.e does nothing.
const identity = (x) => x;

game_2048.left = identity; // this is a placeholder for a correct implementation
game_2048.right = identity;
game_2048.up = identity;
game_2048.down = identity;

export default Object.freeze(game_2048);
