import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload }
    default:
      return state;
  };
};

const startRecording = (dispatch) => {
  return () => {

  };
};

const stopRecording = (dispatch) => {
  return () => {

  };
};

const addLocation = (dispatch) => {
  return (location) => {
    dispatch({ type: 'add_current_location', payload: location })
  };
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null }
)