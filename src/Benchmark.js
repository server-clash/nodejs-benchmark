"use strict";

class Benchmark {
    run(count = 4000) {
        const functions = ["acosh", "asinh", "cos", "log", "log1p", "log10", "sin", "sqrt", "tan"];

        for (let i = 0; i < count; i++) {
            functions.forEach((fn) => {
                Math[fn](i);
            });
        }
    }
}

module.exports = Benchmark;
