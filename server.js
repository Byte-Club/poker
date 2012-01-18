var app = require('express').createServer(),
    io = require('socket.io').listen(app);

app.listen(4021);

// app.get('*/', function(req, res) {
//   res.sendfile(__dirname + "/site/index.html");
// });

//route all asset requests to the assets folder:
app.get('/assets/*', function(req, res) {
  res.sendfile(__dirname + "/site/assets/" +req.params[0]);
});
app.get('/vendor/*', function(req, res) {
  res.sendfile(__dirname + "/site/vendor/" +req.params[0]);
});


//route everything else to the index ( to bootstrap the app)
app.get('*', function(req, res) {
  res.sendfile(__dirname + "/site/index.html");
});

// //UNUSED - more specific file matching:
// var requestURI = req.params[0];
// if(!requestURI.match(/\.[^\/]+$/) && !requestURI.match(/\/$/)) { requestURI += '/'; }
// if(requestURI.match(/\/$/)){ requestURI += 'index.html'; }
// res.sendfile(__dirname + "/site" +requestURI);


/**
 * Socket I/O
 */
// var appFile = new App.FileJSON("images", function(json) {
//   console.log(json);
//   io.sockets.emit('input', json);
// });

// io.sockets.on('connection', function(socket) {
//   socket.emit('input', appFile.get('json'));
// });

// require('./server/main');