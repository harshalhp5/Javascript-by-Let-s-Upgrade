console.log('Let us learn Functions');

function hello() {
    console.log('hello from the Function');
}
hello();

let greet = function (){
    console.log('I am a function assigned to a variable');
}
greet();

let welcome = function  (name = 'Stranger') {
    console.log(`Hello ${name}`)
}
welcome('Harshal');

let addition = function(num1 = 0, num2 = 0) {
    let sum = +num1 + +num2;
    return sum;
}

let result = addition ('10', '7');
console.log(result);