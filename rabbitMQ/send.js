import {connect} from 'amqplib';

const connection = await  connect('amqp://localhost');

const channel = await connection.createChannel();

const queue = 'Messages';

const obj = {
    name: 'John Doe',
    email: 'john_doe@example.com'
};

const message = JSON.stringify(obj);


await channel.assertQueue(queue,{durable: false});

let msgCount = 0;
setInterval(function() {
    // your function code here
    channel.sendToQueue(queue, Buffer.from(message/*+msgCount++*/));
  }, 1); // 500 milliseconds = .5 seconds
