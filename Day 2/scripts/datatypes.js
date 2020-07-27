console.log("Learning Data Types");
/*
Primitive datatypes include :
1. Numbers
2. String
3. Boolean - True or False
4. Bigint - Numbers greater than 2^53 - 1 are called as BigInt
5. Null - 
6. Undefined - When nothing is defined or when no input is given
*/

// 1. Numbers :
let num =25;
console.log(num);

let num1 = 123.856;
num1 = Number(num1); // Use Number(variablename); for Converting floating points to number
console.log(num1);
console.log(num1, typeof num1);
console.log(Number(true));
console.log(Number(false));
console.log(parseFloat(num1));
console.log(num1.toFixed(2));

let strn = 455;
console.log(typeof strn);
console.log(Number('1233334hg')); // When anything other than Numbers is given to Number() then it will not read anything and declare Nan saying 'Not a Number'


// 2. STRING :

let str1 = "Harshal in Double Quotes";
let str2 = 'Harshal in Single Quotes';
let str3 = `Harshal in Backticks`;
console.log (str1, str2, str3);

// 3. BOOLEAN :

let canFly = false;
console.log(canFly);
console.log(typeof canFly);


// 4. BIGINT : By putting 'n' at the end of Number we can declare it as BIGINT.

let numb = 12234456n;
console.log(numb);
console.log(typeof numb);

// 5. NULL : We have to declare null in value part of variable

let nullvar = null;
console.log(nullvar);
console.log(typeof nullvar);

// 6. UNDEFINED : When no vlaue is defined.

let a;
console.log(a);
console.log(typeof a);
