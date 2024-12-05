import { StyleSheet, Text, View, Button } from 'react-native';
import { firestore } from './firebase';
import { collection, getDocs } from "@firebase/firestore";
import { useEffect, useState } from 'react';

export default function Home({navigation, route}) {
    const [array, setArray] = useState([]);

    useEffect(() => {
        const fetchCollection = async () => {
            const snapshot = await getDocs(collection(firestore, "locations"));
            const docs = snapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));
            setArray(docs);
        }
        fetchCollection();
    }, []);

    return (
        <View style={styles.container}>
          <Text>Home Screen</Text>
          <Button title="Listings" 
            onPress={() => navigation.navigate('Listings', array)}/>
          <Button title="MapNav"
            onPress={() => navigation.navigate('MapNav', array)}/>
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
