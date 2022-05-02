// Javascript modules are imported at the top like this.
// This one is for a function to exchange messages with a server.
import Ajax from "./ajax.js";

// Get references to the html elements that we are going to be manipulating.
const send_json_pane = document.getElementById("send_json_pane");
const received_json_pane = document.getElementById("received_json_pane");
const send_button = document.getElementById("send_button");

received_json_pane.value = "";

// Define what happens when you click the send button.
send_button.onclick = function () {
    // Build an object to send to the server,
    // from the value typed in the first pane.
    const object_to_send = JSON.parse(send_json_pane.value);

    // Send the object and define what happens next.
    Ajax.query(object_to_send).then(function (response) {
        // This function gets called only when/if the server replies.

        // Display the raw server response.
        received_json_pane.value = JSON.stringify(response, " ", 2);
    });
};
