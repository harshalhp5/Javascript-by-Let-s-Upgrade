console.log("Methods of Datatypes");

let str = `<h2> Hey there</h2>
<p>All good.</p> 
`; // Putting anything and however in Backticks will result in same output in the Window 
console.log(str);

let name = "Rio";
let skill = "hacking";
let weakness = "Tokyo";

console.log("The name is " + name + " .His skill is " + skill + " and his weakness is " + weakness);  // Old Way is very Hectic

console.log(`The name is ${name}. His skill is ${skill} and his weakness is ${weakness}.`); // New way using backticks is more feasible and we can directlt use ${var}PLACEHOLDERS to initialise a varibale


let text = "The quick brown fox jumps over the wall";

console.log(text);

// To check the length of the string
console.log(text.length)

// To change the case of the string
console.log(text.toLowerCase());
console.log(text.toUpperCase());

// Accessing the index 
console.log(text[5]);
console.log(text.indexOf('o'));
console.log(text.lastIndexOf('o'))

console.log(text.charAt('12'));

console.log(text.endsWith("well"));

console.log(text.split('e'));

// Array
let arr = ['one', true, 32, ['1','2']];
let arr2 = ['rio', 'berlin','alicia'];
console.log(arr);


console.log(Array.isArray(arr));
// indexOf('value')

console.log(arr.reverse())

console.log(arr[3]);

console.log(arr.concat(arr2));

// Appending an element At the START
arr2.unshift('tokyo');
console.log(arr2);
// Appending an element At the END
arr2.push('helsinki');
console.log(arr2);



// REMOVING an element From the START 
arr2.shift('tokyo');
console.log(arr2);

// REMOVING an element From the END 
console.log(arr2.pop());


