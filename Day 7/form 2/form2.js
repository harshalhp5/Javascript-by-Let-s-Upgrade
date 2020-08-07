console.log('Form 2');

function validation() {
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const namemsg = document.getElementById('namemsg');
    if (username == "") {
        namemsg.innerHTML = "Username cannot be Empty";
        return false;
    }
    if (username.length < 4) {
        namemsg.innerHTML = "Username cannot be less than 4 Characters";
        return false;
    }
    if (email == "") {
        emailmsg.innerHTML = "Email cannot be Empty!";
        return false;
    }
    if (!email.includes ('@')) {
        emailmsg.innerHTML = "Email should have @";
        return false;
    }
}