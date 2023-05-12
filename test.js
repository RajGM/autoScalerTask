import http from 'http';
import axios from 'axios';

setInterval(function () {

    const data = {
        name: 'John Doe',
        email: 'john_doe@example.com'
    };

    axios.post('http://localhost:3000/data', data)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });

}, 1000); // 500 milliseconds = .5 seconds
