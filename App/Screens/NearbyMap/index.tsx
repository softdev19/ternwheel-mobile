import React, { useEffect, useState } from 'react';
import { View, Dimensions, Platform, Image } from 'react-native';
import { PageContainer } from '../../Containers';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker } from 'react-native-maps';
import MapBottomSheet from './components/MapBottomSheet';
const MarkerOne = require('../../Components/Marker.png');

const NearbyMap = () => {
  const [region, setRegion] = useState<any>(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const toggle = () => {
    setVisible((visible) => !visible);
  };
  const [visible, setVisible] = useState(false);

  const OnMarkerPress = (marker: any) => {
    setSelectedMarker(marker);
  };

  const markers = [
    {
      id: 1,
      title: 'Marker 1',
      description: 'This is marker 1',
      coordinate: { latitude: 37.7609, longitude: -122.435 },
    },
    {
      id: 2,
      title: 'Marker 2',
      description: 'This is marker 2',
      coordinate: { latitude: 37.7654, longitude: -122.4242 },
    },
    {
      id: 3,
      title: 'Marker 3',
      description: 'This is marker 3',
      coordinate: { latitude: 37.7684, longitude: -122.437 },
    },
    {
      id: 4,
      title: 'Marker 4',
      description: 'This is marker 4',
      coordinate: { latitude: 37.7684, longitude: -122.43 },
    },
  ];
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
    <PageContainer>
      <View
        style={{
          width: '100%',
          height: Platform.OS === 'ios' ? Dimensions.get('screen').height - 320 : Dimensions.get('screen').height - 320,
          // marginTop: Platform.OS === "ios" && 120,
        }}
      >
        <MapView style={{ flex: 1 }} region={region} showsUserLocation>
          {markers.map((markers) => {
            return (
              <Marker
                key={markers.id}
                coordinate={markers.coordinate}
                // title={marker.title}
                // description={marker.description}
                onPress={toggle}
                tracksViewChanges={false}
                image={MarkerOne}
              />
            );
          })}
        </MapView>
      </View>
      <MapBottomSheet visible={visible} toggle={toggle} />
    </PageContainer>
  );
};

export default NearbyMap;
