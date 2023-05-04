const fs = require("fs")

// synchronous way of creating read file

//  const data = fs.readFileSync("read.txt", "utf-8")
// console.log(data)
// console.log("this is synchronous way of reading data")


// asynchronous how itsv works


fs.readFile("read.txt", "utf-8", (err, data) => {
    console.log(data)
})

console.log("data is sucessfuly read from the file")