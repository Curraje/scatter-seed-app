import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Alert } from "react-native";
import CustomButton from "../utils/CustomButton";
import GlobalStyles from "../utils/GlobalStyles";
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from "react-native-table-component";

export default function GardenGrid({ navigation }: any) {

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View
      style={GlobalStyles.body}
    >
        <Table style={{borderWidth: 1}}>
            
        </Table>

      {/* <Text>Garden Grid</Text> */}
      {/* <CustomButton
        title="Go Back"
        regular_color="#1eb900"
        pressed_color="#1eb999"
        onPressFunction={onPressHandler}
      /> */}
    </View>

  );  
}