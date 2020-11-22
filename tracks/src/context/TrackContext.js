import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackreducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  };
};

const fetchTracks = dispatch => () => {

};

const createTrack = dispatch => (name, locations) => {
  console.log(name, locations.length);
};

export const { Provider, Context } = createDataContext(
  trackreducer,
  { fetchTracks, createTrack},
  []
)