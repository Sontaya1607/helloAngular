// Backend
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

//Allow client to access cross domain or ip-address
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'content-type, x-access-token');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get('/', (req, res) => {
    res.end("welcome to root path");
});

app.get('/home', (req, res) => {
    res.end("welcome to home path");
});

app.post('/api', (req, res) => {
    const feedback = req.body.feedback;
    const username = req.body.username;

    //res.end("Received Feedback: " + feedback + ", Username: " + username);
    res.json({result: "success", username: username, feedback: feedback})
});

app.listen(3000, () => {
    console.log("Server is running...");
});