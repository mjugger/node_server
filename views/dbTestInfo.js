var header = require('./header').header,
	footer = require('./footer').footer;

var dbTestInfo = header+'\
		<div>this is a view for dbTestInfo</div>\
		'+footer;

exports.dbTestInfo = dbTestInfo;