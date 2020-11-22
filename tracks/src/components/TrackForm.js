import React, { useContext }from 'react';
import { Input, Button } from 'react-native-elements';
import Spacer from './Spacer';
import { Context as LocationContext } from '../context/LocationContext';


const TrackForm = () => {
  const { state: { name, recording }, 
    startRecording, 
    stopRecording, 
    changeName 
  } = useContext(LocationContext);


  return <>
    <Spacer>
      <Input value={name} onChangeText={changeName} placeholder="Enter Name"/>
    </Spacer>
    {recording
      ? <Button onPress={stopRecording} title="Stop" /> 
      : <Button onPress={startRecording} title="Start Recording" />
    }
  </> 
};

export default TrackForm;