var React = require('react');
var Location = require('./location');
var DATA = require('../data');

var LocationContainer = function(props) {
    var location = DATA[props.params.locationId];
    return (
    	<div>
      		<Location name={location.name} />
    		<Location address={location.address} />
    		<Location phoneNumber={location.phoneNumber}/>
    		<Location hours={location.hours} />
    		<Location website={location.website} />
		</div>
    );                         
};

module.exports = LocationContainer;
