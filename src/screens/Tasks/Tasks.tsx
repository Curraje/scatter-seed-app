import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./tasks.styles";
import { BottomTabPageProps } from "../../@types/navigation";

type TasksPageProps = BottomTabPageProps<"Tasks">;

export default function TasksPage({ navigation }: TasksPageProps) {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={GlobalStyles.body}>
      <Text>Tasks!</Text>
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
