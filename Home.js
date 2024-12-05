import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({navigation, route}) {

    const array = [
            {id: 1,         
                name: 'Bartley Hall',
                latitude: 40.0347413,
                longitude: -75.3382572,
                description: 'Villanova School of Business',
                images: ['https://villanovan.com/wp-content/uploads/2017/01/268198c67ec76e22fc55dd1aaeef434d-2.jpg'],
            },
            {id: 8,
                name: 'Mendel Science Center',
                latitude: 40.03791333324271,
                longitude: -75.34316532634855,
                description: 'Science Labs',
                images: ['https://djkeating.com/wp-content/uploads/2020/01/01.jpg'],        
            },
        ];
    return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button title="Listings" 
            onPress={() => navigation.navigate('Listings', {'array': array})}/>
          <Button title="MapNav"
            onPress={() => navigation.navigate('MapNav', {'array': array, 
            'initialLocation': {'latitude': 40.0347413, 'longitude': -75.3382572}})}/>
        </View>
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