require('babel-polyfill');
require('isomorphic-fetch');
var React = require('react');
var ReactDOM = require('react-dom');
var router = require('react-router');
var Router = router.Router;
var Route = router.Route;
var hashHistory = router.hashHistory;
var IndexRoute = router.IndexRoute;
var App = require('./components/app');
var LocationListContainer = require('./components/location-list-container');
var NavBar = require('./components/nav-bar');
var LocationContainer = require('./components/location-container');

var routes = (
    <Router history={hashHistory}>
        <Route path="/locations" component={App}>
            <IndexRoute component={LocationListContainer} />
            <Route path=":locationId" component={LocationContainer} />
        </Route>
    </Router>
);

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(routes, document.getElementById('app'));
});

	
/*


*/