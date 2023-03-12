// let calc = (num1: number, num2: number): number => num1+num2 
// return (num1 + num2);    

// console.log((calc));

// let ans = calc (4,7);

// console.log(ans);


// Define the questions and answers
import promptSync from 'prompt-sync';
const prompt = require ('prompt-sync')();
const questions: string[] = [
  "What is the capital of France?",
  "What is the largest planet in our solar system?",
  "What is the smallest country in the world by land area?",
  "What is the tallest mammal on Earth?",
  "What is the smallest planet in our solar system?"
];

const answers: string[] = ["Paris", "Jupiter", "Vatican City", "Giraffe", "Mercury"];

// Ask the user each question and check their answer
let score = 0;

const userAnswer1: string = prompt(`${questions[0]}\nA. Paris\nB. Madrid\nC. Rome\nD. Berlin\n`) || "";
if (userAnswer1.toLowerCase() === answers[0].toLowerCase()) {
  score += 20;
}

const userAnswer2: string = prompt(`${questions[1]}\nA. Saturn\nB. Jupiter\nC. Neptune\nD. Uranus\n`) || "";
if (userAnswer2.toLowerCase() === answers[1].toLowerCase()) {
  score += 20;
}

const userAnswer3: string = prompt(`${questions[2]}\nA. Monaco\nB. Liechtenstein\nC. San Marino\nD. Vatican City\n`) || "";
if (userAnswer3.toLowerCase() === answers[2].toLowerCase()) {
  score += 20;
}

const userAnswer4: string = prompt(`${questions[3]}\nA. Elephant\nB. Giraffe\nC. Rhino\nD. Hippo\n`) || "";
if (userAnswer4.toLowerCase() === answers[3].toLowerCase()) {
  score += 20;
}

const userAnswer5: string = prompt(`${questions[4]}\nA. Venus\nB. Earth\nC. Mars\nD. Mercury\n`) || "";
if (userAnswer5.toLowerCase() === answers[4].toLowerCase()) {
  score += 20;
}

// Print the final score
if (score >= 80) {
  console.log(`Congratulations, your score is ${score}/100!`);
} else if (score >= 60) {
  console.log(`Not bad, your score is ${score}/100!`);
} else {
  console.log(`Sorry, your score is ${score}/100. Keep practicing!`);
}