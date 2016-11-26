var React = require('react');
var ReactDOM = require('react-dom');

var Item = function(props){
	return (
		<div id={props.id}>
			{props.phrase}
		</div>
		);
};

module.exports = Item;