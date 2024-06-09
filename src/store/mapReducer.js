// action - state management
import * as actionTypes from './actions';

export const initialState = {
    mapOptions: {
        modules: ['geocode', 'SuggestView'],
        defaultOptions: { suppressMapOpenBlock: true },
        width: 600,
        height: 400
    },
    geolocationOptions: {
        defaultOptions: { maxWidth: 128 }
    },
    state: {
        title: '',
        center: [],
        zoom: 17
    },
    coordinates: []
};

const mapReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SET_MAP_OPTIONS:
            return {
                ...state,
                mapOptions: action.payload
            };
        case actionTypes.SET_MAP_GEO_OPTIONS:
            return {
                ...state,
                geolocationOptions: action.payload
            };
        case actionTypes.SET_MAP_COORDINATES:
            return {
                ...state,
                coordinates: [...state.coordinates, action.payload]
            };
        case actionTypes.SET_MAP_STATE:
            return {
                ...state,
                state: { ...state.state, ...action.payload }
            };
        default:
            return state;
    }
};

export default mapReducer;
