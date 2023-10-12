
const names = ["Alex", "Martha", "Alan", "Julie", "Roger"];
const students = [{
    firstName : "Alex",
    lastName : "Miller",
    age : 26,
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

let fullNames = students.map((student) => student.firstName + " " + student.lastName);

console.log(fullNames);


/*
let studentsOlderThan25 = students.filter((student) => student.age > 25);
console.log(studentsOlderThan25);

let foundStudent = students.find((student) => student.ssn === 21111);
console.log(foundStudent);

let indexFound = names.findIndex((firstName) => firstName === "Michael");

console.log(indexFound);

for(let i = 0; i < names.length; i ++){
    console.log(names[i]);
}

console.log("------");

names.forEach((firstName, index, originalArray) => {
    console.log(firstName, index, originalArray);
});

*/