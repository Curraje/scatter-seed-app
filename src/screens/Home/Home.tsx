import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./home.styles";

type HomePageProps = Navigation.AppTabsPageProps<"Home">;

export default function HomePage({ navigation }: HomePageProps) {
  const onPressHandler = () => {
    navigation.navigate("Tasks");
  };

  return (
    <View style={GlobalStyles.body}>
      <Text>Welcome to the Home Page</Text>
      <StatusBar style="auto" />
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? "#555" : "#ddd" })}
      >
        <Text style={styles.text}>Tasks</Text>
      </Pressable>
    </View>
  );
}
