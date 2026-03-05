// 1. let and const

// var vs let vs const
var oldVar = "I am var";
console.log(oldVar); 
// Output: I am var

let age = 20;
console.log(age); 
// Output: 20
age = 25;  
console.log(age); 
// Output: 25

const pi = 3.14;
console.log(pi); 
// Output: 3.14
// pi = 3.1415; // Not allowed, error


// 2. Data Types (Basic)

let name = "Aqsa";       
let marks = 95;           
let isPassed = true;      
let result;               
let extra = null;         

console.log(typeof name);       
// Output: string
console.log(typeof marks);      
// Output: number
console.log(typeof isPassed);   
// Output: boolean
console.log(typeof result);     
// Output: undefined
console.log(typeof extra);      
// Output: object


// 3. User Input

let userName = prompt("Enter your name:");
console.log("Hello", userName); 
// Output: Hello [user input]

let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");
num1 = Number(num1);
num2 = Number(num2);

let sum = num1 + num2;
console.log("Sum:", sum); 
// Output: Sum: [sum of numbers]
