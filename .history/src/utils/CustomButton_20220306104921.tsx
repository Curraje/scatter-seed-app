import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomButton = (props: any) => {
  return (
    <Pressable
      onPress={props.onPressFunction}
      hitSlop={{ top: 10, bottom: 10, right: 10, left: 10 }}
      android_ripple={{ color: "#00f" }}
      style={({ pressed }) => [
        { backgroundColor: pressed ? props.pressed_color : props.regular_color },
        styles.button,
        { ...props.style },
      ]}
    >
      <Text style={styles.text}>{props.title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#000000",
    fontSize: 18,
    margin: 10,
    textAlign: "center",
  },
  button: {
    width: 150,
    height: 50,
    alignItems: "center",
  },
});

export default CustomButton;
