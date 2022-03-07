import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Alert, ImageBackground } from "react-native";
import CustomButton from "../utils/CustomButton";
import GlobalStyles from "../utils/GlobalStyles";
import { Container, Row,  Col,} from "react-grid-system";

export default function GardenGrid({ navigation }: any) {

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View>
    <ImageBackground source={"../../assets/bruce.png"} style={styles.body}>
        
    </ImageBackground>
    </View>
  );  
}

const styles = StyleSheet.create({
    body: {
       borderRadius: 10,
       borderWidth: 1,
       borderColor: "black",    
       width: 100,
       height: 100, 
       resizeMode: "repeat"
    }
});