import React, { useEffect, useState } from "react";
//import { StatusBar } from "expo-status-bar";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomButton from "../utils/CustomButton";
import GlobalStyles from "../utils/GlobalStyles";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ navigation, route }: any) {

  const [name, setName] = useState("");
  const [age, setAge]=useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    try {
      AsyncStorage.getItem("UserData")
        .then(value => {
          if (value != null) {
            const user = JSON.parse(value);
            setName(user.Name);
            setAge(user.Age);
          }
        }
        );
    } catch (error) {
      console.log(error);
    }
  };

  const updateData = async () => {
    if (name.length == 0) {
      Alert.alert("Warning!", "Please enter a username");  
    } else {
      try {
        const user = {
          Name: name,
        };
        AsyncStorage.mergeItem("UserData", JSON.stringify(user));  
        Alert.alert("Success!", "Your name has been updated.");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const removeData = async () => {
    try {
      await AsyncStorage.removeItem("UserData");  
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={[GlobalStyles.body]}>
      <Text style={[GlobalStyles.text]}>ScatterSeed - Home</Text>
      <Text style={[GlobalStyles.text]}>Welcome {name} ! Are you really {age} year(s) old??</Text>
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
      <CustomButton
        title="Delete"
        regular_color="#cc0000"
        pressed_color="#ffb3b3"
        onPressFunction={removeData}
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