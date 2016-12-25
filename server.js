const express = require("express");
const app = express();

app.set("views", "./")
app.set("view engine", "pug")

app.get("/", (req, res) => {
    res.render("index", {
        content: "Hello world"
    });
});

app.listen(3333);