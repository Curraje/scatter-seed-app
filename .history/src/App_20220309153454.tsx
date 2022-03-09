import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./screens/Home";
import TasksPage from "./screens/Tasks";
import SettingsPage from "./screens/Settings";
import GardenPage from "./screens/Garden";
import CalendarPage from "./screens/Calendar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

const Tab = createBottomTabNavigator();

// Our App Root
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={
          ({ route }) => ({
            tabBarActiveTintColor: "#ff8533",
            tabBarInactiveTintColor: "#000",
            tabBarActiveBackgroundColor: "#35a4e3",
            tabBarInactiveBackgroundColor: "#62b8ea",
            tabBarShowLabel: true,
            tabBarLabelStyle: {fontSize: 14,},
            tabBarIcon: ({focused, size, color}) => {
              let iconName = "";
              if (route.name === "Home") {
                iconName="building";
                size=focused ? 14 : 30;
                color=focused ? "#ff8533" : "#000";
              } else if (route.name === "Tasks") {
                iconName="list-alt";
                size=focused? 20 : 30;
                color=focused ? "#ff8533" : "#000";
              }
              else if (route.name === "Garden") {
                iconName="envira";
                size=focused? 20 : 30;
                color=focused ? "#ff8533" : "#000";
              }
              else if (route.name === "Calendar") {
                iconName="calendar";
                size=focused? 20 : 30;
                color=focused ? "#ff8533" : "#000";
              }
              else if (route.name === "Settings") {
                iconName="sun";
                size=focused? 20 : 30;
                color=focused ? "#ff8533" : "#000";
              }
              return (
                <FontAwesome5
                  name={iconName}
                  size={size}
                  color={color}
                />
              );
            }
          })
        }
      >
        <Tab.Screen
          name="Garden"
          component={ GardenPage }
        />
        <Tab.Screen
          name="Tasks"
          component={ TasksPage }
        />
        <Tab.Screen
          name="Home"
          component={ HomePage }
        />
        <Tab.Screen
          name="Calendar"
          component={ CalendarPage }
        />
        <Tab.Screen
          name="Settings"
          component={ SettingsPage }
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

