module.exports.showDebug = false;

colors = {
	red: '\033[31m',
	green: '\033[32m',
	yellow: '\033[33m',
	blue: '\033[34m',
	magenta: '\033[35m',
	cyan: '\033[36m',
	white: '\033[0m'
};
module.exports.colors = colors;

levels = {
	info: {
		color: 'white',
		debug: false
	},
	debug: {
		color: 'cyan',
		debug: true
	},
	success: {
		color: 'green',
		debug: false
	},
	warn: {
		color: 'yellow',
		debug: false
	},
	error: {
		color: 'red',
		debug: false
	}
};
module.exports.levels = levels;

genericLog = function() {
	var name = arguments[0];
	var arguments = arguments[1];
	
	var upperName = name.toUpperCase();
	var color = colors[levels[name].color];
	
	if (!levels[name].debug || module.exports.showDebug) {
		var log = color + "[" + upperName + "] " + colors.white;
		for (var i = 0; i < arguments.length; i++) {
			if (typeof arguments[i] != 'object') {
				log += arguments[i];
			} else {
				log += JSON.stringify(arguments[i]);
			}
			log += ' ';
		}
		console.log(log);
	}
};

generateGeneric = function(name) {
	eval(
		'module.exports.' + name + ' = function ' + name + '() {' +
		'	genericLog(arguments.callee.name, arguments);' +
		'};'
	);
};

generateGeneric('info');
generateGeneric('debug');
generateGeneric('success');
generateGeneric('warn');
generateGeneric('error');

module.exports.addLevel = function(name, color, debug) {
	if (typeof color != 'string' || typeof colors[color] == 'undefined') {
		color = 'white';
	}
	if (typeof debug == 'boolean') {
		debug = false;
	}
	levels[name] = {
		'color': color,
		'debug': debug
	}
	generateGeneric(name);
};

module.exports.removeLevel = function(name) {
	delete levels[name];
	delete module.exports[name];
};