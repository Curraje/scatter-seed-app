import React, { useEffect, useState } from "react";
//import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
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

  const updateData = async () => {
    if (name.length < 1) {
      Alert.alert("Warning!", "Please enter a username");  
    } else {
      try {
        await AsyncStorage.setItem("UserName", name);  
        Alert.alert("Success!", "Your name has been updated.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <View style={[GlobalStyles.body]}>
      <Text style={[GlobalStyles.text]}>ScatterSeed - Home</Text>
      <Text style={[GlobalStyles.text]}>Welcome {name} !</Text>
      <TextInput 
        style={styles.loginInput}
        placeholder="Username"
        onChangeText={(value) => setName(value)}
      />
      <CustomButton
        title="Login"
        regular_color="#1eb900"
        pressed_color="#1eb999"
        onPressFunction={setData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  loginBody: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0080ff",
  },
  loginImage: {
      width:100,
      height: 100,
      margin: 20,
      resizeMode: "contain"
  },
  loginText: {
      fontSize: 35,
      fontWeight: "bold",
  },
  loginInput: {
    width: 300,
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    marginTop: 130,
    marginBottom: 10,
  },
});