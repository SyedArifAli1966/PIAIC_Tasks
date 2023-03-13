import PromptSync = require("prompt-sync");
let prompt=PromptSync()
let inputNumber = Number (prompt ("Give Factorial Number"));

function calculateFactorial(inputNumber:number): number {
    let factorial = 1;
  
    for (let i = 1; i <= inputNumber; i++) {
      factorial *= i;
    }
  
    return factorial;
  }
  console.log(calculateFactorial(inputNumber)); 