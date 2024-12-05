import React, { useEffect, useState } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default function Listings ({ route, navigation }) {
    const listData = route.params;
    // console.log(listData);
    return (
        <View style={styles.container}>
            <FlatList
            data={listData}
            renderItem={({item}) => 
                <View style={styles.border}>
                    <Button title={`${item.id}. ${item.name}`} onPress={() => navigation.navigate('Step', item)}/>
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
      borderWidth: 1,
      borderColor: "gray",
    },
});
  
