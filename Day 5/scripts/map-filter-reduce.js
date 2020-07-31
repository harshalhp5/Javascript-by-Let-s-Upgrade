console.log("Higher Order Functions Map(), Filter(), Reduce()");

// MAP()

console.log('Printing Squares of the array');
let arr = [1,2,3,4,5,6];
 arr.forEach((el) => {
     console.log(el**2);
 })

 console.log('Printing squares of Array using Map()');
 let square = arr.map((el) => el** 2);

 console.log(square); 

 // FILTER () :

 let even = arr.filter (el => el % 2 == 0)
 console.log(`Prints even numbers ${even}`);
 let evenSquares = arr.filter ( el => el % 2 == 0).map ( el => el ** 2);
 console.log(`Prints squares of Even Numbers ${evenSquares}`); 

 let users = [
     {'user' : 'Harshal'},
     {'user' : 'Rupesh'},
     {'user' : 'Ronaldo'},
     {'user' : 'Messi'},
    ];

let resultDetails = users.map( user => {
    let mark = Math.random () * 100 ; // assigning random Marks within 100 to users in array 
    user.mark = mark;
    return user;
})

console.log(resultDetails);

// Filtering the students who Passed
let pass = resultDetails.filter ( user => {
    if(user.mark > 35) {
        return user;
    }
})
console.log(pass);

// REDUCE :

let names = ['Jhanky', 'Panky', 'Manky'];
let red = names.reduce ((acc, val) => {
    let obj = {
        name : val,
        len : val.length,
    }
    acc.push(obj);
    return acc;
}, []);

console.log(red);

let sum = arr.reduce ((acc, val) => {
    acc += val;
    return acc;
}, 0)

console.log(sum);

