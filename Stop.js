import React from 'react';
import { StyleSheet, Text, View, Image, Button, FlatList, TouchableOpacity } from 'react-native';

export default function Stop({ navigation, route }) {
  const { array, id } = route.params;
  const item = array.find((item) => item.id === id);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.itemName}>{item.id}. {item.name}</Text>
        <Text style={styles.itemSub}>{item.subtitle}</Text>
      </View>
      {item.images ? (
        <FlatList
          data={item.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item: image }) => (
            <View style={styles.imageContainer}>
              <Image source={{ uri: image }} style={styles.image} />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : null}
      <Text style={styles.itemDesc}>{item.description}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Listings', { array: array })}
        >
          <Text style={styles.buttonText}>View Listings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('MapNav', {
              array: array,
              initialLocation: { latitude: item.latitude, longitude: item.longitude },
            })
          }
        >
          <Text style={styles.buttonText}>Open Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: '#00274d',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: 'center',
  },
  itemName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
    textAlign: 'center',
  },
  itemSub: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    marginVertical: 0, 
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  itemDesc: {
    fontSize: 16,
    color: '#00274d',
    marginTop: 10, 
    // textAlign: 'center',
    flex: 1,
  },  
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#00274d',
    padding: 15,
    borderRadius: 8,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
