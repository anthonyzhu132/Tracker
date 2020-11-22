import { useContext } from 'react';
import { Context as TrackContext } from '../context/TrackContext';
import { Context as LocationContext } from '../context/LocationContext';

export default () => {
  //Pulling out createTrack action
  const { createTrack } = useContext(TrackContext);

  //Pulling out Location and name from state object from LocationContext
  const { state: { locations, name }} = useContext(LocationContext);

  //Putting createTrack in a variable to call anytime 
  const saveTrack = () => {
    createTrack(name, locations);
  };

  return [saveTrack];
};