const Handler = Object.create(null);
import Robots from "./robots.js";

Handler.message = function (request_object) {
    return Promise.resolve({
        "robot": request_object.robot,
        "response": Robots[request_object.robot].response(
            request_object.message
        )
    }
    );
};

Handler.bot_list = function (request_object) {
    
};

Handler.history = function (request_object) {
    
};

export default Object.freeze(Handler);
