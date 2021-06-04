const Handler = Object.create(null);

Handler.identify = function (request_object) {
    return Promise.resolve({
        "response": `Hi! ${request_object.name}`
    });
};

export default Object.freeze(Handler);
