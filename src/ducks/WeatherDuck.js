
// Adapted from: https://github.com/erikras/ducks-modular-redux

// Actions stuff
const CHANGE_CITY = 'react-test-app/weather/CHANGEDATA';
const LOAD_CITY = 'react-test-app/weather/LOADDATA';

export const changeCity = city => {
    return {
        type: CHANGE_CITY,
        payload: { city: city }
    };
}

export const loadCity = weatherData => {
    return {
        type: LOAD_CITY,
        payload: weatherData
    };
}

export const loadWeather = city => {
    return (dispatch, getState) => {
        const city = getState().weather.city; // Another haxor for getting state from the action creator
        fetch('https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22'
            + city
            + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys')
            .then(response => response.json())
            .then(jsondata => dispatch(loadCity(jsondata.query.results.channel)))
            .catch(e => console.log("Exception: " + e));
    }
}

// Reducer stuff
const defaultState = {
    ready: false,
    city: 'Rajamäki',
    weatherdata: {}
}

export default function weatherReducer(state = defaultState, action = {}) {
    const { type, payload } = action;
    /*    console.log("weatherReducer: state, type, payload");
        console.log(state);
        console.log(type);
        console.log(payload);*/

    switch (type) {
        case CHANGE_CITY:
            return {
                ...state,
                ready: false,
                city: payload.city,
            };

        case LOAD_CITY:
            return {
                ...state,
                ready: true,
                weatherdata: payload
            };

        default:
            return state;
    }
}


