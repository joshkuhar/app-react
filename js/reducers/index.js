var actions = require('../actions/index');

var initialLocationState = {};

var locationReducer = function(state, action) {
    state = state || initialLocationState;
    if (action.type === actions.FIND_LOCATIONS) {
        return {
            name: action.location
        };
    }
    else if (action.type === actions.SELECT_LOCATION) {
        // Find the index of the matching location
        var index = -1;
        for (var i=0; i<state.length; i++) {
            var location = state[i];
            if (location.name === action.location) {
                index = i;
                break;
            }
        }

        if (index === -1) {
            throw new Error('Could not find location');
        }

        var before = state.slice(0, i);
        var after = state.slice(i + 1);
        var newLocation = Object.assign({}, location, {rating: action.rating});
        return before.concat(newLocation, after);
    }

    return state;
};

exports.locationReducer = locationReducer;