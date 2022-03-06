/* eslint-disable indent */
import React from "react";
import { View, StyleSheet, Image } from "react-native";


export default function Login() {
  return (
    <View 
      style={styles.loginBody}>
        <Image 
        style={styles.loginImage}
        source={require("../../assets/bruce.png")}
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
});