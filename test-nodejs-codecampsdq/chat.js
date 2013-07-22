var io = require('socket.io').listen(8181);
var nicks = [];
var nick;

io.sockets.on("connection", function (client) {
	
	client.on("nickname", function(nick){
		nicks.push(nick);
		io.sockets.emit("nicknames", nicks);
		
		client.on("disconnect", function(){
			nicks.splice(nicks.indexOf(nick), 1);
			io.sockets.emit("nicknames", nicks);
		});
		
		client.on("msg", function (msg){
			io.sockets.emit("respuesta", { mensaje: msg, nick: nick });
		});
		
	});
	
});