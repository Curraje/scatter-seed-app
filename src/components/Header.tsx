import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Temporary Header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#ffffff",
    fontSize: 25,
    fontWeight: "bold",
  },
  view: {
    width: "100%",
    height: 50,
    backgroundColor: "#00f",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Header;
