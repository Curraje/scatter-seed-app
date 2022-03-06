import React from "react";
//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import CustomButton from "./CustomButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ScreenA({ navigation, route }: any) {
  const {ItemName} = route.params;

  const onPressHandler = () => {
    navigation.navigate("Screen_B");
    //navigation.toggleDrawer();
  };

  return (
    <View style={styles.body}>
      <Header />
      <Text style={styles.text}>Screen A</Text>
      <CustomButton
        onPressFunction={onPressHandler}
        title={"Screen B"}
        pressed_color={"red"}
        regular_color={"pink"}
        style={{ margin: 10 }}
      ></CustomButton>
      <Text style={styles.text}>{Message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});
