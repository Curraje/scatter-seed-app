import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppNavigator from "./AppNavigator";

export default function Router() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
