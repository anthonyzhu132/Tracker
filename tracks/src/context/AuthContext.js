import createDataContext from './createDataContext';
import trackerAPI from '../api/tracker';
import { AsyncStorage } from 'react-native';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  };
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerAPI.post('/signup', {email, password });
      await AsyncStorage.setItem('token', response.data.token);
      
      console.log(response.data);
    } catch (err) {
      dispatch({ type: 'add_error', payload: 'Something went wrong at sign up' })
    }
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    
  };
};

const signout = (dispatch) => {
  return () => {
    
  };
};


export const { Provider, Context } = createDataContext(authReducer, { signin, signout, signup }, { isSignedIn: false, errorMessage: '' });