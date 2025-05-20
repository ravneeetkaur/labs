import { StatusBar } from 'expo-status-bar';
import { View, Text, Pressable, Alert, StyleSheet } from 'react-native';

type GroupMember = {
  name: string;
  github_repo: string;
  group_no: string;
};

const groupMembers: GroupMember[] = [
  { name: 'Ashnoor Kaur', github_repo: 'ashnoorkaur', group_no: '6' },
  { name: 'Ravneet Kaur', github_repo: 'ravneet280', group_no: '6' },
  { name: 'Deepinder Singh', github_repo: 'deepindersingh09', group_no: '6' },
];


export default function App() {
  return (
     <View style={styles.container}>
      <Text style={styles.heading}>Group Members:</Text>
      {groupMembers.map((member, index) => (
        <Text key={index} style={styles.member}>
          {member.name}
        </Text>
      ))}

      <Pressable onPress={() => Alert.alert('Lab 1 done')} style={styles.button}>
        <Text style={styles.buttonText}>Submit Lab</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
   container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  member: {
    fontSize: 18,
    marginBottom: 5,
  },
  button: {
    marginTop: 10,
    backgroundColor: '#D32F2F',
    padding: 10,
    borderRadius: 10,
    borderWidth: 5,
    borderColor: '#D32F2F',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
