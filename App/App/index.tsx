import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// import MapboxGL from "@rnmapbox/maps";
import Routes from '../Routes';
import ErrorBoundary from '../Components/ErrorBoundary';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';
// MapboxGL.setConnected(true);
// MapboxGL.setWellKnownTileServer("Mapbox");
// MapboxGL.setAccessToken(
//   "pk.eyJ1IjoiY29sbGlucmVudHoiLCJhIjoiY2xlc3o0OWY1MDljejQxcGZpbXU1Y2o4byJ9.4LrQaTdWflnm2NuzztUS_Q"
// );

const App = () => {
  return (
    <ErrorBoundary>
      <SafeAreaProvider>
        <StatusBar />
        <Routes />
      </SafeAreaProvider>
    </ErrorBoundary>
  );
};

export default App;
