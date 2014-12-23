var header = require('./header').header,
	footer = require('./footer').footer;

var hiThere = header+'\
		<div>this is a view for hiThere. see ya soon.</div>\
		'+footer;

exports.hiThere = hiThere;