
const doSomeMath = (num1, num2, arithmeticalFunction) => {
    console.log("Number 1:", num1);
    console.log("Number 2:", num2);
    return arithmeticalFunction(num1, num2);
}

const divideTwoNumbers = (num1, num2) => num1 / num2;

let result = doSomeMath(20, 30, (num1, num2) => num1 * num2);
console.log(result);

result = doSomeMath(100, 5, divideTwoNumbers);
console.log(result);