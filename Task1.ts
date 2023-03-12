
// import PromptSync = require("prompt-sync");
// let prompt = PromptSync()
// let englishMarks = prompt ("English Obtain Marks");
// let urduMarks = prompt ("Urdu Obtain Marks");
// let num1=parseInt(englishMarks);
// let num2=parseInt(urduMarks)
// let avarageMarks = (num1+num2)/2;
// console.log(avarageMarks);

// if (avarageMarks >= 80 ) {

//     console.log("Grade A");
//     }    else if (avarageMarks >= 70){
//     console.log("Grade B");
//     }   else if (avarageMarks >= 60){
//    console.log("Grade C");
   
// } else {
//     console.log("Failed");
// }



import PromptSync = require("prompt-sync");
let prompt = PromptSync()
let englishMarks = Number(prompt ("English Obtain Marks"));
let urduMarks = Number (prompt ("Urdu Obtain Marks"));
let avarageMarks = (englishMarks+urduMarks)/2;
console.log(avarageMarks);

if (avarageMarks >= 80 ) {

    console.log("Grade A");
    }    else if (avarageMarks >= 70){
    console.log("Grade B");
    }   else if (avarageMarks >= 60){
   console.log("Grade C");
   
} else {
    console.log("Failed");
}
