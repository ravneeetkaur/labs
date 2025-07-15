import { View, Text, Button, StyleSheet } from 'react-native';
import List from '../components/list';
import { useRouter } from 'expo-router'; 
import vacationDestinations from '../lib/vacationsDestinations';


export default function Home() {
  const router = useRouter();

  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Button title="Click Me" onPress={handlePress} />

       <View style={{ marginTop: 20 }}>
        <Button title="Lab 5" onPress={() => router.push('/lab5')} />
      </View>

      <View style={{ marginTop: 20 }}>
        <Button title="Lab 3" onPress={() => router.push('/lab3')} />
      </View>

       <View style={{ marginTop: 20 }}>
        <Button title="Lab 4" onPress={() => router.push('/lab4')} />
      </View>

      <Text style={styles.subtitle}>Fruit List:</Text>
      <List />
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
    fontSize: 22,
    marginBottom: 20,
  },
  subtitle: {        
    fontSize: 20,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
  },
});
