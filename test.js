import http from 'http';
import axios from 'axios';

const data = {
    name: 'John Doe',
    email: 'john_doe@example.com'
};
const string = JSON.stringify(data);
const final = JSON.parse(string);

setInterval(function () {

    console.log("data: ", data);
    console.log("type of data: ", typeof data);
    console.log("string: ", string);
    console.log("type of string: ", typeof string);
    console.log("final: ", final);
    console.log("type of final: ", typeof final);

    axios.post('http://localhost:3000/data', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

}, 1000); // 500 milliseconds = .5 seconds
