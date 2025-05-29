import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Mango() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mango</Text>
      <Image
        source={{ uri: 'https://product-images.metro.ca/images/hf6/ha2/10460988473374.jpg' }}
        style={styles.image}
      />
      <Button title="Home" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24, 
    marginBottom: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 200, 
    height: 200, 
    borderRadius: 10,
  },
});
