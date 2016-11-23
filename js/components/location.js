var React = require('react');
var router = require('react-router');
var Link = router.Link;

var Location = function(props) {
    return (
        <div>
            <strong>
            	<Link to={'/locations/'+ props.name}>
                	{props.name}
                </Link>
            </strong>
            {props.hours}
            {props.phoneNumber}
            {props.address}
            {props.website}
        </div>
    );
};

module.exports = Location;
