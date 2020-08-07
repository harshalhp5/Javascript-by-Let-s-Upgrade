console.log('Hello Day 7');

// Create Element :

const list = document.querySelector('#list');

// const el = document.createElement('span'); // creates a span tag in html
// console.log(el);

function createElement(el){
    return document.createElement(el);
}

let li = createElement('li');
let a = createElement ('a');
console.log(li);
console.log(a);

list.appendChild(li); // appends a List tag
li.appendChild(a); // appends anchor Tag
a.innerHTML = "YouTube"; // assigns lable 
a.setAttribute('href', "https://www.youtube.com");

list.insertBefore(li,document.getElementsByTagName('li')[1]); // inserted at another position

// list.removeChild(document.getElementsByTagName('li')[2]);


// Regex intro

const str = "harshalgmail.com";
const pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;

console.log(pattern.test(str));
