const path = require("path");

console.log(path.dirname("E:/nodelearn/Pathmodule/path.js"));
console.log(path.extname("E:/nodelearn/Pathmodule/path.js"));
console.log(path.basename("E:/nodelearn/Pathmodule/path.js"));

const mypath = path.parse("E:/nodelearn/Pathmodule/path.js");
console.log(mypath)

// console.log(mypath.root);
// console.log(mypath.dir);

// console.log(mypath.basename);
// console.log(mypath.name);
