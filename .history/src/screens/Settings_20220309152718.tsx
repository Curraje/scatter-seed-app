import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";
import GlobalStyles from "../utils/GlobalStyles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SettingsPage({navigation}: any) {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };
  
  return(
    <View style={GlobalStyles.body}>
      <Text>Settings</Text>
      <StatusBar style="auto" />
      <Pressable
        onPress={ onPressHandler }
        style={({pressed}) => ({backgroundColor: pressed ? "#555" : "#ddd"})}
      >
        <Text style={styles.text}>Home</Text>
      </Pressable>
    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 14,
    alignItems: "center",
    fontWeight: "bold",
  },
});