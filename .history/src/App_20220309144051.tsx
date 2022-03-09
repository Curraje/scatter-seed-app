import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./screens/Home";
import TasksPage from "./screens/Tasks";

const Stack = createStackNavigator();


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

