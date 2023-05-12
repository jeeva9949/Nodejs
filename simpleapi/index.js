const fs = require("fs");
const http = require("http");

const jsondata = fs.readFileSync("simpleapi.json", "utf-8");
const orig_object = JSON.parse(jsondata);

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("<h1> Welcome to home page </h1>");
  } else if (req.url == "/userapi") {
    res.writeHead(200,{"content-type":"application/json"})
    res.end(orig_object[0].name);
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("<h1 style='color:red'>404 error page ,page does not exits</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listing from the port number 8000");
});
