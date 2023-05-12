import express from 'express';
import bodyParser from 'body-parser';
const app = express();

const port = 3000;
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/data', bodyParser.json() ,(req, res) => {
    const {name,email} = req.body;
    console.log("name ", name);
    console.log("email ", email)
    res.status(200).json({ message: "success" });
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
});

