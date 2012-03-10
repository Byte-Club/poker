var path = require('path'),
app = require('express').createServer();
app.listen(4021);

app.get('/', function(req, res) {
	console.log(req);
	res.send('hello world');
});

//route all asset requests to the assets folder:
app.get('/assets/*', function(req, res) {
	res.sendfile(__dirname + "/site/assets/" + req.params[0]);
});

//route / to the index ( to bootstrap the app)
app.get('/', function(req, res) {
	res.sendfile(__dirname + "/site/index.html");
});

// handle all other GET requests
webServer.get('/:filename.:format?', function(request, response) {
	var fmt = request.params.format || 'html',
	//default to html format
	file = __dirname + '/site/' + request.params.filename + '.' + fmt;

	//if the file exists, send it, otherwise 404
	path.exists(file, function(exists) {
		if (exists) {
			response.sendfile(file);
		} else {
			response.send(404);
		}
	});
});

