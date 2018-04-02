// events module return EventEmitter class
const EventEmitter = require('events');
const emitter = new EventEmitter(); // instantiate an object

// register a listener for the event
emitter.on('messageLogged', (arg)=> {
	console.log("message Logged event handled::" + arg.id + "  url logged at->" + arg.url);
});

//raise an event. You can pass information about the event
emitter.emit('messageLogged',{"id":1,"url":'http://'});