import React, { Component } from "react";
import { View, StyleSheet, Text, Image, Alert } from "react-native";
import CustomButton from "../utils/CustomButton";
import GlobalStyles from "../utils/GlobalStyles";
import { Container, Row,  Col,} from "react-grid-system";

export default function GardenGrid({ navigation }: any) {

  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <View
      style={GlobalStyles.body}
    >
      <Container style={styles.mainGrid}>
        <Row style={styles.mainGrid}>
          <Col sm={4} style={styles.mainGrid}>
            One of Three      
          </Col>
          <Col sm={4}>
            Two of Three      
          </Col>
          <Col sm={4}>
            Three of Three      
          </Col>
        </Row>
      </Container>
    </View>

  );  
}

const styles = StyleSheet.create({
    mainGrid: {
        borderWidth: 1,
        cols: 12,
        margin: 5,

    }
});