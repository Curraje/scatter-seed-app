import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Login() {
  return (
    <View 
      style={styles.loginBody}
    >

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