import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signin':
      return { errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };  
    default:
      return state;
  };
};

const tryLocalSignin = dispatch => async () => {
  const token = await AsyncStorage.getItem('token');

  if(token) {
    dispatch({ type: 'signin', payload: token });
    navigate('TrackList')
  } else {
    navigate('Signup')
  };
};

const clearErrorMessage = dispatch => () => {
  dispatch({ type: 'clear_error_message' });
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signup', { email, password });
      await AsyncStorage.setItem('token', response.data.token);
      dispatch({ type: 'signin', payload: response.data.token });

      navigate('TrackList');
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong at sign up' })
    }
  };
};

const signin = dispatch => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });

    navigate('TrackList');
  } catch (err) {
    console.log(err)
    dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' });
  };
};


const signout = (dispatch) => {
  return () => {
  };
};


export const { Provider, Context } = createDataContext(authReducer, { signin, signout, signup, clearErrorMessage, tryLocalSignin }, { token: null, errorMessage: '' });