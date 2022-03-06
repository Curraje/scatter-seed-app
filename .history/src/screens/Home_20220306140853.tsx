import React, { useState } from "react";
//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../utils/CustomButton";
import GlobalStyles from "../utils/GlobalStyles";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ navigation, route }: any) {

  const [name, setName] = useState("");

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName")
    } catch (error) {
      console.log(error);
    }
  }

  // const onPressHandler = () => {
  //   navigation.navigate("Screen_B");
  //   //navigation.toggleDrawer();
  // };

  return (
    <View style={[GlobalStyles.body]}>
      <Text style={[GlobalStyles.text]}>ScatterSeed - Home</Text>
      <Text style={[GlobalStyles.text]}>Welcome {name} !</Text>
    </View>
  );
}

