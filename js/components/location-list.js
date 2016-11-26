var React = require('react');
var Location = require('./location');

var LocationList = function(props) {
    var locations = Object.keys(props.locations)
        .map(function(locationId, index) {
            var location = props.locations[locationId];
            console.log(location);
            return (
                <li key={index}>
                    <Location name={location.name}/>
                </li>
            );
        });
    return (
        <ul>
            {locations}
        </ul>
    );
};

module.exports = LocationList;

/*
    hours={location.hours} 
    phoneNumber={location.phoneNumber}
    address={location.address}
    website={location.website}
*/

