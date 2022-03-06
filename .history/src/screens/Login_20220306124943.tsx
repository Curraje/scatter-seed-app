/* eslint-disable indent */
import React from "react";
import { View, StyleSheet, Image, Text, TextInput } from "react-native";
import CustomButton from "../utils/CustomButton";


export default function Login() {
  return (
    <View 
      style={styles.loginBody}
    >
      <Image 
        style={styles.loginImage}
        source={require("../../assets/bruce.png")}
      />
      <Text style={styles.loginText}>Async Storage</Text>
      <TextInput 
        style={styles.loginInput}
        placeholder="Username"
      />
      <CustomButton
        title="Login"
        
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginBody: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0080ff",
  },
  loginImage: {
      width:100,
      height: 100,
      margin: 20,
      resizeMode: "contain"
  },
  loginText: {
      fontSize: 35,
      fontWeight: "bold",
  },
  loginInput: {
    width: 300,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});