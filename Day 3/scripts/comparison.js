console.log("Comparison and Logical operators");

/*
COMPARISON Operators
 1. > Greater than
 2. < Less Than
 3. >= Greater than or Equal to
 4. <= Less than or equal to
 5. == Equal to (Checks value and does not check Type)
 6. != Not Equal to
 7. === Strictly Equal to (Checks Value and Type as well)
 8. !== Not Strictly equals to
 
 LOGICALS OPERATORS :

 1. AND -> &&
 2. OR -> ||
 
 */

console.log( 7 > 6);
console.log( 11 < 10);
console.log( 10 >= 10);

let num = 8; 
console.log(num >= 9);

console.log( 1 == '1'); // as == does not chcek type it will say it as True .. Basically it CONVERTS THE STRING TO A NUMBER
console.log( 1 === '1'); // === Checks the type as well hence output will be different

console.log( 1 !== '1');

console.log( 4>3 && 1>0); // Requires both conditions to to be True to be True
console.log( 2>3 || 1>0); // Requires only 1 condition to  be true to be True.

let val = 5>2;
console.log(val);

// STRING COMPARISON : Works in LEXICOGRAPHIC ORDER which is ordering of words based on Alphabetical order of the Letters.
console.log('abcd' > 'abc');
console.log('abcd' > 'abcde');

// NULL 
console.log(null > 0);
console.log(null == 0);
console.log(null < 0);
console.log(null >= 0);
console.log(Number(null));

// UNDEFINED 

console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined >= 0);
console.log(Number(undefined));