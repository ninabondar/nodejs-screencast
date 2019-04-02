const http = require("http");
const url = require("url");

const server = new http.Server(); // == EventEmitter
server.listen(8000);


const handleReq = (req, res) => {
  console.log(req.method, req.url);

  let parsedUrl = url.parse(req.url, true);
  console.log(parsedUrl, "parsed", parsedUrl.query);
  res.end(parsedUrl.query.message);
};

server.on("request", (req, res) => handleReq(req, res));
