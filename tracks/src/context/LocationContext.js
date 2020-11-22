import createDataContext from './createDataContext';

const locationReducer = (state, action) => {
  switch (action.type) {
    case 'add_current_location':
      return { ...state, currentLocation: action.payload };
    case 'start_recording':
      return { ...state, recording: true };
    case 'stop_recording':
      return { ...state, recording: false };
    default:
      return state;
  };
};

const startRecording = (dispatch) => {
  return () => {
    dispatch({ type: 'start_recording' })
  };
};

const stopRecording = (dispatch) => {
  return () => {  
    dispatch({ type: 'stop_recording '})
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