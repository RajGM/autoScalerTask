import { connect } from 'amqplib';
import http from 'http';

const connection = await connect('amqp://localhost');

const channel = await connection.createChannel();

const queue = 'Messages';

await channel.assertQueue(queue, { durable: false });

channel.consume(queue, (message) => {
    console.log(`Received message: ${message.content.toString()}`);

    const dataFromQueue = message.content.toString();
    const postData = JSON.stringify(dataFromQueue);
    const options = {
        hostname: 'localhost',
        port: 3000,
        path: '/data',
        method: 'POST',
        json: JSON.parse(postData)
    };
    const req = http.request(options, res => {
        console.log(`statusCode: ${res.statusCode}`);

        res.on('data', d => {
            process.stdout.write(d);
        });
    });
    req.on('error', error => {
        console.error(error);
    });
    req.write(postData);
    req.end();


});

