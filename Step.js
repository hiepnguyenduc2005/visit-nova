import { StyleSheet, Text, View, Button } from 'react-native';

export default function Step({navigation, route}) {
    const item = route.params;
    
    return (
        <View style={styles.container}>
            <Text style={styles.itemName}>{item.id}. {item.name}</Text>
            <Text style={styles.itemDesc}>{item.description}</Text>
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
  