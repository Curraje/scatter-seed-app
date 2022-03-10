import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import HomePage from "./screens/Home";
import TasksPage from "./screens/Tasks";
import SettingsPage from "./screens/Settings";
import GardenPage from "./screens/Garden";
import CalendarPage from "./screens/Calendar";
// import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { BottomTabParamList } from "./@types/navigation";

const Tab = createBottomTabNavigator<BottomTabParamList>();

// Our App Root
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#000",
          tabBarActiveTintWeight: "bold",
          tabBarInactiveTintColor: "#595959",
          tabBarActiveBackgroundColor: "#35a4e3",
          tabBarInactiveBackgroundColor: "#62b8ea",
          tabBarShowLabel: true,
          tabBarLabelStyle: {
            fontSize: 14,
            fontWeight: "bold",
          },
          tabBarIcon: ({ focused }) => {
            let iconName = "building";
            switch (route.name) {
              case "Settings":
                iconName = "sun";
                break;
              case "Tasks":
                iconName = "list-alt";
                break;
              case "Garden":
                iconName = "envira";
                break;
              case "Calendar":
                iconName = "calendar";
                break;
              default:
                iconName = "building";
            }

            return (
              <FontAwesome5
                name={iconName}
                size={focused ? 20 : 14}
                color={focused ? "#000" : "#595959"}
              />
            );
          },
        })}
      >
        <Tab.Screen name="Garden" component={GardenPage} />
        <Tab.Screen name="Tasks" component={TasksPage} />
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Calendar" component={CalendarPage} />
        <Tab.Screen name="Settings" component={SettingsPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
