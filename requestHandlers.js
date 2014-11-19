var dbTestInfoView = require('./views/dbTestInfo').dbTestInfo;
function root(response){
	console.log('root path requsted.');
	response.writeHead(200,{'content-type':'text/html'});
	response.write('this is the root.');
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
	response.write('this is the hiThere route.');
	response.end();
}

exports.root = root;
exports.dbTestInfo = dbTestInfo;
exports.hiThere = hiThere;