const requestPromise = require('request-promise');

const settings = {
    url: 'https://jsonplaceholder.typicode.com/posts',
    json: true
};

console.log('First');

requestPromise(settings)
    .then((data) => {
        console.log('Third');
        console.log('Happy path');
        data.forEach((obj) => {
            console.log(`${obj.id} - ${obj.title}`);
        });
    })
    .catch((error) => {
        if(error.statusCode === 404){
            console.log('Please check your URL, this endpoint/route was not found!');
        }
    });

console.log('Second');