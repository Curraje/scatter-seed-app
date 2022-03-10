import { StyleSheet } from "react-native";

// Consider using styled-components library for styles that will be on every View, Text, etc.
export default StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#e2f2fb", //I like this colour as the main colour for the App - THOUGHTS?
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
});
