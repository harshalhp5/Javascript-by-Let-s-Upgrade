console.log('Let us Study Math Functions in JS');

console.log(Math.min(12,34,56,78)); // gives Minimum value
console.log(Math.max(43,67,98,66)); // Gives Maximum value
console.log(Math.pow(7,2)); // gives Exponential power eh 7 ^ 2
console.log(Math.abs(-45)); // gives absolute value
console.log(Math.sqrt(49)); // Gives out Square root of the digit
console.log(Math.PI);
console.log(Math. PI * Math.pow(4,4)); // Here we are finding circumference of a circle by PI(r)^2

let num = 45.66789 ;
console.log(Math.round(num)); // rounds up the Number
console.log(Math.ceil(num)); // rounds up the number to the Highest Value
console.log(Math.floor(num)); // rounds up the number to lowest value
console.log(num.toFixed(3)); // fixes the decimal value to certain limit within 20

console.log(Math.random()); // Gives any Random Number
console.log(Math.floor(Math.random()*10)); // Random Nnumber between 0-9
console.log(Math.floor(Math.random()*10)+1); // Random Nnumber between 0-10

console.log(Math.floor(Math.random()*(10-1))+1); // generate a random number between min(included) & max(excluded)

console.log(Math.floor(Math.random()*(25 - 10 + 1))+10); // generate a random number between min(included) & max(included)