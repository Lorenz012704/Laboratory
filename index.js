// Check if a number is odd and return a promise
function isOdd(number) {
    return new Promise((resolve, reject) => {
        if (number % 2 !== 0) {
            resolve(true);
        } else {
            reject(false);
        }
    });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];


for (let number of numbers) {
    isOdd(number)
        .then(result => {
            console.log(number + ' is odd.');
        })
        .catch(result => {
            // do nothing when it is even or not odd
        });
}

// Random character after 500ms
function getRandomCharacter() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const characters = 'abcdefghijklmnopqrstuvwxyz';
            const randomIndex = Math.floor(Math.random() * characters.length);
            const randomChar = characters.charAt(randomIndex);
            resolve(randomChar);
        }, 500);
    });
}

// Asynchronous function to resolve
async function resolve() {
    const randomChar = await getRandomCharacter();
    console.log('Random character:', randomChar);
}

resolve();

//Get data and reject the promise after 500ms
function getData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const errorMessages = ['Error 1', 'Error 2', 'Error 3'];
            const randomIndex = Math.floor(Math.random() * errorMessages.length);
            const randomError = errorMessages[randomIndex];
            reject(randomError);
        }, 500);
    });
}

// Asynchronous function to reject
async function reject() {
    try {
        await getData();
    } catch (error) {
        console.log('Error:', error);
    }
}

reject();

// Function to reject and resolve the promise after 500ms
function rejectResolve() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('Reject');
        }, 500);
        setTimeout(() => {
            resolve('Resolve');
        }, 1000);
    });
}

// Invoking rejectResolve function
rejectResolve()
    .then(result => {
        console.log('Resolved:', result);
    })
    .catch(error => {
        console.log('Rejected:', error);
    });