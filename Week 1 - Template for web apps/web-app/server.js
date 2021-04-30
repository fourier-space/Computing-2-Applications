import express from "express";

const port = 8080;
const app = express();

app.use("/", express.static("web-app/static"));

app.listen(port, function () {
    console.log(`Listening on port ${port} – http://localhost:${port}`);
});
