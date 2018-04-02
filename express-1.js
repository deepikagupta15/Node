const express = require('express');

var app = express(); // access to the express module / web Application

// HTTP GET 
app.get('/', (req,res) => {
	res.send("Hello World!!!")
})

app.get('/api/courses/:cname/:duration', (req,res) => {
	console.log("Query parameter::" + req.query)
	console.log("Request Parameters::" + req.params)
	res.send(JSON.stringify({"cName":'Angular JS',"CDuration": "12 Hours"}))
})

const port = process.env.port || 3000
app.listen(port);
console.log(`Server started at port number ::  ${port}`);