import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./garden.styles";
import GardenPlanner from "../../components/GardenPlanner";
import GestureTest from "../../components/GestureTest";
import Testc from "../../components/GestureTest";

type GardenPageProps = Navigation.AppTabsPageProps<"Garden">;

export default function GardenPage({ navigation }: GardenPageProps) {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={GardenStyles.body}>
      <Text>Garden</Text>
      <StatusBar style="auto" />
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? "#555" : "#ddd" })}
      >
        <Text style={styles.text}>Home</Text>
      </Pressable>
      <GardenPlanner></GardenPlanner>
    </View>
  );
}

const GardenStyles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e2f2fb", //I like this colour as the main colour for the App - THOUGHTS?
  },
});
