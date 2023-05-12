import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/data', (req, res) => {
    console.log(typeof req.body)
    // const data = JSON.parse(req.body);
    // console.log("data ", data);
     res.status(200).json({message: "success"});
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

