var http = require('http');

var server = http.createServer(function (request, response){
	response.writeHeader(200);
	
	response.end('Hola CodeCampSDQ!');
});

server.listen(8181);
console.log('Listening on port 8181');