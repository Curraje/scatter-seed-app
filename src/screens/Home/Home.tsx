import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { Button } from "react-native-paper";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./home.styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

type HomePageProps = Navigation.AppTabsPageProps<"Home">;

export default function HomePage({ navigation }: HomePageProps) {
  const onPressHandler = () => {
    navigation.navigate("Tasks");
  };

  return (
    <View style={GlobalStyles.body}>
      <FontAwesome5
        name={"envira"}
        size={150}
        color={"#595959"}
      />
      <Text style={styles.headerText}>Welcome to the ScatterSeed</Text>

      <Button 
        style={styles.button}  
        icon={() => (
          <FontAwesome5
            name={"border-all"}
            style={{ width: 15, height: 15, tintColor: "green" }}
          />
        )}  
        mode="contained" 
        onPress={() => console.log("Pressed")}
      >
        Go To Garden
      </Button>
      <Button 
        style={styles.button}
        icon={() => (
          <FontAwesome5
            name={"border-none"}
            style={{ width: 15, height: 15, tintColor: "green" }}
          />
        )} 
        mode="contained" 
        onPress={() => console.log("Pressed")}
      >
        Create Garden
      </Button>
      <Button 
        icon={() => (
          <FontAwesome5
            name={"align-left"}
            style={{ width: 15, height: 15, tintColor: "green" }}
          />
        )} 
        style={styles.button} 
        mode="contained" 
        onPress={() => console.log("Pressed")}
      >
        Monthly Tasks
      </Button>
      <Button 
        icon={() => (
          <FontAwesome5
            name={"calendar-check"}
            style={{ width: 15, height: 15, tintColor: "green" }}
          />
        )}  
        style={styles.button}
        mode="contained" 
        onPress={() => console.log("Pressed")}
      >
        Yearly Tasks
      </Button>
    </View>
  );
}
