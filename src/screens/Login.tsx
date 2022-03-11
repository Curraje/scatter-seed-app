/* eslint-disable indent */
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, Text, TextInput, Alert } from "react-native";
import CustomButton from "../utils/CustomButton";
import CustomeComponent from "../utils/CustomeComponent";
import AsyncStorage from "@react-native-async-storage/async-storage"; 
import GlobalStyles from "../utils/GlobalStyles";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Login({ navigation }: any) {
    const [name, setName]=useState("");
    const [age, setAge]=useState("");

    useEffect(() => {
        getData();
      }, []);
    
      const getData = () => {
        try {
          AsyncStorage.getItem("UserData")
            .then(value => {
              if (value != null) {
                navigation.navigate("Home");  
              }
            }
            );
        } catch (error) {
          console.log(error);
        }
      };

    const setData = async () => {
      if (name.length == 0 || age.length == 0) {
        Alert.alert("Warning!", "Please enter appropriate data");  
      } else {
          try {
              const user = {
                Name: name,
                Age: age,
              };
            await AsyncStorage.setItem("UserData", JSON.stringify(user));  
            navigation.navigate("Home");
          } catch (error) {
            console.log(error);
          }
      }
    };

  return (
    <View 
      style={GlobalStyles.body}
    >
      <Image 
        style={styles.loginImage}
        source={require("../../assets/bruce.png")}
      />
      <Text style={styles.loginText}>Async Storage</Text>
      <TextInput 
        style={styles.loginInput}
        placeholder="Username"
        onChangeText={(value) => setName(value)}
      />
      <CustomeComponent></CustomeComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  loginBody: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#000000",
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
    marginBottom: 10,
  },

});