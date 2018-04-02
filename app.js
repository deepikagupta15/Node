
function sayHello(name) {
	console.log("Hello::" + name);
}

sayHello("Yukti");

var message = "Good Evevening";
console.log(module);
console.log("File name" + __filename);
console.log("Dirname" + __dirname);

// import a module: require 
const logger = require('./looger'); // refer logger object and file name
logger.log('Checking for custom module');