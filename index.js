var server = require('./server'),
	router = require('./router'),
	requestHandlers = require('./requestHandlers'),
	handle = {};

handle['/'] = requestHandlers.root;
handle['/dbTestInfo'] = requestHandlers.dbTestInfo;
handle['/hiThere'] = requestHandlers.hiThere;

server.start(router.route,handle);