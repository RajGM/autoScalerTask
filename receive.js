import { connect } from 'amqplib';
import http from 'http';
import axios from 'axios';

const connection = await connect('amqp://localhost');

const channel = await connection.createChannel();

const queue = 'Messages';

await channel.assertQueue(queue, { durable: false });

channel.consume(queue, (message) => {
    
    const data = message.content.toString();
    console.log("data: ", data);
    console.log("type of data: ", typeof data);
    const final = JSON.parse(data);
    console.log("final: ", final);
    console.log("type of final: ", typeof final);

    axios.post('http://localhost:3000/data', final)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error(error);
        });


});

