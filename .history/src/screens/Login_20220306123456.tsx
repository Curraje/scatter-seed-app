import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";


export default function Login() {
  return (
    <View 
      style={styles.loginBody}>
          <Image 
    style={styles.loginImage}></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0080ff",
  },
  loginImage: {
      width:100,
      height: 100,
      margin: 20,
  },
});