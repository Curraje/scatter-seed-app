import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function HomePage({navigation}: any) {
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


// Our App Root
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={ HomePage }
        />
        <Stack.Screen
          name="Tasks"
          component={ TasksPage }
        />
        
      </Stack.Navigator>
    </NavigationContainer>
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

