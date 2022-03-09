import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import "react-native-gesture-handler";

export default function HomePage({navigation}: any) {
  const onPressHandler = () => {
    navigation.navigate("Tasks");
  };
  
    return(
      <View style={styles.container}>
        <Text>Welcome to the Home Page</Text>
        <StatusBar style="auto" />
        <Pressable
          onPress={ onPressHandler }
          style={({pressed}) => ({backgroundColor: pressed ? "#555" : "#ddd"})}
        >
          <Text style={styles.text}>Tasks</Text>
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