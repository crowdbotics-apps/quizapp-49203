import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Text, Platform, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');

  const handleSubmit = () => {
    alert(`Name: ${name}, Date of Birth: ${dateOfBirth}`);
  };

  return <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.inner}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.logo} />
        <TextInput style={styles.input} onChangeText={setName} value={name} placeholder="Enter your name" />
        <TextInput style={styles.input} onChangeText={setDateOfBirth} value={dateOfBirth} placeholder="YYYY-MM-DD" />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  inner: {
    width: '80%'
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16
  },
  logo: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    borderRadius: 10
  }
});
export default App;