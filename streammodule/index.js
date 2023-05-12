// const fs = require("fs");
// const http = require("http");
// const server = http.createServer();
// server.on("request", (req, res) => {
//   const rstream = fs.createReadStream("api.json");
//   rstream.on("data", (chuckdata) => {
//     res.write(chuckdata);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });
//   rstream.on("error", (err) => {
//       console.log(err)
//       res.end(err)
//   });
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listing from the port number 8000");
// });

// const fs = require("fs");
// const http = require("http");
// const server = http.createServer();
// server.on("request",(req, res) => {
//   const rstream = fs.createReadStream("./api.json");
//   rstream.on("data", (chukdata) => {
//     res.write(chukdata);
//   });
//   rstream.on("end", () => {
//     res.end();
//   });
//   rstream.on("error", (err) => {
//     console.log(err);
//     res.end(err)
//   });
// });
// server.listen(8000, "127.0.0.1", () => {
//   console.log("listing from the port number 8000");
// });
const fs = require("fs");
const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  try {
    const rstream = fs.createReadStream("./api.json");

    rstream.pipe(res);
  } catch (error) {
    console.log(error.message);
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listing from port number 8000");
});
