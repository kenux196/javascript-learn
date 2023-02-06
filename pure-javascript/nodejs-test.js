let http = require('http');

http.createServer(fucntion(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain'});
  response.end('Hello world')
}).listen(9090);
console.log("Server running at http://127.0.0.1:9090");