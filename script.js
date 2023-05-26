//#1 Algorithm
// running sum based on the user's input
let total = 0; //initialize total sum 

while (true) { //initialize loop
  let num = parseInt(prompt("Enter a number:"));

  if (num < 0) {
    break;
  }

  total += num;
}

console.log("The final result is:", total); // display result


//#2 Algorithm
//an algorithm to read in three numbers and write them in sorted

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let num3 = parseInt(prompt("Enter the third number:"));

let smallest = Math.min(num1, num2, num3);
let largest = Math.max(num1, num2, num3);
let middle = num1 + num2 + num3 - smallest - largest;

console.log("The numbers in sorted order: " + smallest + ", " + middle + ", " + largest);


//#3 algorithm
//sum of the squares
let sumOfSquares = 0;

let count = parseInt(prompt("Enter the total number of values:"));

for (let i = 0; i < count; i++) {
  let num = parseInt(prompt("Enter a number:"));
  let square = num * num;
  sumOfSquares += square;
}

console.log("The sum of squares is:", sumOfSquares);

