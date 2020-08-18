import bot from "./bot.js";

const K = bot();

K.moveTo([1, 0, 0]);

debugger;

K.checkStatus();
K.currentLocation();
K.rescue();
K.rescue();
K.rescue();
K.rescue();

console.log(K.newTargets("Entrance", [0, 2, 0]));

debugger;