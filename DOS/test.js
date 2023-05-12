import http from 'http';
import axios from 'axios';

const data = {
    name: 'John Doe',
    email: 'john_doe@example.com'
};
const string = JSON.stringify(data);
const final = JSON.parse(string);

setInterval(function () {

    axios.post('http://localhost:3000/data', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

}, 1); // 500 milliseconds = .5 seconds
