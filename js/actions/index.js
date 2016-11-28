var data = require('../data');

var FIND_LOCATIONS = 'FIND_LOCATIONS';
var findLocations = function(location) {
    return {
        type: FIND_LOCATIONS,
        location: location
    }
};



var SELECT_LOCATION = 'SELECT_LOCATION';
var selectLocation = function(location) {
    return {
        type: SELECT_LOCATION,
        location: location,
    };
};

exports.FIND_LOCATIONS = FIND_LOCATIONS;
exports.findLocations = findLocations;
exports.SELECT_LOCATION = SELECT_LOCATION;
exports.selectLocation = selectLocation;

var getLocations = function(location){
        if(location == data.Wu.name){
        	console.log(data);
        	return findLocations(data);
    }

};

exports.getLocations = getLocations;