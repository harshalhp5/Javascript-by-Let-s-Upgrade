console.log("Let us Learn Modern Javascript")

// Destructuring Of Objects

// let person = {
//     name:'Harshal',
//     age:26,
//     hobby:'Football',
//     address : {
//         city:'Surat',
//         laneNumber:2,
//     },
// }

// console.log(person.hobby);
// console.log(person.address.city);

// const {name , age , address:{laneNumber}} = person;
// console.log(name, age,laneNumber)


// Destructuring of Arrays
// let arr = ['Robert','Downey','Jr.'];

// let firstname = arr[0];
// let lastname = arr[1];

// console.log(`${firstname} ${lastname}`)

// let [firstname,lastname] = ['Robert','Downey','Jr.'];

// console.log(`${firstname} ${lastname}`);


// Spread Operator in Array : ...varibale_name copies everything in that variable

// let friends = ['Vishal', 'Aditya','Nihar'];

// let contacts = ["Doctor",...friends,"Emergency"];
// friends.push('Error 404');
// console.log(friends);
// console.log(contacts);


// Spread Operator in Objects


// let person = {
//     name:'Raj',
//     age:25,
//     city:'Raipur',
// }


// let employee = {
//     ...person,
//     salary:40000,
//     designation:"Accountant"
// }

// console.log(person)
// console.log(employee)


// Arrow Functions

// let add = function(num1,num2){
//     return num1+num2
// }

// let result = add(10,20);
// console.log(result)

// (parameters)=>execute and return the value
// let add = (num1,num2)=> num1+num2;

// let result = add(10,20);
// console.log(result);

// let join = (a,b)=>`the value of a is ${a} & b is ${b}`

// let line = join('Hello', 'World');
// console.log(line)


// let greet = name =>`Hey ${name},Welcome to LetsUpgrade's way of Teaching.`

// let log = greet('Gaurav')
// console.log(log)

let greet = ()=> {
    console.log("Hello");
}
greet();
