import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import locationicon from '../../assets/locationicon.png';
import { useState } from 'react';

export default function Map() {
  const [selectedLocation, setSelecteedLocation] = useState(null);

  const handleMapPress = (e) => {
    const { coordinate } = e.nativeEvent;
    setSelecteedLocation(coordinate)
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onPress={handleMapPress}
        initialRegion={{
          latitude: 16.0973,
          longitude: 108.2216,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {selectedLocation && (
          <Marker coordinate={selectedLocation} />
        )}
      </MapView>
      <View style={styles.marker}>
        <Text>Your Location</Text>
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <Image source={locationicon} style={{ marginRight: 15, marginVertical: 8 }} />
          <Text style={{ fontWeight: "700", letterSpacing: 0.5, marginBottom: 10 }}>4517 Washington Ave. Manchester, Kentucky 39495</Text>
        </View>
        <TouchableOpacity style={styles.button}><Text style={{ color: "white" }}>Set Location</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    position: 'absolute',
    bottom: 30,
    left: 15,
    right: 15,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 18
  },
  button: {
    width: 386,
    height: 57,
    backgroundColor: "rgba(107, 80, 246, 1)",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 9
  }
});
