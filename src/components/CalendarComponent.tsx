import React, { Component, useState } from "react";
import { Alert, Modal, Pressable, Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "../screens/Calendar/calendar.styles";
import GlobalStyles from "../theme/GlobalStyles";
import PlantVarietyScreenComponent from "./PlantVarietyComponent";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function PlantingCalendar(props: any) 
{
  const {name, onPressFunction} = props;
  // const [modalVisible, setModalVisible] = useState(false);

  // const closeModal = () => {
  //   // setModalVisible(!modalVisible);
  //   closeFunction;
  // };

  return(
    <>
      {/* <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        closeModal();
      }}
    >
      <View style={GlobalStyles.body}>
         
        <View style={styles.container}>
          <Text style={styles.plantName}>{variety.CommonName}</Text>
          <Text style={styles.scientificText}>{variety.BotanicalName}</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Type: {variety.PlantType}
          </Text>
          <Text style={styles.detailsText}> 
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Sun Exposure: {variety.SunExposure}
          </Text>
          <Text style={styles.detailsText}>  
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Min Full Sun: {variety.MinFullSun}
          </Text>
          <Text style={styles.detailsText}>  
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Preferred Soil pH: {variety.SoilpH}
          </Text>
          <Text style={styles.detailsText}>  
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Sun Exposure: {variety.SunExposure}
          </Text>
          <Text style={styles.detailsText}> 
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Bloom Time: {variety.BloomTime}
          </Text>
          <Text style={styles.detailsText}>  
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Flower Colour: {variety.FlowerColour}
          </Text>
          <Text style={styles.detailsText}> 
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Ideal Temp: {variety.IdealTemp}
          </Text>
          <Text style={styles.detailsText}>  
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Frost Hardy: {variety.FrostHardy}
          </Text>
          <Text style={styles.detailsText}>  
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
              Hardiness Zones: {variety.HardinessZones}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.detailsText}>
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            /> 
               Seed Depth: {variety.SeedDepth}
          </Text>
          <Text style={styles.detailsText}>
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            />
               Sprouts In: {variety.SproutsIn}

          </Text>
          <Text style={styles.detailsText}>
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            />
              Plant Spacing: {variety.PlantSpacing}
          </Text> 
          <Text style={styles.detailsText}>
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            />
              Row Spacing: {variety.RowWidth}
          </Text>
          <Text style={styles.detailsText}>
            <FontAwesome5
              name={"border-all"}
              style={{ width: 15, height: 15, tintColor: "green" }}
            />
              Days To Maturity: {variety.DaystoMaturity}
          </Text> 
        </View>
        <Button 
          icon="camera"
          mode="contained"
          style={styles.closeButton}
          onPress={() => {
            closeModal();
          }}
        >
          <Text>Close Modal</Text>
        </Button>
      </View>
    </Modal> */}

      <Pressable onPress={onPressFunction} style={styles.buttonSpace}>
        <View style={styles.calendarMainBody}>
          <Text style={styles.detailsText}>{name}</Text>
          <View style={styles.calendarBody}>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Jan
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Feb
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Mar
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Apr
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            May
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Jun
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Jul
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Aug
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Sep
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Oct
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Nov
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
            <View style={styles.month}>
              <Text style={styles.monthText}>
            Dec
              </Text>
              <View style={styles.weekView}>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
                <View style={styles.week}></View>
              </View>
            </View>
          </View>
        </View>
      </Pressable>

    </>
  );
}