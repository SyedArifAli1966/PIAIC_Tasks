//This code run from client side like " browser"
// let x = prompt ("Where does the Pope live?"); 
// let correctAnswer = "Pakistan"; 
// if (x == correctAnswer ) { 
// 	alert("Correct!"); 
//  } else {
// 	alert("Wrong!");
// }
// let age = 66;
// if (age>=45) {
// 	console.log("you are allowed");
// }else {
// 	console.log("you are not allowed");
// }
//Permission system
//let hight = Number(prompt ("What is you hight"))
//let weight = Number(prompt ("What is you weight"))
//let city = prompt ("What is you city")
//let country =prompt ("What is you city")
var correctHight = Number(prompt("What is you hight"));
var correctWeight = Number(prompt("What is you weight"));
var correctCity = prompt("What is you city");
var correctCountry = prompt("What is you city");
if (correctHight >= 170) {
    if (correctWeight >= 70)
        if (correctCity === "karachi")
            if (correctCountry === "Pakistan") {
                console.log("Here is you permission allowed");
            }
}
else {
    console.log("You are not allowed");
}
// }
// }	else {
// 	console.log("You are not allowed");
// }
// i
// }	else {
// 	console.log("You are not allowed");
// }
