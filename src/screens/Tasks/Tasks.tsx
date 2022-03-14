import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./tasks.styles";

type TasksPageProps = Navigation.AppTabsPageProps<"Tasks">;

export default function TasksPage({ navigation }: TasksPageProps) {
  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={GlobalStyles.body}>
      
      <Text style={styles.subheader}>Chores this Month</Text>
      <View style={styles.choreBlock}>
        <Text style={styles.chore}>Task 1 - Due March 15, 2022</Text>
        <Text style={styles.chore}>Task 2 - Due Smarch 11, 2023</Text>
        <Text style={styles.chore}>Task 3 - Stupid Smarch</Text>
        <Text style={styles.chore}>Task 4 - April 1, 2022 (NOT A JOKE)</Text>
      </View>

      <Text style={styles.subheader}>Custom Chores</Text>
      <View style={styles.choreBlock}>
        <Text style={styles.chore}>Task 5 - Due March 13, 2022</Text>
        <Text style={styles.chore}>Task 13 - Due Smarch 22, 2023</Text>
      </View>

      <Text style={styles.subheader}>Chores next Month</Text>
      <View style={styles.choreBlock}>
        <Text style={styles.chore}>Task 10 - Due March 15, 2022</Text>
        <Text style={styles.chore}>Task 11 - Due Smarch 11, 2023</Text>
        <Text style={styles.chore}>Task 14 - April 1, 2022 (NOT A JOKE)</Text>
      </View>
    </View>
  );
}
