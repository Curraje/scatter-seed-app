import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Linking, StyleSheet, Text, View } from "react-native";
import Header from "./components/header/header";

export default class App extends React.Component {
  render() {
    const { container, header, content } = styles;
    return (
      <View style={container}>
        <View style={header}>
          <Header title="Awesomest App Ever!!!" />
        </View>
        <View style={content}>
          <Text style={styles.text}>Actually making progress!!</Text>
          <Button
            title="github repo"
            onPress={() => {
              Linking.openURL("https://github.com/Curraje/scatter-seed-app/tree/nick-playground");
            }}
          ></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#0000ff",
    fontSize: 20,
  },
  header: {
    flex: 1,
  },
  content: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center",
  },
});
