import React, { useEffect, useState } from "react";
//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../utils/CustomButton";
import GlobalStyles from "../utils/GlobalStyles";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ navigation, route }: any) {

  const [name, setName] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserName")
        .then(value => {
          if (value != null) {
            setName(value);
          }
        }
        );
    } catch (error) {
      console.log(error);
    }
  };

  const setData = async () => {
    if (name.length < 1) {
      Alert.alert("Warning!", "Please enter a username");  
    } else {
        try {
          await AsyncStorage.setItem("UserName", name);  
          navigation.navigate("Home");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={[GlobalStyles.body]}>
      <Text style={[GlobalStyles.text]}>ScatterSeed - Home</Text>
      <Text style={[GlobalStyles.text]}>Welcome {name} !</Text>
    </View>
  );
}

