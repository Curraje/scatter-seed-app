import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import "react-native-gesture-handler";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./settings.styles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function SettingsPage({ navigation }: any) {
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
    </View>
  );
}
