const fs = require('fs'); // File System module of node js
/*var result = fs.readFileSync('input.txt');
console.log(result.toString());
*/

fs.readFile('input.txt', (err,data) => {
	if(err) {
		console.log(err);
	} else {
		console.log(data.toString());
	}
});

/*fs.writeFile('output.txt',"From node file program\r\nNext Line", (err) => {
	if(err) {
		console.log(err);
	}else {
		console.log("Data Written");
	}
})*/

fs.appendFile('output.txt',"From node file program\r\nNext Line", (err) => {
	if(err) {
		console.log(err);
	}else {
		console.log("Data Written");
	}
})

fs.readdir('./', (err,data) => {
	if(err) {
		console.log(err);
	} else {
		console.log("Files in current directory::" + data.toString());
	}
})
console.log("Done");