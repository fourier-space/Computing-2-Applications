const Handler = Object.create(null);

const contacts = [];
const messages = [];

Handler.identify = function (request_object, session_data) {
    const name = request_object.name;

    session_data.name = name;

    contacts.push(name);

    return Promise.resolve(
        {
            "response": `Identified as ${name}`
        }
    );
};

Handler.whoAmI = function (ignore, session_data) {
    return Promise.resolve({"name": session_data.name});
};

Handler.listContacts = function () {
    return Promise.resolve(contacts);
};

Handler.sendMessage = function (request_object, session_data) {
    const to = request_object.to;
    const body = request_object.body;
    const message = {
        "to": to,
        "from": session_data.name,
        "body": body
    };
    messages.push(message);
    return Promise.resolve({"response": "Message sent"});
};

Handler.listOutbox = function (ignore, session_data) {
    return Promise.resolve(
        messages.filter(
            (message) => message.from === session_data.name
        )
    );
};

Handler.listInbox = function (ignore, session_data) {
    return Promise.resolve(
        messages.filter(
            (message) => message.to === session_data.name
        )
    );
};

export default Object.freeze(Handler);
