import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { firestore } from './firebase';
import { collection, getDocs } from '@firebase/firestore';

export default function Home({ navigation, route }) {
  const [array, setArray] = useState([]);

  useEffect(() => {
    const fetchCollection = async () => {
      const snapshot = await getDocs(collection(firestore, 'locations'));
      const docs = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setArray(docs);
    };
    fetchCollection();
  }, []);

  return (
    <ImageBackground
      source={{
        uri: 'https://www1.villanova.edu/university/professional-studies/villanova-cps-experience/advising/academic_support_professional_education/campus_services_pe/_jcr_content/root/container/container/container_1731001697/container/image.coreimg.jpeg/1574356842499/campus-final.jpeg',
      }}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to VISIT NOVA</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Listings', { array })}
        >
          <Text style={styles.buttonText}>View Listings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('MapNav', { array, initialLocation: null })}
        >
          <Text style={styles.buttonText}>Open Map</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 39, 77, 0.6)', // Semi-transparent dark blue overlay
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#00274d', // Dark blue
    paddingVertical: 15,
    paddingHorizontal: 20,
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
