const EventEmitter = require("events");
const fs = require("fs");
const events = new EventEmitter();

events.on("jeeva_func", () => {
  console.log("jeeva funcrtion  is excuted");
});
events.on("jeeva_func", () => {
  console.log("nandha funcrtion  is excuted");
});
events.emit("jeeva_func");

events.on("output", (sc, msg) => {
  console.log(`status code is ${sc} and mesg:${msg}`);
});
events.emit("output", 200, "ok");
fs.readFile(`E:/nodelearn/simpleapi/simpleapi.json`, "utf-8", (err, data) => {
  console.log(data);
});
