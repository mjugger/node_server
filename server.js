var http = require('http'),
	url = require('url'),
	os = require('os');

function start(route,handle){

	function request(req,res){
		var pathName = url.parse(req.url).pathname;
		route(handle,pathName,res);
	}

	http.createServer(request).listen(3000,'localhost');
	console.log('server is running now!');
}


exports.start = start;