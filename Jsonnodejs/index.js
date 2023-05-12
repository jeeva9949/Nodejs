// 1:create one object
// 2:convert that obj to the JSON and add that json data to another file
// 3:readfile
// 4:again convert back to js object to original object
// 5:console.log that orginal data

// const fs = require("fs")

// const biodata = {
//     name: "jeevanandha",
//     age: 20,
//     class: "B.tect",

// }

// console.log(biodata)
// const jsondata = JSON.stringify(biodata)
// console.log(jsondata)
// fs.writeFile("biojson.json", jsondata, (err) => {
//     // console.log(err)
// })

// fs.readFile("biojson.json", "utf-8", (err, data) => {
//     const originaldata = JSON.parse(data)
//     console.log(originaldata)
//     console.log(originaldata.name)
//     console.log(originaldata.age)
//     console.log(originaldata.class)
// })
const fs = require("fs");

const biodata = {
  name: "jeeva",
  age: 20,
  class: "B.TECH",
};
const jsonobje_1 = JSON.stringify(biodata);
fs.writeFile("bio_data.json", jsonobje_1, (err) => {
  console.log();
});

const http = require("http");
const server = http.createServer((req, res) => {
  const dataa = fs.readFileSync("biojson.json", "utf-8");
  const new_data = JSON.parse(dataa);
  if (req.url == "/") {
    const { name, age } = new_data;
    res.end(`name is ${name} & age is ${age} `);
  } else if (req.url == "/about") {
    res.end(`this is cames from about  ${name}`);
  } else {
    res.writeHead(404);
    res.end("404 error page not found");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listing from the port number 8000");
});
// const original_data = JSON.parse(reading_data);

// const http = require("http");
// const server = http.createServer((req, res) => {
//   if (req.url == "/") {
//     res.end(original_data);
//     res.end(
//       ` name of the user :${original_data.name} ,age is ${original_data.age},class is ${original_data.class}`
//     );
//   } else {
//     res.write(404, { "content-type": "text/html" });
//   }
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listing from the port number 8000");
// });
