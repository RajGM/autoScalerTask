import http from 'http';

setInterval(function() {

const dataFromQueue = "RANDOM STRING"
const postData = JSON.stringify(dataFromQueue);
const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/data',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
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

}, 1000); // 500 milliseconds = .5 seconds
