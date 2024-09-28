let url = 'http://mylogger.io/log';

function log(message) {
	// Send an HTTP request
	console.log(message);
}

module.exports = log; // Export the log function