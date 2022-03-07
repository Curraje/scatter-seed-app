import React from "react";
//import { StatusBar } from "expo-status-bar";
// import { StyleSheet } from "react-native";
// import Header from "./components/Header";
// import CustomButton from "./components/CustomButton";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
//import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
//import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Login from "./screens/Login";
import Home from "./screens/Home";

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
//const Tab = createMaterialTopTabNavigator();
//const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{  }}
        
      >
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            title: "Home Screen",
          }}
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{
            title: "Login Screen",
            headerShown: false,
          }}
          initialParams={{ItemName:"Item from Drawer", ItemId: 1}}
        />
        <Stack.Screen
      </Stack.Navigator>
    </NavigationContainer>
  );
}
