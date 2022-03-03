import React, { useState } from "react";
//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [name, setName] = useState("");

  return (
    <View style={styles.body}>
      <Text style={styles.text}>What&apos;s your name? </Text>
      <TextInput
        style={styles.input}
        placeholder="e.g. John"
        onChangeText={(value) => setName(value)}
      />
      <Text style={styles.text}>Your name is: {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignContent: "center",
  },
  text: {
    color: "#000000",
    fontSize: 24,
  },
  input: {
    width: 200,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    textAlign: "center",
    fontSize: 15,
  },
});
