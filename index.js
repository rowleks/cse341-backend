const http = require("http");
const data = require("./data.js");

const hostname = "127.0.0.1";
const port = 8080;

const app = http.createServer((req, res) => {
  // Set CORS headers to allow requests from any origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(data));
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:/${port}/professional`);
});
