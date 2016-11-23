var React = require('react');
var ReactDOM = require('react-dom');

var Display = function(props){
	return(
	<div>
		{props.phrase}
	</div>
		);
};

module.exports = Display;