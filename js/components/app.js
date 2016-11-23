var React = require('react');
var NavBar = require('./nav-bar');

var App = function(props) {
    return (
        <div>
            <h1>
                Restaurant Roulette App
            </h1>
            <h4> 
                <NavBar />
            </h4>
            <div>
                {props.children}
            </div>
        </div>
    );
};

module.exports = App;