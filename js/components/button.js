var React = require('react');
var ReactDOM = require('react-dom');

var Button = function(props){

	return (
		<div>
			<button className = 'myButton' onClick={props.fetch}> {props.title} </button>
		</div>
		);
};

module.exports = Button;


