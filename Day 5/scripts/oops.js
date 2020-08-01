console.log('Learning Object Oriented Programming in JS');

const userOne = {
    name : 'Harshal',
    age : 26,
    email : 'h@gmail.com',
    login () {
        console.log ('Harshal has Logged in');
    }, logout() {
        console.log('Harshal has logged out');
    },
}

console.log(userOne.email)

class User {
    constructor (name1, age1, email1 ) {
        this.name1 = name1;
        this.age1 = age1;
        this.email1 = email1;
        this.luCoins = 0;
        this.courses = [];
    }

    static greet () {
        console.log('Hello');
    }

    login1 () {
        console.log(`${this.name1} has logged in`);
        return this;
    }

    logout1 () {
        console.log(`${this.name1} has Logged Out`);
        return this;
    }
    addCoins () {
        this.luCoins++;
        console.log(`${this.name1} has ${this.luCoins} Coins`);
        return this;
    }
    getDetails () {
        console.log(`Name of the User is ${this.name1}, Email ID is ${this.email1}`);
        return this;
    }
}

class Moderator extends User {
    constructor (name1, age1, email1, role) {
        super (name1, age1, email1);
        this.role = role;
    }

    deleteUser (user) {
      let users = users.filter ( u => {
            return u.email != user.email1;
        })
    }
}

class Admin extends Moderator {
    addCourse ( user, course) {
        user.courses.push (course);
        console.log(user);
    }
}

let user1 = new User ('harry', 25, 'harry@gmail.com');
let user2 = new User ('Bobby', 30, 'booby@gmail.com');
let mod = new Moderator ('moddy', 34, 'moddy@gmail.com');
let admin = new Admin ('Addy', 40, 'admin@gmail.com');

// users.forEach(element => {
//     console.log(element);
// });

User.greet ();
admin.addCourse (user1, 'Football');
admin.addCourse (user2, 'Athletics');

user1.login1 ();
user1.addCoins ();
user1.addCoins ();
user1.logout1 ();
user2.addCoins ();

user1.login1 ().addCoins (). addCoins (). getDetails ().logout1();

mod.deleteUser(user1);
console.log(users);