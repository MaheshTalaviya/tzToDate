//var lodash = require("lodash");
exports.dateTime = function(data) {

	var m = new Date(data);
	var dateString =  ("0" + m.getUTCDate()).slice(-2) +  "/"+("0" + (m.getUTCMonth()+1)).slice(-2) + "/" + m.getUTCFullYear();
	return dateString;

}