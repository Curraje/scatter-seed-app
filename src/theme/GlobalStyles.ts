import { StyleSheet } from "react-native";

// Consider using styled-components library for styles that will be on every View, Text, etc.
export default StyleSheet.create({
  body: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#bce1f6", //I like this colour as the main colour for the App - THOUGHTS?
    //secondary colour "#fbf0e2"
    //tertiary colour "#7a4b0e"
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
    margin: 10,
  },
  closeText: {
    fontSize: 15,
    fontWeight: "700",
    color: "#7a4b0e",
  },
});
