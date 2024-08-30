import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, TextInput } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <TextInput style={styles.input} placeholder="Name" />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  }
});
export default Untitled2;