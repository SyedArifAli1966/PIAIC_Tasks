var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
var fullNames = [];


for (let i=0; i < firstNames.length ; i++) {

    for (let j=0;  j < lastNames.length ; j++) {

     fullNames.push(firstNames[i]+lastNames[j])   
    }
}
console.log(fullNames);
