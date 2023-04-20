const http = require("http");
const fs = require("fs"); // memanggil module file sistem

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  const url = req.url;
  console.log(url);
  if (url === "/about") {
    res.write("<h1>Ini adalah halaman about</h1>");
    res.end();
  } else if (url === "/contact") {
    res.write("<h1>This is contact pages</h1>");
    res.end();
  } else {
    fs.readFile("./index.html", (err, data) => {
      if (err) {
        res.writeHead(404);
        res.write("Error: file not found");
      } else {
        res.write(data);
      }
      res.end();
    });
  }
});

server.listen(3000, () => {
  console.log("Server is listening on port 3000...");
});
