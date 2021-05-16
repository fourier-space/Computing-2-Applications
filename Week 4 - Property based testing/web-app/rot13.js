const Rot13 = Object.create(null);

Rot13.table = {
    "a": "n",
    "b": "o",
    "c": "p",
    "d": "q",
    "e": "r",
    "f": "s",
    "g": "t",
    "h": "u",
    "i": "v",
    "j": "w",
    "k": "x",
    "l": "y",
    "m": "z",
    "n": "a",
    "o": "b",
    "p": "c",
    "q": "d",
    "r": "e",
    "s": "f",
    "t": "g",
    "u": "h",
    "v": "i",
    "w": "j",
    "x": "k",
    "y": "l",
    "z": "m"
};

Rot13.rot13 = function (string) {
    const chars = string.split("");
    return chars.map((c) => Rot13.table[c] || c).join("");
};

export default Object.freeze(Rot13);
