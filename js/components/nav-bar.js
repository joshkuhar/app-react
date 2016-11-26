var React = require('react');
var ReactDOM = require('react-dom');
var NavItem = require('./nav-item');

var NavBar = function(props){
	return (
		<div>
			<NavItem id="id1" phrase="About" />
			<NavItem id="id2" phrase="Start Again" />
			<NavItem id="id3" phrase="Dining Roulette" />
		</div>
		);
};

module.exports = NavBar;
