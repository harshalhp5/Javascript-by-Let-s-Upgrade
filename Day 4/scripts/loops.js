console.log('Day 4 Learning');

// LOOPS :
console.log('Loop from 0 to 9');
for(let i = 0; i< 10; i++){
    console.log(i);
}

console.log('Printing all the Elements in array');
let arr = ['apple', 'mango', 'orange', 'banana'];
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}

// LOOPS with BREAK (Breaks out of the Loop) & CONTINUE(skips the Iteration) 

// console.log('Loops using Break & continue');
// for(let i = 1; i <= 10; i++) {
//     // if(i == 3){
//     //     break;
//     // }
//     if(i % 2 == 0) {
//         continue;
//     }
//     if(i == 3) {
//         continue;
//     }
//     let num = i;
//     console.log(num);
// }
    // WHILE Loop :

    console.log('We will now learn While loops :');
    let i= 1;
    while(i <= 10) {
        console.log(i);
        i++;
    }


    // DO WHILE LOOPS
    console.log('Let us look at DO WHILE Loops');
    let j= 1;
    do {
        console.log(j);
        j++;
    } while (j<9);

    // FOR EACH Functions

    // console.log('FOR EACH Functions are :');
    // let veg = ['Spinach','Cauliflower', 'Brinjal'];
    // forEach(function(veg));
    // console.log(veg);
