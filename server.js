const http = require("http");
const url = require("url");
const fs = require("fs");

const server = new http.Server(); // == EventEmitter
const port = 8000;
server.on("request", (req, res) => handleReq(req, res));
server.listen(port, () => {
  console.log("Listening at http://localhost:" + port);
});

const sendRequest = (res, data) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
    "Content-Length": data.length
  });
  res.write(data);
  res.end();
};

const handleReq = (req, res) => {
  let parsedUrl = url.parse(req.url);

  if (parsedUrl.pathname === "/") {
    fs.readdir(__dirname, (err, files) => {
      if (err) {
        console.error("===file error===");
      } else if (files.includes("index.html")) {
        fs.readFile("index.html", "utf-8", (error, file) => {
          if (error) {
            console.log(error, "===file error===");
          }
          sendRequest(res, file);
        });
      }
    });
  } else {
    res.statusCode = 404;
    res.end("something went wrong");
  }
};
