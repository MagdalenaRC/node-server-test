const http = require('node:http')
const server = http.createServer((request, response) => {
    response.statusCode = 404;
    response.end("Hello Galvanize!");
  });

  server.listen(3001, "localhost", () => {
    console.log(`Server running at http://localhost:3001/`);
  });