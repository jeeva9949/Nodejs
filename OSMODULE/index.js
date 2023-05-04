const os = require("os")

// which architecture in the system is using
let res = os.arch()
console.log(res)

// free memory in the system
const freememory = os.freemem()
// console.log(freememory)
console.log(freememory / 1024 / 1024 / 1024)

// total memory in the system
const totalmemory = os.totalmem()
console.log(totalmemory / 1024 / 1024 / 1024)


// host name of the system
const hostname = os.hostname()
console.log(hostname)

// which platform it is running
const platforms = os.platform()
console.log(platforms)


console.log(os.tmpdir())

console.log(os.type())