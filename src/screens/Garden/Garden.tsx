import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./garden.styles";

type GardenPageProps = Navigation.AppTabsPageProps<"Garden">;

export default function GardenPage({ navigation }: GardenPageProps) {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={GlobalStyles.body}>
      <Text>Garden</Text>
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
