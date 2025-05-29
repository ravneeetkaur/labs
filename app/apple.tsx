import { router } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Apple() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apple</Text>
      <Image
        source={{ uri: 'https://product-images.metro.ca/images/h17/h85/10379029184542.jpg' }}
        style={styles.image}
      />
      <Button title="Home" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    },
  title: {
    fontSize: 24, marginBottom: 20
  },
  image: {
    width: 200, height: 200, borderRadius: 10
  }
});
