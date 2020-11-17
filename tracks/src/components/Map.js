import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
  
  return <>
    <MapView
    style={styles.map} 
    initialRegion={{
      latitude: 49.229190,
      longitude: -123.064830,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01
    }}
    >
      
    </MapView>
  </>
};

const styles = StyleSheet.create({
  map: {
    height: 300
  }
});

export default Map;