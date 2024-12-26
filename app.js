//const http=require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('In the middleware')
    next();//allows the request to continue to the next middleware in line
})

app.use((req, res, next) => {
    console.log('In another middleware')
    res.send(`<h1>Hello from express</h1>`);//send allows us to attach a body which of type any
    res.json({ key: 'value' })
})

// const server=http.createServer(app);

// server.listen(3000);

app.listen(3000);