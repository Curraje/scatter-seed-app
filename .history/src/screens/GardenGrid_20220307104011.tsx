import React from "react";
import { View, StyleSheet, Text, Image, Alert } from "react-native";
import CustomButton from "../utils/CustomButton";
import GlobalStyles from "../utils/GlobalStyles";

export default function GardenGrid({ navigation }: any) {

  const onPressHandler

  return (
    <View
      style={GlobalStyles.body}
    >
      <Text>Garden Grid</Text>
      <CustomButton
        title="Go Back"
        regular_color="#1eb900"
        pressed_color="#1eb999"
        onPressFunction={onPressHandler}
      />
    </View>

  );  
}