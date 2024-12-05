import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function Step({navigation, route}) {
    const { array, id } = route.params;
    const item = array.find(item => item.id === id);
    return (
        <View style={styles.container}>
            <Text style={styles.itemName}>{item.id}. {item.name}</Text>
            <Text style={styles.itemDesc}>{item.description}</Text>
            {item.images ? item.images.map((image, index) => (
                <View key={index}>
                    <Image source={{uri: image}} style={{width: 200, height: 200}}/>
                </View>
            ))
            : null}
            <Button title="Go to Map"
                onPress={() => navigation.navigate('MapNav', {'array': array, 
                'initialLocation': {'latitude': item.latitude, 'longitude': item.longitude} })}/>
        </View>
    );
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
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
  