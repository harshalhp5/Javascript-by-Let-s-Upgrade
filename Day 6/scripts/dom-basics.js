console.log('Document Object Model');
/*
In CSS 
Id - #
Class - .

Getting the elements

1. getElementById
2. getElementsByClassName
3. getElementsByTagName
4. querySelector
5. querySelectorAll
*/
 // getting HTML elements in JS by ELEMENTID
const title = document.getElementById('title');

console.log(title);  // Gives the Whole tag
console.log(title.innerHTML); //
console.log(title.innerText); // Text within the tag

// getting HTML elements in JS by ClassName
const para = document.getElementsByClassName('imp');
console.log(para);

// getting HTML elements in JS by TagName
const data = document.getElementsByTagName('p');
console.log(data);

for (let index =0; index < data.length; index ++) {
    const element = data[index];
    console.log(element);
} 

//const dataArr = [...data]; // both ways of getting data
const dataArr = Array.from(data);
dataArr.forEach (el => {
    console.log(el);
})

console.log(document.querySelector('.imp'));

// const data1 = document.querySelectorAll('.imp');
const data1 = document.querySelectorAll('p');
console.log(data1);

data1.forEach(el => {  // calling every <p> element
    console.log(el);
})

// CHANGING ATTRIBUTES

const attr = document.getElementById('attribute');
console.log(attr.getAttribute('id')); // shows ID of the attribute

attr.setAttribute('style', 'color : red');
attr.setAttribute('style', 'background-color : yellow');

attr.classList.add('blue');
attr.classList.add('bgYellow'); // Assigning CSS here
attr.classList.toggle('brown');  // TOGGLE works like a Switch turns ON if Element if OFF and vice versa


let fruits = ['banana', 'apple', 'watermelon', 'grapes'];

console.log(fruits);

const list = document.querySelector('#list');
console.log(list);

fruits.forEach (fruit => {
//list.innerText += `<li> ${fruit}</li>`;
list.innerHTML += `<li> ${fruit}</li>`; 
})

dataArr.forEach (para => {
    if(para.innerText.includes ('amet')) { //using include
        para.classList.add('highlight'); //assigning CSS here
    }
})

// BUTTON CLICK FUNCTIONS :

// function showAlert () { // already given in html file 
//     alert('Hey I am an Alert when you click the Button from HTML');
// }

const button = document.getElementById('btn'); // we can directly Button function assign from JS as well
button.onclick = function () {
    alert('Heyyy! I am Alert from JS');
}

// GET NAME FROM USER & CHANGE THE TITLE

const name = prompt ('Enter your Name', 'Anonymous');
title.innerText += `
Welcome to the family ${name}`; // Displaying entered name in Title

const dmode = document.getElementById('dark');
dmode.onclick = function changeColor () {
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    document.body.style.fontFamily = 'Helvetica';
}

const ctime = document.getElementById('time');

function clock () {
    let date = new Date();
    let time = date.toLocaleTimeString ();
    ctime.innerText = time;
}
clock();
 setInterval(clock,1000); // SETS Loop to Clock to loop every 1 Second
