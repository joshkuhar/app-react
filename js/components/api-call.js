require('babel-polyfill');
require('isomorphic-fetch');
var React = require('react');
var ReactDOM = require('react-dom');
var Button = require('./button');
var SearchBox = require('./input-box');
var Display = require('./display');

var React = require('react');
var ReactDOM = require('react-dom');



var SearchFourSquare = function(props) {
    var url = "https://api.foursquare.com/v2/venues/search?";
    var clientId = "client_id=LT5PEZMUYPGXVYMZX0BDR1O2001DFRSKWV2DWI3AFFEPDWJZ";
    var secret = "&client_secret=MYGCCF0ENAGRFLGAUKMOKYFIDJGULKUW0V0Q3UENAWVO2R2P";
    var version = "&v=20161121";
    var longLat = "&ll=39.9,-75.1";
    var query = "&query=sushi";
    var m = "$m=foursquare";
    var searchUrl = url+clientId+secret+version+longLat+query+m;
};


var Search = React.createClass({
    getInitialState: function() {return null},
    onButtonClick: function() {},
    render: function() {
        return (
            <div>
                <SearchBox value={SearchFourSquare} />
                <Button onClick={this.onButtonClick} title="Search" />
                <Display phrase="search results go here" />
            </div>
        );
    }
});

module.exports = Search;

