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
      try {
        await AsyncStorage.setItem("UserName", name);  
      } catch (error) {
        console.log(error);
      }
  };

  const removeData = async () => {
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
        style={styles.updateInput}
        placeholder="Update Username"
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <CustomButton
        title="Update"
        regular_color="#00b099"
        pressed_color="#1eb000"
        onPressFunction={updateData}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  updateBody: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#0080ff",
  },
  updateImage: {
      width:100,
      height: 100,
      margin: 20,
      resizeMode: "contain"
  },
  updateText: {
      fontSize: 35,
      fontWeight: "bold",
  },
  updateInput: {
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