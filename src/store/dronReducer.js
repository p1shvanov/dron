// action - state management
import * as actionTypes from './actions';

export const initialState = {
  ATTITUDE: [],
  TERRAIN_DATA: [],
  GLOBAL_POSITION_INT: [],
  HEARTBEAT: [],
  SYS_STATUS: [],
  PARAM_VALUE: [],
  EFK_STATUS_REPORT: [],
  TERRAIN_REPORT: [],
  WIND: [],
  AOA_SSA: [],
  ESC_TELEMETRY_1_TO_4: [],
  SCALED_PRESSURE: [],
  LOCAL_POSITION_NED: []
};

// ==============================|| data REDUCER ||============================== //

const dronReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_ATTITUDE:
      return {
        ...state,
        ATTITUDE: [...state.ATTITUDE, action.payload]
      };
    case actionTypes.SET_TERRAIN_DATA:
      return {
        ...state,
        TERRAIN_DATA: [...state.TERRAIN_DATA, action.payload]
      };
    case actionTypes.SET_GLOBAL_POSITION_INT:
      return {
        ...state,
        GLOBAL_POSITION_INT: [...state.GLOBAL_POSITION_INT, action.payload]
      };
    case actionTypes.SET_HEARTBEAT:
      return {
        ...state,
        HEARTBEAT: [...state.HEARTBEAT, action.payload]
      };
    case actionTypes.SET_SYS_STATUS:
      return {
        ...state,
        SYS_STATUS: [...state.SYS_STATUS, action.payload]
      };
    case actionTypes.SET_PARAM_VALUE:
      return {
        ...state,
        PARAM_VALUE: [...state.PARAM_VALUE, action.payload]
      };
    case actionTypes.SET_EFK_STATUS_REPORT:
      return {
        ...state,
        EFK_STATUS_REPORT: [...state.EFK_STATUS_REPORT, action.payload]
      };
    case actionTypes.SET_TERRAIN_REPORT:
      return {
        ...state,
        TERRAIN_REPORT: [...state.TERRAIN_REPORT, action.payload]
      };
    case actionTypes.SET_WIND:
      return {
        ...state,
        WIND: [...state.WIND, action.payload]
      };
    case actionTypes.SET_AOA_SSA:
      return {
        ...state,
        AOA_SSA: [...state.AOA_SSA, action.payload]
      };
    case actionTypes.SET_ESC_TELEMETRY_1_TO_4:
      return {
        ...state,
        ESC_TELEMETRY_1_TO_4: [...state.ESC_TELEMETRY_1_TO_4, action.payload]
      };
    case actionTypes.SET_ESC_TELEMETRY_1_TO_4:
      return {
        ...state,
        ESC_TELEMETRY_1_TO_4: [...state.ESC_TELEMETRY_1_TO_4, action.payload]
      };
    case actionTypes.HIL_SENSOR:
      return {
        ...state,
        HIL_SENSOR: [...state.HIL_SENSOR, action.payload]
      };
    case actionTypes.SCALED_PRESSURE:
      console.log('wow');
      return {
        ...state,
        SCALED_PRESSURE: [...state.SCALED_PRESSURE, action.payload]
      };
    case actionTypes.LOCAL_POSITION_NED:
      console.log('wow');
      return {
        ...state,
        LOCAL_POSITION_NED: [...state.LOCAL_POSITION_NED, action.payload]
      };
    default:
      return state;
  }
};

export default dronReducer;
