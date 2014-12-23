var header = require('./header').header,
	footer = require('./footer').footer;

var root = header+'\
		<div>this is a view for root. I hope you like it.</div>\
		'+footer;

exports.root = root;