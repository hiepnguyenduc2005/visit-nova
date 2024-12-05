import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';

export default function MapNav({ route, navigation }) {
  const { array, initialLocation } = route.params;
  const [currentLocation, setCurrentLocation] = useState(initialLocation);

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
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: initialLocation.latitude || currentLocation.latitude,
            longitude: initialLocation.longitude || currentLocation.longitude,
            latitudeDelta: 0.00922,
            longitudeDelta: 0.00421,
          }}
          showsUserLocation={true} 
          followsUserLocation={true} 
          customMapStyle={mapStyle}
          >
          {array ? array.map((item, index) => (
          //   <Marker
          //   key={item.id}
          //   coordinate={{
          //     latitude: item.latitude,
          //     longitude: item.longitude,
          //   }}
          //   draggable
          //   onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
          // >
          //   <View style={styles.customMarker}>
          //     <Text style={styles.markerText}>{item.id}</Text>
          //   </View>
          // </Marker>
          <Marker
              key={index}
              draggable
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude
              }}
              onDragEnd={
                (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
              }
              title={item.name}
              description={item.description}
              onCalloutPress={() => navigation.navigate('Step', { array: array, id: item.id })}              
          />
          ))
        : null}
        </MapView>
      </View>
    </SafeAreaView>
  );
}

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{color: '#263c3f'}],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{color: '#6b9a76'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{color: '#38414e'}],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{color: '#212a37'}],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{color: '#9ca5b3'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{color: '#746855'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{color: '#1f2835'}],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{color: '#f3d19c'}],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [{color: '#2f3948'}],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [{color: '#d59563'}],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{color: '#17263c'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{color: '#515c6d'}],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [{color: '#17263c'}],
  },
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
  customMarker: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
