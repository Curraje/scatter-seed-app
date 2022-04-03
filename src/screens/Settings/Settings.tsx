import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./settings.styles";
import { ExampleGarden } from "../../classes/ExampleGarden";

type SettingsPageProps = Navigation.AppTabsPageProps<"Settings">;

export default function SettingsPage({ navigation }: SettingsPageProps) {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };
  return (
    <View style={GlobalStyles.body}>
      <Text>Settings</Text>
      <StatusBar style="auto" />
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? "#555" : "#ddd" })}
      >
        <Text style={styles.text}>Home</Text>
      </Pressable>

      <ExampleGarden/>
    </View>
  );
}
