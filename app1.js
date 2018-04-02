const EventEmitter = require('events');
//const emitter = new EventEmitter();

const Logger = require('./logger1'); 
const obj = new Logger(); // creating Logger class object

// handle the event
obj.on('messageLogged',(arg)=>{
	console.log("Listener called::" + arg.message);
})


obj.log('Checking for Event emission module');