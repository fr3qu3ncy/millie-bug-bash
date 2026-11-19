const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 8400;
const PUBLIC = path.join(__dirname, "public");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".json": "application/json",
};

const server = http.createServer((req, res) => {
  let file = req.url === "/" ? "/index.html" : req.url.split("?")[0];
  file = path.normalize(file).replace(/^([.][.][/\\])+/, "");
  const full = path.join(PUBLIC, file);
  if (!full.startsWith(PUBLIC)) {
    res.writeHead(403); res.end("forbidden"); return;
  }
  fs.readFile(full, (err, data) => {
    if (err) { res.writeHead(404); res.end("not found"); return; }
    res.writeHead(200, {
      "Content-Type": MIME[path.extname(full)] || "application/octet-stream",
      "Cache-Control": "no-cache",
    });
    res.end(data);
  });
});

server.listen(PORT, () => console.log(`millie-bug-bash on :${PORT}`));
