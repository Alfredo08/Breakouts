
const myPromise = new Promise((resolve, reject) => {
    const randomNum = Math.random();
    if(randomNum >= 0.5){
        resolve(`The number ${randomNum} is greater than 0.5`);
    }
    else{
        reject(new Error(`The number ${randomNum} is lesser than 0.5`));
    }
});

console.log('First');

myPromise
    .then((response) => {
        console.log('Third');
        console.log('This is the happy path');
        console.log(response);
    })
    .catch((errorResponse) => {
        console.log('Third');
        console.log('This is the unhappy path');
        console.log(errorResponse);
    });

console.log('Second');