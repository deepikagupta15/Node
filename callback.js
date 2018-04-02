function callback() {
	console.log("My call is being deffered!!!");
}

setTimeout(callback,5000) // create a delay

console.log("I am at the end!!!");
