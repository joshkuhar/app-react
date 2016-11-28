var data = require('../data');

var FIND_LOCATIONS = 'FIND_LOCATIONS';
var findLocations = function(location) {
    return {
        type: FIND_LOCATIONS,
        location: location
    }
};

var ADD_LOCATIONS = 'ADD_LOCATIONS';
var addLocations = function(locations) {
	return {
		type: ADD_LOCATIONS,
		locations: locations
	}
};


var SELECT_LOCATION = 'SELECT_LOCATION';
var selectLocation = function(location) {
    return {
        type: SELECT_LOCATION,
        locations: location,
    };
};

exports.FIND_LOCATIONS = FIND_LOCATIONS;
exports.findLocations = findLocations;
exports.ADD_LOCATIONS = ADD_LOCATIONS;
exports.addLocations = addLocations;
exports.SELECT_LOCATION = SELECT_LOCATION;
exports.selectLocation = selectLocation;

var getLocations = function(location){
        if(location == data.Wu.name){
        	console.log(data);
        	return addLocations(data);
    }

};

exports.getLocations = getLocations;