const EE = require("events").EventEmitter;

const server = new EE();

server.on("request", req => {
  req.approved = true;
  console.log(req);
});

server.emit("request", {
  from: "Client 1"
});

server.on("error", err => {
  console.log(err.name, "name!");
});

server.emit("error", new Error());
