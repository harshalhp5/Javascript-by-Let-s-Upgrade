/*
Create COMMENTS in JS by using 2 Forward Slashes //
Multi Lin Comments are given by /* * 
*/

// Create an ALERT by 
alert("Click me!! ");

// Creating VARIALBLE : var, let, const

// VAR is used for defining Global Variables but, it's NOT USED much
// Multiple objects can be defined within Var using {} else for single () can be used.

console.time('Time taken');

var a = { name : 'Harshal', age : 26, city : 'Surat'}
var b = { name : 'Rupesh', age : 26, city : 'Dubai'}
var c = { name : 'Pratik', age : 26, city : 'Canada'}

console.log({a,b,c}); // using {} we can print multiple Variables at Once

console.table({a,b,c}); // .table is used to print variables in a tablular format for clear view

console.error('This is not an actual Error but, this is how Error is shown');

console.warn('This is how we show Warning');

console.timeEnd('This will show Time Taken from where we declared console.time to this point to execute task');

// Creating Variables using let
{

    let name1 = 'cristiano' // we are defining let within {} because let is used as a Local Variable due to presence of lot's of other similar variables
    console.log(name1);

}

// Creating Variable using CONST 
// Values in const Variables cannot be changed

const fruits = ['mango', 'banana'];
console.log(fruits);

// although const can be manipulated using ush method as follows :

fruits.push('apple');
console.log(fruits);

/* Naming a variable
1. variable name cannot start with a number
2. It can start with letters, $, _.
3. $ is mainly used in JQuery
4. _  is used to declare private variables [OOPS in Javscript]
*/

/*
1. camelCase ************
2. kebab-case
3. snake_case
4. PascalCase
*/ 