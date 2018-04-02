const EventEmitter = require('events');
//const emitter = new EventEmitter();

class Logger extends EventEmitter {
	log(message) {
	console.log("From console::::" + message);
	
	// raise an event
	this.emit('messageLogged',{"message":message + " is being logged"});
	}
}


// exporting the Logger class
module.exports = Logger; 