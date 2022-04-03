import React, {  useEffect, useState } from "react";
import { Text, View, FlatList, Pressable, Modal, Alert } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./calendar.styles";
import { gql, useQuery } from "@apollo/client";
import { Button } from "react-native-paper";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import PlantingCalendar from "../../components/CalendarComponent";
import PlantVarietyScreenComponent from "../../components/PlantVarietyComponent";

// FIXME: Temporary proof of concept
const PLANTS_QUERY = gql`
  query {
    plants {
      id
      CommonName
      BotanicalName
      PlantType
      SunExposure
      SoilpH
      BloomTime
      SeedDepth
      SproutsIn
      IdealTemp
      PlantSpacing
      FrostHardy
      MinFullSun
      RowWidth
      DaystoMaturity
      FlowerColour
      HardinessZones
    }
  }
`;

type CalendarPageProps = Navigation.AppTabsPageProps<"Calendar">;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlantItem = ({ plant }: any) => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <View style={styles.container}>
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={GlobalStyles.body}>
         
          <View style={styles.container}>
            <Text style={styles.plantName}>{plant.CommonName}</Text>
            <Text style={styles.scientificText}>{plant.BotanicalName}</Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.detailsText}>
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Type: {plant.PlantType}
            </Text>
            <Text style={styles.detailsText}> 
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Sun Exposure: {plant.SunExposure}
            </Text>
            <Text style={styles.detailsText}>  
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Min Full Sun: {plant.MinFullSun}
            </Text>
            <Text style={styles.detailsText}>  
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Preferred Soil pH: {plant.SoilpH}
            </Text>
            <Text style={styles.detailsText}>  
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Sun Exposure: {plant.SunExposure}
            </Text>
            <Text style={styles.detailsText}> 
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Bloom Time: {plant.BloomTime}
            </Text>
            <Text style={styles.detailsText}>  
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Flower Colour: {plant.FlowerColour}
            </Text>
            <Text style={styles.detailsText}> 
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Ideal Temp: {plant.IdealTemp}
            </Text>
            <Text style={styles.detailsText}>  
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Frost Hardy: {plant.FrostHardy}
            </Text>
            <Text style={styles.detailsText}>  
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
              Hardiness Zones: {plant.HardinessZones}
            </Text>
          </View>
          <View style={styles.container}>
            <Text style={styles.detailsText}>
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              /> 
               Seed Depth: {plant.SeedDepth}
            </Text>
            <Text style={styles.detailsText}>
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              />
               Sprouts In: {plant.SproutsIn}

            </Text>
            <Text style={styles.detailsText}>
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              />
              Plant Spacing: {plant.PlantSpacing}
            </Text> 
            <Text style={styles.detailsText}>
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              />
              Row Spacing: {plant.RowWidth}
            </Text>
            <Text style={styles.detailsText}>
              <FontAwesome5
                name={"border-all"}
                style={{ width: 15, height: 15, tintColor: "green" }}
              />
              Days To Maturity: {plant.DaystoMaturity}
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
      </Modal> 

      
      <PlantingCalendar
        onPressFunction={() => {
          setModalVisible(!modalVisible);
        }}
        name={plant.CommonName}
      /> 
    </View>
  );
};



export default function CalendarPage({ navigation }: CalendarPageProps) {
  const { data, loading, error } = useQuery(PLANTS_QUERY);

  useEffect(() => {
    console.log("LOADING", loading);
    console.log("ERROR", error);
    if (!loading) console.log("PLANT DATA", data);
  }, [data, loading, error]);

  const onPressHandler = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={GlobalStyles.body}>
      <Text>Planting Calendar</Text>
      
      {/* FIXME: Temporary Proof of Concept */}
      
      <FlatList
        data={data?.plants}
        renderItem={({ item }) => 
          <View style={styles.container}>
            <PlantItem plant={item} />
          </View>
        }
        keyExtractor={(item) => item.id}
      />
      
    </View>
  );
}
