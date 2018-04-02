const express = require('express');
const mongoose = require('mongoose');
const route = require('./employeeRoute');

var app = express(); // access to the express module / web Application
// connect to mongoDB:
mongoose.connect('mongodb://localhost:27017/test'); // test is the DB name

mongoose.connection.on('connected', function(){
	console.log("Connected to DB mongodb @ 27017");
});

app.use(express.json()); // middleware function that enables express to process data appended in the request body via json
app.use('/api', route);

const port = process.env.port || 3000
app.listen(port);
console.log(`Server started at port number ::  ${port}`);