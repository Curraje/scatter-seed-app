import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View, FlatList } from "react-native";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./calendar.styles";
import { gql, useQuery } from "@apollo/client";

// FIXME: Temporary proof of concept
const PLANTS_QUERY = gql`
  query {
    plants {
      id
      CommonName
    }
  }
`;

type CalendarPageProps = Navigation.AppTabsPageProps<"Calendar">;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const PlantItem = ({ plant }: any) => {
  return (
    <>
      <Text>{plant.CommonName}</Text>
    </>
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
      <StatusBar style="auto" />
      <Pressable
        onPress={onPressHandler}
        style={({ pressed }) => ({ backgroundColor: pressed ? "#555" : "#ddd" })}
      >
        <Text style={styles.text}>Home</Text>
      </Pressable>
      {/* FIXME: Temporary Proof of Concept */}
      <FlatList
        data={data?.plants}
        renderItem={({ item }) => <PlantItem plant={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
