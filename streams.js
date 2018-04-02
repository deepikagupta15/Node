const fs = require('fs');

var readStream = fs.createReadStream('input.txt');
var writeStream = fs.createWriteStream('dest.txt');
var contents = '';

readStream.on('data', (res) => {
	contents+=res;
})

readStream.on('end', () => {
	console.log(contents);
})

writeStream.write("Hello, Good Afternoon!!");
//writeStream.end();

writeStream.on('finish', ()=> {
	console.log("Data written successfully!!!");
});

readStream.pipe(writeStream);