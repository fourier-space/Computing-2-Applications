// import Robots from "./robots.js";
import Ajax from "./ajax.js";

const send_button = document.getElementById("send-button");
const composition = document.getElementById("composition");
const messages = document.getElementById("messages");

const cloneTemplate = function (identifier) {
    return document.importNode(document.getElementById(identifier).content, true);
};

// let bot = Robots.reverseBot;

// const bot_list = document.getElementById("bot-list");
// Object.keys(Robots).forEach(function (robot_key) {
//     const list_item_template = cloneTemplate("bot-item");
//     const list_item = list_item_template.querySelector("[name=bot]");
//     list_item.textContent = Robots[robot_key].name;

//     list_item.onclick = function () {
//         console.log("clicked the item");
//         bot = Robots[robot_key];
//     };

//     bot_list.appendChild(list_item_template);
// });

send_button.onclick = function () {
    console.log(composition.value);

    const my_message_text = composition.value;

    const my_new_message = cloneTemplate("my-message");
    my_new_message.querySelector(
        "[name=message]"
    ).textContent = my_message_text;
    messages.appendChild(my_new_message);

    Ajax.query({
        "type": "message",
        "robot": "reverseBot",
        "message": my_message_text
    }).then(function (response_object) {

        const their_new_message = cloneTemplate("their-message");
        their_new_message.querySelector(
            "[name=message]"
        ).textContent = response_object.response;
        messages.appendChild(their_new_message);

    });



    composition.value = "";
};

composition.onkeydown = function (event) {
    if (event.key !== "Enter" || event.shiftKey) {
        return; // Do nothing special if it's not an enter key.
    }
    send_button.onclick();

    // This stops the enter keypress sending a newline character to the textarea
    event.preventDefault();
};
