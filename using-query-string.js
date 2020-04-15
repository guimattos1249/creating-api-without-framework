var http = require('http');

var url = require('url');

var server = http.createServer(
	function(req, res) {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write('<h1>Dados da query string </h1>');

		var result = url.parse(req.url, true);

		for(var key in result.query) {
			res.write('<h2>' + key + ': ' + result.query[key] + '</h2>');
		}

		res.end();
	}
);

server.listen(3000, function() {});

console.log('Servidor Levantado em localhost:3000');