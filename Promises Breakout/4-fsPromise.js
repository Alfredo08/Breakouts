const fs = require('fs');

console.log('First');

fs.promises.readFile('./message.txt', {encoding: 'UTF-8'})
    .then((data) => {
        console.log('Third');
        console.log('Happy path!');
        console.log(data);
    })
    .catch((error) => {
        console.log('Third');
        console.log('Unhappy path!');
        console.log(error)
    });

console.log('Second');
