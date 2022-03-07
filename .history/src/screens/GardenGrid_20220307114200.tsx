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
      <Container>
        <Row>
          <Col>
            One of Three      
          </Col>
        </Row>
        <Row>
          <Col>
            Two of Three      
          </Col>
        </Row>
        <Row>
          <Col>
            Three of Three      
          </Col>
          <Col>4</Col>
          <Col>5</Col>
        </Row>
      </Container>
    </View>

  );  
}

const styles = StyleSheet.create({
    body: {
    background
    }
});