var dbTestInfoView = require('./views/dbTestInfo').dbTestInfo,
	hiThereView = require('./views/hiThere').hiThere,
	rootView = require('./views/root').root;
function root(response){
	console.log('root path requsted.');
	response.writeHead(200,{'content-type':'text/html'});
	response.write(rootView);
	response.end();
}

function dbTestInfo(response){
	console.log('dbTestInfo path requsted.');
	response.writeHead(200,{'content-type':'text/html'});
	response.write(dbTestInfoView);
	response.end();
}

function hiThere(response){
	console.log('hiThere path requsted.');
	response.writeHead(200,{'content-type':'text/html'});
	response.write(hiThereView);
	response.end();
}

exports.root = root;
exports.dbTestInfo = dbTestInfo;
exports.hiThere = hiThere;