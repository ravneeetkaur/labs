import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function Orange() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Orange</Text>
      <Image
        source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-6GoLpPXoOkT0lAuFcxXwJSQ7nxtRQqVJLg&s' }}
        style={styles.image}
      />
      <Button title="Home" onPress={() => router.replace('/')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  title: {
    fontSize: 24, marginBottom: 20
  },
  image: {
    width: 200, height: 200, borderRadius: 10
  }
});
