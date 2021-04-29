// Javascript modules are imported at the top like this.
// This one is for a function to exchange messages with a server.
import Ajax from "./ajax.js";

// Get references to the html elements that we are going to be manipulating.
const input_pane = document.getElementById("input_pane");
const send_json_pane = document.getElementById("send_json_pane");
const received_json_pane = document.getElementById("received_json_pane");
const output_pane = document.getElementById("output_pane");
const send_button = document.getElementById("send_button");

// Define what happens when you click the send button.
send_button.onclick = function () {
    // Build an object to send to the server,
    // from the value typed in the first pane.
    const object_to_send = {"message": input_pane.value};

    // Output in the second pane the JSON encoded object to send.
    send_json_pane.value = JSON.stringify(object_to_send);

    // Send the object and define what happens next.
    Ajax.query(object_to_send).then(function (response) {
        // This function gets called only when/if the server replies.

        // Display the raw server response in the third pane.
        received_json_pane.value = JSON.stringify(response);

        // Extract a value from the object and display this.
        output_pane.value = response.reply;
    });
};
