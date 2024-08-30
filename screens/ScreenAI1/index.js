import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Text, Image, TouchableOpacity } from 'react-native';

const ProfileScreen = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <Text style={styles.headerText}>Profile Information</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name</Text>
        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Enter your name" />
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} onChangeText={setDateOfBirth} value={dateOfBirth} placeholder="YYYY-MM-DD" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5'
  },
  header: {
    padding: 20,
    backgroundColor: '#6200ee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  headerText: {
    color: '#fff',
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  inputContainer: {
    padding: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
    color: '#333'
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 5,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6200ee',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
export default ProfileScreen;