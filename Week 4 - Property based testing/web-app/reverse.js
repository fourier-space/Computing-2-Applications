// import Rot13 from "./rot13.js";
const Reverse = Object.create(null);

// Takes a string and reverses the order of its characters.
Reverse.reverse = function (string) {

    // if (string === "Hello") {
    //     return "olleH";
    // }

    // if (string === "Freddie") {
    //     return "eidderF";
    // }

    // if (string === "0123456") {
    //     return "6543210";
    // }

    // if (string === "Imperial") {
    //     return "lairepmI";
    // }

    // if (string === "") {
    //     return "";
    // }

    // if (string === "ABBA") {
    //     return "ABBA";
    // }

    // return Rot13.rot13(string);

    return string.split("").reverse().join("");
};

debugger;

export default Object.freeze(Reverse);
