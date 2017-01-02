#!/usr/bin/env node

"use strict";

const express = require("express");
const app = express();

app.set("views", __dirname + "/");
app.set("view engine", "pug");

app.get("/", (req, res) => {
    res.render("index", {
        content: "Hello world"
    });
});

app.listen(3331);
