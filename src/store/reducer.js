import { combineReducers } from 'redux';

// reducer import
import customizationReducer from './customizationReducer';
import dronReducer from './dronReducer';
import mapReducer from './mapReducer';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
    customization: customizationReducer,
    dron: dronReducer,
    map: mapReducer
});

export default reducer;
