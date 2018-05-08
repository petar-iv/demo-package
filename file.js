var server = require('http').createServer(function(req, res) {
	res.end('This message comes from the dependency');
});

server.listen(process.env.PORT || 3000);
