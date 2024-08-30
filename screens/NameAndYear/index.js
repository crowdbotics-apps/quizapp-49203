import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, Button, View, Text } from 'react-native';

const App = () => {
  const [nameSurname, setNameSurname] = useState('');
  const [yearOfBirth, setYearOfBirth] = useState('');

  const handleSubmit = () => {
    alert(`Name and Surname: ${nameSurname}\nYear of Birth: ${yearOfBirth}`);
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name and Surname</Text>
        <TextInput style={styles.input} onChangeText={setNameSurname} value={nameSurname} placeholder="Enter your name and surname" />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Year of Birth</Text>
        <TextInput style={styles.input} onChangeText={setYearOfBirth} value={yearOfBirth} placeholder="Enter your year of birth" keyboardType="numeric" />
      </View>
      <Button title="Submit" onPress={handleSubmit} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  inputContainer: {
    width: '80%',
    marginBottom: 20
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10
  },
  label: {
    marginBottom: 5
  }
});
export default App;