import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Alert } from 'react-native';
import * as Location from 'expo-location'; // Use expo-location for permissions
import Home from './Home';
import MapView from './MapNav';
import Listings from './Listings';
import Step from './Step';

const Stack = createNativeStackNavigator();

export default function App() {
  const [locationPermission, setLocationPermission] = useState(null);

  const requestLocationPermission = async () => {
    try {
      // Request foreground location permission
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          'Location Permission',
          'Permission to access location was denied. Default location will be used.',
          [{ text: 'OK' }]
        );
        setLocationPermission('denied');
      } else {
        setLocationPermission('granted');
      }
    } catch (error) {
      console.error('Failed to request location permission:', error);
    }
  };

  useEffect(() => {
    requestLocationPermission();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MapNav" component={MapView} />
        <Stack.Screen name="Listings" component={Listings} />
        <Stack.Screen name="Step" component={Step} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
