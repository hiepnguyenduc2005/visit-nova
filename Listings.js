import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Listings({ route, navigation }) {
  const array = route.params.array;

  return (
    <View style={styles.container}>
      <FlatList
        data={array}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.border,
              {
                backgroundColor: index % 2 === 0 ? 'white' : '#00274d'
              },
            ]}
            onPress={() => navigation.navigate('Stop', { id: item.id, array: array })}
          >
            <Image source={{ uri: item.images[0] }} style={styles.image} />
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.itemName,
                  { color: index % 2 === 0 ? '#00274d' : 'white' }, // Dark blue font for even, white font for odd
                ]}
                numberOfLines={2}
              >
                {item.id}. {item.name}
              </Text>
              <Text
                style={[
                  styles.itemDesc,
                  { color: index % 2 === 0 ? '#00274d' : 'white' }
                ]}
              >
                {item.subtitle}
              </Text>
            </View>
          </TouchableOpacity>        
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  itemDesc: {
    fontSize: 14,
    color: '#555',
    marginTop: 4,
  },
  border: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    // borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});
