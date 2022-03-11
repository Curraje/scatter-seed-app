import React from "react";
//import { StatusBar } from "expo-status-bar";
// import { StyleSheet } from "react-native";
// import Header from "./components/Header";
// import CustomButton from "./components/CustomButton";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./screens/ScreenA";
import ScreenB from "./screens/ScreenB";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
//const Tab = createMaterialTopTabNavigator();
//const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Screen_A"
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",
          headerStyle:{
            backgroundColor: "#0080ff",
          }, 
          headerTintColor: "#ffffff",
          headerTitleStyle:{
            fontSize: 25,
            fontWeight: "bold",
          }
        }}
        
      >
        <Drawer.Screen 
          name="Screen_A" 
          component={ScreenA}
          options={{
            title: "Screen A Title",
            drawerIcon: ({focused}) => 
              <FontAwesome5
                name="autoprefixer"
                size={focused ? 25 : 30} 
                color={focused ? "#0080ff" : "#999999"}
              />
          }}
        />
        <Drawer.Screen 
          name="Screen_B" 
          component={ScreenB} 
          options={{
            title: "Screen B Title",
            drawerIcon: ({focused}) => 
              <FontAwesome5
                name="btc"
                size={focused ? 25 : 30} 
                color={focused ? "#0080ff" : "#999999"}
              />
          }}
          initialParams={{ItemName:"Item from Drawer", ItemId: 1}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}