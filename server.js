#!/usr/bin/env node

"use strict";

const Benchmark = require("./src/Benchmark.js");
const http = require("http");

const server = http.createServer((req, res) => {
    const benchmark = new Benchmark();

    benchmark.run()

    res.writeHead(200);
    res.end();
});

server.listen(3331);