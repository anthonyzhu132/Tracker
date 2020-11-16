import React, { useEffect, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import Map from '../components/Map';
import { SafeAreaView } from 'react-navigation';
import { requestPermissionsAsync } from 'expo-location';

const TrackCreateScreen = () => {

  const [err, setErr] = useState(null);

  const startWatching = async () => {
  try {
    const { granted } = await requestPermissionsAsync();
    if (!granted) {
      throw new Error('Location permission not granted');
    }
  } catch (e) {
    setErr(e);
  }
};

  useEffect(() => {
    startWatching();
  }, []);

  return (
    <SafeAreaView forceInset={{ top: 'always' }}>
      <Text h2>Create a Track</Text>
      <Map />
      {err ? <Text>Please enable location</Text> : null}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;