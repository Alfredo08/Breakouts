
const printHello = () => {
    console.log('Hello there!');
    console.log('This is the last message that we will see!');
}

setTimeout(printHello, 3000); // This is asynchronous - a promise
console.log('This is the first message that we will see!');

console.log('This is the second message that we will see!');

setTimeout(() => {
    console.log('This is the third message that we will see!');
}, 1500)