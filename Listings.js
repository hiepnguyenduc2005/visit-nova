import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View, Image } from 'react-native';

export default function Listings ({ route, navigation }) {
    const array = route.params.array;
    // console.log(array);
    return (
        <View style={styles.container}>
            <FlatList
            data={array}
            renderItem={({item}) => 
                <View style={styles.border} >
                    <Image source={{uri: item.images[0]}} style={{width: 100, height: 100}}/>
                    <Text style={styles.itemName}  onPress={() => navigation.navigate('Step', {'id': item.id, 'array': array})}>
                      {item.id}. {item.name}
                    </Text>
                </View>
            } />           
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingBottom: 50,
  },
  itemName: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  itemDesc: {
    padding: 10,
    fontSize: 10,
    height: 44,
  },
  border: {
    flex: 1,
    borderWidth: 1,
    borderColor: "gray",
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});
  
