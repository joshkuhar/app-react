var React = require('react');
var LocationList = require('./location-list');
var LOCATIONS = require('../data');
var connect = require('react-redux').connect;
var actions = require('../actions/index');
var Location = require('./location');



var showLocations = React.createClass({
	onClick: function(){
		var searchTerm = this.textInput.value;
		this.props.dispatch(actions.getLocations(searchTerm));
	},
	render(){
		console.log(this.props.locations);
		return (
			<div>
				<div>
	                <input type="text" ref={function(element) {
	                    this.textInput = element;
	                }.bind(this)} />
	                <button type="button" onClick={this.onClick}>
	                    Search
	                </button>
	            </div>
	            <div>
					<LocationList locations={this.props.locations.name} />
	            </div>
                	
            </div>
			
			);
	}
});
var mapStateToProps = function(state, props){
	return {
		locations: state
	};
};

var Container = connect(mapStateToProps)(showLocations);

module.exports = Container;

//<Location name={this.props.locations.name} />