console.log('CONDITIONAL STATEMENTS');

/*
1. If
2. If Else
3. If ElseIf Else
4. Ternary
*/

// let age = Number(prompt('Enter your Age :'), 0); // Assigning 0 as the default value
// age = 23 ;
// console.log(age, typeof age);

// IF :
// Syntax : if (condition) {
//   code to evaluate if condition is True
// }

// age = 18;
// if (age === 18) {
//     console.log(`You're an Adult.`);
// }

// IF ELSE :

// if (age >= 18) {
//     console.log(`You're an Adult.`);
// }
// else {
//     console.log('Not an Adult.');
// }

// IF ELSEIF ELSE :

// if (age == 18) {
//     console.log(`your age is 18`);
// }
// else if (age == 20) {
//     console.log('Your age is 20');
// }
// else {
//     console.log('you are neither 18 or 20');
// }


// TERNARY OPERATORS : Work Similiar to if else
// syntax : condition ? value if true : value if false

let age = 18;
console.log(age >= 18 ? 'You are an ADult.' : 'You are a Baby');

let result = (age == 18) ? 'You are 18' :
             (age == 20) ? 'You are 20' :
             'You are neither 18 or 20';
console.log(result);

// SWITCH CASE :

let age1 = 18;

switch (age1) {
    case 18:
        console.log('you are 18...');
        break;
    case 20:
        console.log('You are 20...');
        break;
    default:
        console.log('neither 18 or 20');
}