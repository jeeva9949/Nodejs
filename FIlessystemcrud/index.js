let fs = require("fs");
// fs.writeFileSync("bio.txt", "this is new data for the practice");
// fs.appendFileSync("bio.txt", "    more data to the exiring file");
// let result = fs.readFileSync("bio.txt", "utf8");
// console.log(result);
// fs.renameSync("bio.txt", "mybio.txt");
// fs.unlinkSync("mybio.txt");
// fs.unlinkSync("index.js");
// fs.unlinkSync("index")

// fs.mkdirSync("thapa")



// challenge 5


fs.writeFileSync("thapa/bio.txt", "this is new data from the index file ")
fs.appendFileSync("thapa/bio.txt", "    appended data from the append file synch")
let res = fs.readFileSync("thapa/bio.txt", "utf8")
console.log(res)
fs.renameSync("thapa/bio.txt", "thapa/mybio.txt")
fs.unlinkSync("filesystemcrud/mybio.txt")
fs.rmdirSync("filesystemcrud")

