"use strict";

class Benchmark {
    run(count = 2500) {
        const functions = ["abs", "acos", "asin", "atan", "floor", "exp", "sin", "tan", "sqrt"];

        for (let i = 0; i < count; i++) {
            functions.forEach((fn) => {
                Math[fn](i);
            });
        }
    }
}

module.exports = Benchmark;