import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapNav({ route, navigation }) {
  const array = route.params.array;
  const [currentLocation, setCurrentLocation] = useState(null);
  const initialLocation = route.params.initialLocation || null;

  useEffect(() => {
    const getUserLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status === 'granted') {
        let location = await Location.getCurrentPositionAsync({});
        setCurrentLocation({
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        });
      }
    };
    getUserLocation();
  }, []);

  const region = initialLocation || currentLocation;

  if (!region) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: region.latitude,
            longitude: region.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          showsUserLocation={true}
          followsUserLocation={true}
          customMapStyle={mapStyle}
        >
          {array &&
            array.map((item, index) => (
              <Marker
                key={index}
                draggable
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
                title={item.name}
                description={item.description}
                onCalloutPress={() =>
                  navigation.navigate('Step', { array: array, id: item.id })
                }
              />
            ))}
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const mapStyle = [
  { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
  // Additional styles...
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
