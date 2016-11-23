var React = require('react');
var ReactDOM = require('react-dom');

var inputBox = function(props) {
	return (
		<label>
			<input type="text" value={props.value} onChange={props.onChange} />
		</label>
		);
};

module.exports = inputBox;
