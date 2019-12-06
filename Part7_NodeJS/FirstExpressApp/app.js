const express = require("express");
const app = express();

const ip = "localhost";
const port = 3000;

// "/"
app.get("/", (req, res) => {
    res.send("Hello Gábor!");
});

// "/bye"
app.get("/bye", (req, res) => {
    res.send("Bye Gábor, see you next time!");
});

//Start listen on server
app.listen(3000, () => {
    console.log(`App is listening on ${ip}:${port}/`);
});