#!/usr/bin/env node

"use strict";

const cluster = require("cluster");
const http = require("http");
const os = require("os");

const Benchmark = require("./src/Benchmark.js");

if (cluster.isMaster) {
    for (let i = 0; i < os.cpus().length; i++) {
        cluster.fork();
    }

    cluster.on("exit", () => {
        cluster.fork();
    });
} else {
    http.createServer((req, res) => {
        const benchmark = new Benchmark();
        benchmark.run()

        res.writeHead(200);
        res.end();
    }).listen(3331);
}
