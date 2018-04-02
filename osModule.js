const os = require('os'); // inbuilt node module
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

var hostname = os.hostname();
var platform = os.platform();

// Template String: ES 6 std
console.log(`Total Memory :: ${totalMemory}`);
console.log(`Free Memory :: ${freeMemory}`);
console.log(`Hostname :: ${hostname}`);
console.log(`Platform :: ${platform}`);