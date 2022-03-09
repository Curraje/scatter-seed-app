import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./screens/Home";
import TasksPage from "./screens/Tasks";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


// Our App Root
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        
      >
        <Tab.Screen
          name="Home"
          component={ HomePage }
        />
        <Tab.Screen
          name="Tasks"
          component={ TasksPage }
        />
        
      </Tab.Navigator>
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

