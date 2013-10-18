module.exports = function(debug) {
	var red = '\033[31m'
	, green = '\033[32m'
	, yellow = '\033[33m'
	, blue = '\033[34m'
	, magenta = '\033[35m'
	, cyan = '\033[36m'
	, reset = '\033[0m';
	return {
		log: function(message) {
			console.log('[INFO] ' + message);
		},
		debug: function(message) {
			if (debug)
				console.log(cyan + '[DEBUG] ' + reset + message);
		},
		success: function(message) {
			console.log(green + '[SUCCESS] ' + reset + message);
		},
		warn: function(message) {
			console.log(yellow + '[WARN] ' + reset + message);
		},
		error: function(message) {
			console.log(red + '[ERROR] ' + reset + message);
		}
	};
};