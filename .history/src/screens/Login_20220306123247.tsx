import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Image } from "react-native-paper/lib/typescript/components/Avatar/Avatar";


export default function Login() {
  return (
    <View 
      style={styles.loginBody}>
          <Image></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBody: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0080ff",
  }
});