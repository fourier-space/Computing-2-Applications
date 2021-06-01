const Robots = Object.create(null);

const agreeOptions = [
    "Yes!",
    "My Man!",
    "Looking Good!"
];
Robots.agreeBot = {
    "name": "Agree Bot",
    "response": function () {
        return agreeOptions[Math.floor(Math.random() * agreeOptions.length)];
    }
};

Robots.reverseBot = {
    "name": "Reverse Bot",
    "response": function (message) {
        return message.split("").reverse().join("");
    }
};

export default Object.freeze(Robots);
