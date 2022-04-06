import React, { useEffect } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./tasks.styles";
import { gql, useQuery } from "@apollo/client";

const WEATHER_QUERY = gql`
  query {
    weather {
      location {
        name
        country
        tz_id
        localtime
      }
      current {
        last_updated
        temp_c
        is_day
        condition {
          text
          icon
          code
        }
        wind_kph
        wind_degree
        wind_dir
        pressure_mb
        precip_mm
        humidity
        cloud
        feelslike_c
        vis_km
        uv
        gust_kph
      }
    }
  }
`;

type TasksPageProps = Navigation.AppTabsPageProps<"Tasks">;

export default function TasksPage({ navigation }: TasksPageProps) {
  const { data, loading, error } = useQuery(WEATHER_QUERY);

  useEffect(() => {
    console.log("LOADING", loading);
    console.log("ERROR", error);
    if (!loading) console.log("WEATHER DATA", data);
  }, [data, loading, error]);

  return (
    <View style={GlobalStyles.body}>
      <View style={styles.container}>

        <FlatList
          data={data?.weather}
          renderItem={({item}) =>
            <View>
              <Text style={styles.headerText}>Oshawa - Canada</Text>
              <Text>{item.localtime - item.tz_id}</Text>
              <View style={styles.weatherTop}>
                <View style={styles.iconTemp}>
                  <Image 
                    style={styles.weatherLogo}
                    source={{uri: "https://cdn.weatherapi.com/weather/64x64/day/116.png"}}
                  />
                  <Text style={styles.degreesHeader}>12*C</Text>
                </View>
                <View style={styles.topWeatherDetails}>
                  <Text>Feels Like</Text>
                  <Text>wind kph</Text>
                  <Text>gust kph</Text>
                  <Text>is_day</Text>
                </View>
              </View>
  
              <View style={styles.weatherBottom}> 
                <Text>Last Updated</Text>
                <View style={styles.bottomWeatherDetails}>
                  <Text>wind_dir</Text>
                  <Text>cloud</Text>
                  <Text>precip_mm</Text>
                  <Text>Humidity</Text>
                  <Text>vis_km</Text>
                  <Text>uv</Text>
                  <Text>pressure_mb</Text>
                </View>
              </View>
            </View>
          }
          keyExtractor={(item) => item.localtime}
        />
        

        <Text style={styles.headerText}>Oshawa - Canada</Text>
        <Text> localtime - tz_id</Text>
        <View style={styles.weatherTop}>
          <View style={styles.iconTemp}>
            <Image 
              style={styles.weatherLogo}
              source={{uri: "https://cdn.weatherapi.com/weather/64x64/day/116.png"}}
            />
            <Text style={styles.degreesHeader}>12*C</Text>
          </View>
          <View style={styles.topWeatherDetails}>
            <Text>Feels Like</Text>
            <Text>wind kph</Text>
            <Text>gust kph</Text>
            <Text>is_day</Text>
          </View>
        </View>

        <View style={styles.weatherBottom}> 
          <Text>Last Updated</Text>
          <View style={styles.bottomWeatherDetails}>
            <Text>wind_dir</Text>
            <Text>cloud</Text>
            <Text>precip_mm</Text>
            <Text>Humidity</Text>
            <Text>vis_km</Text>
            <Text>uv</Text>
            <Text>pressure_mb</Text>
          </View>
        </View>
      </View>
    </View> 
    
  );
}
