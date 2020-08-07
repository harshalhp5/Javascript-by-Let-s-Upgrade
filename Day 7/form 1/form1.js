console.log('This is FORM 1');

// const loginForm = document.forms.myForm; // direct getting form 

const loginForm = document.getElementById('myForm');

const message = document.getElementById('msg');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // prevents Default action
    // console.log(event.target.name.value);
    if(loginForm.name.value == "") {
        message.innerHTML = "Name Should Not Be Empty";
    }
})