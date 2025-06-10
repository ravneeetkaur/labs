import { View, Text, StyleSheet, Button } from 'react-native';
import { useState } from 'react';
import Increment from '../components/increment';
import Decrement from '../components/decrement';
import { router } from 'expo-router';

export default function Lab3() {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lab 3 - Counter</Text>
            <View style={styles.buttonContainer}>
                <Increment count={count} setCount={setCount} />
                <Decrement count={count} setCount={setCount} />
            </View>
            <Text style={styles.counter}>Current Count: {count}</Text>
            <Button title="Home" onPress={() => router.replace('/')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'red',
        marginTop: 0
    },
    counter: {
        fontSize: 18,
        marginVertical: 20,
        fontWeight: 'bold'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 15,
    },
});
