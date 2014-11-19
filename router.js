function router(handle,pathname,response){
	console.log('routing a path to: ',pathname);
	if(typeof handle[pathname] == 'function'){
		handle[pathname](response);
	}else{
		console.log('no handler found for: ',pathname);
		response.writeHead(404,{'Content-Type':'text/plain'});
		response.write('404 not found.');
		response.end();
	}
}

exports.route = router;