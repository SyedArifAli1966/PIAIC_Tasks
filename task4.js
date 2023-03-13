"use strict";
exports.__esModule = true;
var PromptSync = require("prompt-sync");
var prompt = PromptSync();
var inputNumber = Number(prompt("Give Factorial Number"));
function calculateFactorial(inputNumber) {
    var factorial = 1;
    for (var i = 1; i <= inputNumber; i++) {
        factorial *= i;
    }
    return factorial;
}
console.log(calculateFactorial(inputNumber));
