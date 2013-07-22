var http = require('http');
var fs = require('fs')

var server = http.createServer(function (request, response) {

	var archivo = fs.createWriteStream("stream.txt");
	var totalBytes = request.headers['content-length'];
	var uploaded = 0;

	request.pipe(archivo);

	request.on('data', function (chunk) {
		uploaded += chunk.length;
		var progress = (uploaded / totalBytes) * 100;
		response.write("progreso: " + parseInt(progress, 10) + "%\n");
	});

	request.on('end', function (){
		response.end('Archivo Subido!');
	});
});

server.listen(8000);