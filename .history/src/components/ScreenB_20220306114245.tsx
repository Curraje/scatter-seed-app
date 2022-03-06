import React from "react";
//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import CustomButton from "./CustomButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ScreenB({ navigation, route }: any) {
  const {ItemName, ItemId} = route.params;

  const onPressHandler = () => {
    navigation.navigate("Screen_A");
    //Could also use: //navigation.goBack(); //I did not because it doesn't make sense unless theres only ever 1 screen to go back to
  };

  return (
    <View style={styles.body}>
      <Header />
      <Text style={styles.text}>Screen B</Text>
      <CustomButton
        onPressFunction={onPressHandler}
        title={"Screen_A"}
        pressed_color={"red"}
        regular_color={"pink"}
        style={{ margin: 10 }}
      ></CustomButton>
      <Text></Text>
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
