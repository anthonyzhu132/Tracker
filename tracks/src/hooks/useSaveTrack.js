import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';
import { navigate } from '../navigationRef';

export default () => {
  //Pulling out createTrack action
  const { createTrack } = useContext(TrackContext);

  //Pulling out Location and name from state object from LocationContext
  const { state: { locations, name }, reset } = useContext(LocationContext);

  //Putting createTrack in a variable to call anytime 
  const saveTrack = async () => {
    await createTrack(name, locations);
    reset();
    navigate('TrackList');
  };

  return [saveTrack];
};