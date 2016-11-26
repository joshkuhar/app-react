var React = require('react');
var Location = require('./location');
var DATA = require('../data');

var locationContainer = React.createClass ({
    render() {
    var location = DATA[this.props.params.locationId];
    return (
    	<div>
      		<Location name={location.name} />
    		<Location address={location.address} />
    		<Location phoneNumber={location.phoneNumber}/>
    		<Location hours={location.hours} />
    		<Location website={location.website} />
		</div>
    	);
    }                         
});

module.exports = locationContainer;
