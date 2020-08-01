console.log('Promises, Async & Await');

let users = [
    {
        name : 'Harry',
        email : 'harrya@hmail.com',
    },
    {
        name : 'Barry',
        email : 'barry@gmail.com',
    },
    {
        name : 'Mary',
        email : 'mary@gmail.com',
    }
]

function getUsers () {
    setTimeout (() => {
        let result = '';
        users.forEach ( user => {
            result += `The User is ${user.name} \n`;
        });
        console.log(result);
    }, 1000);
}

// function createUser (user, callback) {
//     setTimeout ( () => {
//         users.push (user);
//         callback ();
//     }, 3000);
// }

// getUsers ();

// createUser ( { name : 'Darry', email : 'darry@gmail.com'}, getUsers);

// PROMISES : Creating same things using Promises

// function createUser (user) {
//     return new Promise ( (resolve, reject) => {
//         setTimeout(() => {
//             users.push (user);
//             const error = false;
//             if (!error) {
//                 resolve();
//             }
//             else {
//                 reject ('Oh! An Error Occured');
//             }
//         }, 3000);
//     })
// }

// createUser ( { name : 'Perry', email : 'perry@gmail.com'})
// .then(getUsers)
// .catch(error => console.log (error));


// ASYNC & AWAIT : (Working on same Data) 

const photos = [];
async function photoUpload () {
    let status = new Promise ( (resolve, reject) => {
        setTimeout ( () => {
            photos.push ('Image');
            resolve (' Picture Updated');
        }, 3000 )
    })

    let result = await status;
    console.log(photos.length);
}

photoUpload();
photoUpload();