import MapView, { Marker } from 'react-native-maps';

import {styles as s} from './MapScreen.style';

export default function MapScreen({ route }) {
  const { location, locationData } = route.params;
  return (
    <MapView
      style={s.mapContainer}
      initialRegion={{
        ...locationData,
        latitudeDelta: 0.02,
        longitudeDelta: 0.02,
      }}
    >
      <Marker coordinate={{ ...locationData }} title={location} />
    </MapView>
  );
}
