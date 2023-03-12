import PromptSync = require("prompt-sync");
let prompt=PromptSync()
let inputNumber = Number (prompt ("Give Factorial Number"));

for (let i=inputNumber; ; i--) {
     let outputnumber=i
    console.log(outputnumber*outputnumber-1);
    
}
