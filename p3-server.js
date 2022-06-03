/*
    CIT 281 Project 3
    Name: Nakisha Lin 
*/

const fs = require('fs');
const fastify = require("fastify")();
const { coinCount } = require('./p3-module.js');
//const http = require('http');

//const hostname = '127.0.0.1';
//const port = 8080;
fastify.get("/", (request, reply) => {
    fs.readFile(`${__dirname}/index.html`, (err, data) => {
        if (err) {
            reply
                .code(500)
                .header("Content-Type", "text/html; charset=utf-8")
                .send(`Server Error`)
        } else {
            reply
                .code(200)
                .header("Content-Type", "text/html; charset=utf-8")
                .send(data)
        }
    });
});



fastify.get("/coin", (request, reply) => {
    const { denom = 0, count = 0 } = request.query;
    const coinValue = coinCount({
        denom: parseInt(denom),
        count: parseInt(count),
    });
    reply
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
});


fastify.get("/coins", (request, reply) => {
    //let coinValue = 0 ;
    const { option } = request.query;
    let coins = [
        { denom: 25, count: 2 },
        { denom: 1, count: 7 }
    ];
    switch (option) {
        case "1":
            coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 }); // option = 1
            break;

        case "2":
            coinValue = coinCount(...coins);
            break;

        case "3":
            coinValue = coinCount(coins);
            break;
        default:
            coinValue = 0;
    }
    reply
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send(`<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`);
});



// Start server and listen to requests using Fastify
const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
    }
    console.log(`Server listening on ${address}`);
});