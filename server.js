const http = require("http");
const url = require("url");

const server = new http.Server(); // == EventEmitter

const validURLs = ["index.html", "contact.html"];

const handleReq = (req, res) => {
  let parsedUrl = url.parse(req.url, true);
  if (validURLs.includes(parsedUrl.pathname.slice(1))) {
    console.log("=====SUCCCEEEEESS======", parsedUrl.pathname);
    res.statusCode = 200;
    res.end(JSON.stringify(parsedUrl.query));
  } else {
    res.statusCode = 404;
    res.end("sorry, no such page found");
  }
};

server.on("request", (req, res) => handleReq(req, res));


server.listen(8000);