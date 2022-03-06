import React from "react";
//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../utils/CustomButton";
import GlobalStyles from "../utils/GlobalStyles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ScreenA({ navigation, route }: any) {

  const onPressHandler = () => {
    navigation.navigate("Screen_B");
    //navigation.toggleDrawer();
  };

  return (
    <View style={[GlobalStyles.body]}>
      <Text style={[GlobalStyles.text]}>Screen A</Text>
      <CustomButton
        onPressFunction={onPressHandler}
        title={"Screen B"}
        pressed_color={"red"}
        regular_color={"pink"}
        style={{ margin: 10 }}
      ></CustomButton>
      <Text style={[styles.text]}>{route.params?.Message}</Text>
    </View>
  );
}

