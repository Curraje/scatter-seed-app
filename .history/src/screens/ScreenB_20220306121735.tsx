import React from "react";
//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../utils/CustomButton";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ScreenB({ navigation, route }: any) {
  const {ItemName, ItemId} = route.params;

  const onPressHandler = () => {
    navigation.navigate("Screen_A", {Message: "Message from Screen B"});
    //navigation.setParams({ItemId: 24});
    //Could also use: //navigation.goBack(); //I did not because it doesn't make sense unless theres only ever 1 screen to go back to
  };

  return (
    <View style={[styles.body]}>
      <Text style={[GlobalStyles.text]}>Screen B</Text>
      <CustomButton
        onPressFunction={onPressHandler}
        title={"Screen_A"}
        pressed_color={"red"}
        regular_color={"pink"}
        style={{ margin: 10 }}
      ></CustomButton>
      <Text style={[GlobalStyles.text]}>{ItemName} {ItemId}</Text>
    </View>
  );
}
