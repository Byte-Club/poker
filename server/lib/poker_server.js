var path = require('path'),
webServer = require('express').createServer(),
siteDir = path.join(__dirname, '..', '..', 'site');

//start the webserver
webServer.listen(4021);

//route all asset requests to the assets folder:
webServer.get('/assets/*', function(req, res) {
	res.sendfile(path.join(siteDir, 'assets', req.params[0]));
});

//route all js requests to their folder
webServer.get('/js/*', function(req, res) {
	res.sendfile(path.join(siteDir,'js',req.params[0]));
});

//route / to the index ( to bootstrap the app)
webServer.get('/', function(req, res) {
	res.sendfile(path.join(siteDir, 'index.html'));
});

// handle all other GET requests
// exposes anything in the root of the site folder
webServer.get('/:filename.:format?', function(request, response) {
	var fmt = request.params.format || 'html',
	//default to html format
	file = path.join(siteDir, request.params.filename) + '.' + fmt;

	//if the file exists, send it, otherwise 404
	path.exists(file, function(exists) {
		if (exists) {
			response.sendfile(file);
		} else {
			response.send(404);
		}
	});
});

// start the app:
require('./main');
