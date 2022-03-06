import React from "react";
//import { StatusBar } from "expo-status-bar";
// import { StyleSheet } from "react-native";
// import Header from "./components/Header";
// import CustomButton from "./components/CustomButton";
import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import * as materialTopTabs from "@react-navigation/material-top-tabs";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./components/ScreenA";
import ScreenB from "./components/ScreenB";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

// const Tab = createBottomTabNavigator();
// const Tab = createMaterialBottomTabNavigator();
const Tab = materialTopTabs.createMaterialTopTabNavigator();
//const Drawer = 
//const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }: any) => ({
          tabBarActiveTintColor: "#f3f",
          tabBarInactiveTintColor: "#555",
          tabBarActiveBackgroundColor: "#fff",
          tabBarInactiveBackgroundColor: "#999",
          tabBarShowLabel: true,
          tabBarLabelStyle: { fontSize: 14 },
          tabBarIcon: ({ focused, /*size,*/ color }) => {
            let iconName = "";
            if (route.name === "Screen_A") {
              iconName = "autoprefixer";
              //size=focused ? 20 : 30;
              color = focused ? "#f3f" : "#555";
            } else if (route.name === "Screen_B") {
              iconName = "btc";
              //size=focused? 20 : 30;
              color = focused ? "#f3f" : "#555";
            }
            return (
              <FontAwesome5
                name={iconName}
                //size={size}
                color={color}
              />
            );
          },
        })}
      >
        <Tab.Screen
          name="Screen_A"
          component={ScreenA}
          options={
            {
              //tabBarBadge: 2,
            }
          }
        />
        <Tab.Screen name="Screen_B" component={ScreenB} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   body: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     fontSize: 40,
//     fontWeight: "bold",
//     margin: 10,
//   },
// });
