var React = require('react');
var Location = require('./location');

var LocationList = function(props) {
    var locations = Object.keys(props.locations);
    var vals = Object.values(props.locations);
    console.log(vals);
    var locals = locations.map(function(locationId, index) {
            var location = props.locations[locationId];
            return (
                <li key={index}>
                    <Location name={location.name}/>
                </li>
            );
        });
    return (
        <ul>
            {locals}
        </ul>
    );
};


module.exports = LocationList;
    

