import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./calendar.styles";

type CalendarPageProps = Navigation.AppTabsPageProps<"Calendar">;

export default function CalendarPage({ navigation }: CalendarPageProps) {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={GlobalStyles.body}>
      <Text>Planting Calendar</Text>
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
