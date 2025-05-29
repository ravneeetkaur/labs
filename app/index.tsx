import { View, Text, Button, StyleSheet } from 'react-native';
import List from '../components/list';

export default function Home() {
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the App!</Text>
      <Button title="Click Me" onPress={handlePress} />
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
