const nums = [30, 100, 50, 60, 20, 40, 10, 70, 90, 80];
const students = [{
    firstName : "Alex",
    lastName : "Miller",
    age : 25,
    ssn : 12345
},{
    firstName : "Martha",
    lastName : "Smith",
    age : 23,
    ssn : 34343
},
{
    firstName : "Roger",
    lastName : "Anderson",
    age : 31,
    ssn : 98765
}];

const sortedNumbers = nums.sort((num1, num2) => num2 - num1);
console.log(sortedNumbers);

const sortedStudentsByAge = students.sort((student1, student2) => student2.ssn - student1.ssn);
console.log(sortedStudentsByAge);

/* reduce */

/*

const filteredNums = nums.filter((num) => num > 50);
console.log(filteredNums);

const foundStudent = students.find((student) => student.ssn === 11111);
const foundStudentIndex = students.findIndex((student) => student.ssn === 11111);

console.log(foundStudent);
console.log(foundStudentIndex);

const foundNum = nums.find((num) => {
    if(num === 60){
        return num;
    }
});

console.log(foundNum);



nums.forEach((num, index) => {
    console.log(num, index);
});

const result = nums.map((num) => num + 5);

const transformToObject = (num) => {
    return {
        num : num + 5
    };
}

const result2 = nums.map(transformToObject);

const result2 = nums.map(function(num){
    return num + 15
}); 


console.log(result);
console.log(result2);
*/