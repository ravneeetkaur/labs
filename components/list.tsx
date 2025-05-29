import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const fruits = ['Apple', 'Orange', 'Mango'];

export default function List() {
  const router = useRouter();

  return (
    <View>
      {fruits.map((fruit, index) => (
        <Text
          key={index}
          style={styles.item}
          onPress={() => router.push(`/${fruit.toLowerCase()}`)}
        >
          {fruit}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 18,
    marginVertical: 5,
    color: 'rgb(29, 147, 194)',
    textDecorationLine: 'underline',
  },
});
