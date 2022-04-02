import React from "react";
import { StatusBar } from "expo-status-bar";
import { Pressable, Text, View } from "react-native";
import { Button } from "react-native-paper";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./home.styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


type HomePageProps = Navigation.AppTabsPageProps<"Home">;

export default function HomePage({ navigation }: any ) {
  //navigate to the garden
  const gardenHandler = () => {
    navigation.navigate("Garden");
  };
  //navigate to the tasks page
  const tasksHandler = () => {
    navigation.navigate("Tasks");
  };

  const loginHandler = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={GlobalStyles.body}>

      

      <FontAwesome5
        name={"envira"}
        size={150}
        color={"#595959"}
      />
      <Text style={styles.headerText}>Welcome to the ScatterSeed</Text>
      <Text style={styles.subheader}>Upcoming Chores</Text>
      
      <View style={styles.choreBlock}>
        <Text style={styles.chore}>Task 1 - Due March 15, 2022</Text>
        <Text style={styles.chore}>Task 2 - Due Smarch 11, 2023</Text>
        <Text style={styles.chore}>Task 3 - Stupid Smarch</Text>
        <Text style={styles.chore}>Task 4 - April 1, 2022 (NOT A JOKE)</Text>
      </View>

      <Button 
        style={styles.button}  
        icon={() => (
          <FontAwesome5
            name={"border-all"}
            style={{ width: 15, height: 15, tintColor: "green" }}
          />
        )}  
        mode="contained" 
        onPress={gardenHandler}
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
        onPress={loginHandler}
      >
        Create Garden (Go to login)
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
        onPress={tasksHandler}
      >
        All Tasks
      </Button>
    </View>
  );
}
