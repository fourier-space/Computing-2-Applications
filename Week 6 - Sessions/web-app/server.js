import express from "express";
import session from "express-session";
import Handler from "./handler.js";

const port = 8080;
const app = express();

app.use(session({
    "secret": "a1652321-1c7d-468b-b6a2-4fddc4fde562",
    "resave": false,
    "saveUninitialized": false
}));

app.use("/", express.static("web-app/static"));

app.use("/", express.json());
app.post("/", function (req, res) {
    const request_object = req.body;

    if (!req.session.data) {
        req.session.data = {};
    }

    Handler[request_object.type](request_object, req.session.data).then(
        function (response_object) {
            res.json(response_object);
        }
    );

    // res.json(
    //     Handler[request_object.type](request_object, req.session.data)
    // );

});

app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});
