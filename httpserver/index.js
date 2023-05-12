// const http = require("http");
// // const url = require("url");
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url == "/") {
//     res.end("this is home page ");
//   } else if (req.url == "/contact") {
//     res.end("this is contact  page");
//   } else if (req.url == "/about") {
//     res.end("this is about page");
//   } else {
//     res.end("404 errror page not found");
//   }
// });

// server.listen(1000, "127.0.0.1", () => {
//   console.log("listing is going on 1000 port ");
// });

// const http = require("http");
// const server = http.createServer((req, res) => {
//   console.log(req.url);
//   if (req.url == "/") {
//     res.end("this is home page");
//   } else if (req.url == "/about") {
//     res.end("this is about page");
//   } else if (req.url == "/contact") {
//     res.end("this is contact page");
//   } else {
//     res.writeHead(404, { "content-type": "text/html" });
//     res.end("<h1 style = 'color:red'>404 error page ,page doesn't exits</h1>");
//   }
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listing from the port 8000");
// });

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("this is home page ");
  } else if (req.url == "/about") {
    res.end("this is about page ");
  } else if (req.url == "/contact") {
    res.end("this is contact page ");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404 error page page not exits");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("this is listing from the  8000 port number ");
});
