const http = require('http'); // nodes HTTP module

// req : HTTP Request : carry the data from client to the server
// res : from the server: HTTP response
const server = http.createServer((req,res) => {
	if(req.url === '/') {
		res.write("Hello World!");
		res.end();
	}
	
	if(req.url === '/api/courses') {
		res.write(JSON.stringify([{"cName":'Angular JS',"CDuration": "12 Hours"},
		{"cName":'Node JS',"CDuration": "10 Hours"}]));
		res.end();
	}
});

// Node Runtime Envt / Hosting envt to allocate a port number
const port = process.env.port || 3000
server.listen(port);
console.log(`Server started at port number ::  ${port}`);