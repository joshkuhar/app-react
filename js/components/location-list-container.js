var React = require('react');

var LocationList = require('./location-list');
var LOCATIONS = require('../data');

var LocationListContainer = function() {
    return <LocationList locations={LOCATIONS} />;
};

module.exports = LocationListContainer;