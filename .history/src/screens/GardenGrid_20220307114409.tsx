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
    <ImageBackground>
        
    </ImageBackground>
    </View>
  );  
}

const styles = StyleSheet.create({
    body: {
        
    }
});