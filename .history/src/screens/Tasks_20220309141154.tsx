import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

function TasksPage({navigation}: any) {
  
    const onPressHandler = () => {
      navigation.navigate("Home");
    };
  
    return(
      <View style={styles.container}>
        <Text>Tasks!</Text>
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