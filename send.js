import {connect} from 'amqplib';

const connection = await  connect('amqp://localhost');

const channel = await connection.createChannel();

const queue = 'Messages';

const message = 'Hello World!';

await channel.assertQueue(queue,{durable: false});

let msgCount = 0;
setInterval(function() {
    // your function code here
    channel.sendToQueue(queue, Buffer.from(message+msgCount++));
  }, 5000); // 500 milliseconds = .5 seconds
