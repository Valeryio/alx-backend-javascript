const http = require('http');
const port = 1245;
const hostname = '127.0.0.1';

const requestHandler = (request, response) => {
  response.end('Hello Holberton School!');
}

const app = http.createServer(requestHandler);
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;