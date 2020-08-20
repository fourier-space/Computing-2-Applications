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
// experiment on your own

console.log(K.newTargets("Entrance", [0, 2, 0]));

debugger;

// Note: this is not an appropriate test script
// You will be introduced to fast-check and mocha test soon.

// At this stage, it is convenient to test your functions
// with the node.js debugger console.