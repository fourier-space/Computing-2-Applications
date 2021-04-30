const Reverse = Object.create(null);

Reverse.reverse = function (string) {
    return string.split("").reverse().join("");
};

export default Object.freeze(Reverse);
