const express = require('express');
const router = require('./routeCustomer');

var app = express(); // access to the express module / web Application
app.use(express.json()); // middleware function that enables express to process data appended in the request body via json
app.use('/api', router);

const port = process.env.port || 3000
app.listen(port);
console.log(`Server started at port number ::  ${port}`);