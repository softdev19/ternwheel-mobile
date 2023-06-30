import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
// import MapboxGL from "@rnmapbox/maps";
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';

const MapboxSmal = () => {
  const [region, setRegion] = useState<any>(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      (position) => {
        setRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  }, []);
  return (
    <View
      style={{
        width: 286,
        height: 128,
        borderRadius: 8,
        overflow: 'hidden',
      }}
    >
      <MapView style={{ flex: 1 }} region={region} showsUserLocation>
        {/* <Marker
        coordinate={{
          latitude: region?.latitude || 0,
          longitude: region?.longitude || 0,
        }}
        title="Your Location"
      /> */}
      </MapView>
    </View>
  );
};

export default MapboxSmal;
