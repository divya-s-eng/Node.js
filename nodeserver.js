var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Welcome Node JS Server!');
    
}).listen(3000, '127.0.0.1', () => {
  console.log('Listening on 127.0.0.1:3000');
});
