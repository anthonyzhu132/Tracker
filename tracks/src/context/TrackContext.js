import { ActionSheetIOS } from 'react-native';
import createDataContext from './createDataContext';
import CreateDataContext from './createDataContext';

const trackreducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

const fetchTracks = dispatch => () => {

};

const createTrack = dispatch => () => {

};

export const { Provider, Context } = createDataContext(
  trackreducer,
  { fetchTracks, createTrack},
  []
)