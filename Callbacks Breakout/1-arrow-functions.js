printHello();

function printHello(){
    console.log("Hello there!");
}

printHelloArrow();

const printHelloArrow = () => console.log("Hello there!");


const addTwoNumbers = (num1, num2) => num1 + num2;

let result = addTwoNumbers(40, 20);
console.log(result);

const isOdd = (num1) => num1 % 2 === 1;

console.log(isOdd(7));
console.log(isOdd(8));
console.log(isOdd(15));
console.log(isOdd(20));