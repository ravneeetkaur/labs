import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button, TextInput, Alert } from 'react-native';
import { getUsers, addUser, updateUser, deleteUser } from './lab5/lib/supabase_crud';

type User = {
  id: number;
  age: number;
  name: string;
};

//
export default function Lab5() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [updateId, setUpdateId] = useState('');
  const [deleteId, setDeleteId] = useState('');
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      Alert.alert('Error', 'Could not fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async () => {
    if (!name || !age) {
      Alert.alert('Input Error', 'Name and age must be entered.');
      return;
    }
    try {
      await addUser({ name, age: Number(age) });
      setName('');
      setAge('');
      fetchUsers();
    } catch (error) {
      Alert.alert('Error', 'Sorry the user can not be added.');
    }
  };


  const handleUpdateUser = async () => {
    if (!updateId || (!name && !age)) {
      Alert.alert('Input Error', 'You must enter UserId or one of the fields for update.');
      return;
    }
    try {
      const updates: { age?: number; name?: string } = {};
      if (name) updates.name = name;
      if (age) updates.age = Number(age);
      await updateUser(Number(updateId), updates);
      setUpdateId('');
      setName('');
      setAge('');
      fetchUsers();
    } catch (error) {
      Alert.alert('Error', 'Could not update user');
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteId) {
      Alert.alert('Input Error', 'User ID required for delete');
      return;
    }
    try {
      await deleteUser(Number(deleteId));
      setDeleteId('');
      fetchUsers();
    } catch (error) {
      Alert.alert('Error', 'Could not delete user');
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>

      <Text style={{ marginTop: 30, fontWeight: 'bold', color: 'red', textAlign: 'center', fontSize: 20 }}>Add User</Text>
      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 6, marginVertical: 6 }}
      />
      <TextInput
        placeholder='Age'
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 6, marginBottom: 6 }}
      />
      <Button title="Create" onPress={handleAddUser} />

      <Text style={{ marginTop: 30, fontWeight: 'bold', color: 'red', textAlign: 'center', fontSize: 20}}>Update User</Text>
      <TextInput
        placeholder='User ID'
        value={updateId}
        onChangeText={setUpdateId}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 6, marginVertical: 6 }}
      />
      <TextInput
        placeholder='Name (optional)'
        value={name}
        onChangeText={setName}
        style={{ borderWidth: 1, padding: 6, marginVertical: 6 }}
      />
      <TextInput
        placeholder='Age (optional)'
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 6, marginBottom: 6 }}
      />
      <Button title="Update" onPress={handleUpdateUser} />

      <Text style={{ marginTop: 30, fontWeight: 'bold', color: 'red', textAlign: 'center',  fontSize: 20}}>Delete User</Text>
      <TextInput
        placeholder='User ID'
        value={deleteId}
        onChangeText={setDeleteId}
        keyboardType="numeric"
        style={{ borderWidth: 1, padding: 4, marginVertical: 4 }}
      />
      <Button title="Delete" onPress={handleDeleteUser} />

   <Text style={{ fontWeight: 'bold', fontSize: 20, marginBottom: 16, marginTop: 35, color: 'red', textAlign: 'center' }}>Sample Users</Text>
      <FlatList
        data={users}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 8 }}>
            <Text>
              {item.id}. {item.name} ({item.age} yrs)
            </Text>
          </View>
        )}
      />


    </View>
  );
}