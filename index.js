var http = require('http'),
	os = require('os');

http.createServer(function(req,res){
	res.writeHead(200,{'content-type':'text/html'});
	res.end('<!DOCTYPE html><html><body><p>Hi!<br/>My name is '+os.hostname()+'. I am your computer.</p></body></html>');
	console.log(req.url);
}).listen(3000,'localhost');

console.log('server is running now!');