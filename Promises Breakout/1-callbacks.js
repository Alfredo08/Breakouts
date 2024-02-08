
const addTwoNumbers = (num1, num2, callback) => {
    const result = num1 + num2;
    console.log(`Adding ${num1} + ${num2} = ${result}.`);
    callback();
    // printHello()
}

const printHello = () => {
    console.log('Hello there!');
}

addTwoNumbers(20, 30, printHello);