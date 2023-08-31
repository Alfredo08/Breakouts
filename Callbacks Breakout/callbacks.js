const doSomeMath = (num1, num2, callback) => {
    console.log("Num1:", num1);
    console.log("Num2:", num2);
    const total = callback(num1, num2);
    return total;
}

const addTwoNumbers = (num1, num2) => num1 + num2;
const multiplyTwoNumbers = (num1, num2) => num1 * num2;
const subtractTwoNumbers = (num1, num2) => num1 - num2;
const divideTwoNumbers = (num1, num2) => num1 / num2;

console.log(doSomeMath(10, 20, addTwoNumbers));
console.log(doSomeMath(10, 20, multiplyTwoNumbers));
console.log(doSomeMath(100, 20, subtractTwoNumbers));
console.log(doSomeMath(100, 5, divideTwoNumbers));