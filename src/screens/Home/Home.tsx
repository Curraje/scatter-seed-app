import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Modal, Pressable, Text, View } from "react-native";
import { Button } from "react-native-paper";
import GlobalStyles from "../../theme/GlobalStyles";
import styles from "./home.styles";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";


type HomePageProps = Navigation.AppTabsPageProps<"Home">;

export default function HomePage({ navigation }: any ) {

  const signedIn = true;
  const gardensExist = true;


  const [modalSelectVisible, setModalSelectVisible] = useState(false);
  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  //navigate to the garden
  const selectGardenHandler = () => {
    if(gardensExist){
      //use selected garden
      //switchSelectModal();
      gardenHandler(5);
    }else{
      createGardenHandler();
    }
  };

  const createGardenHandler = () => {
    //if not signed in
    if(!signedIn){
      loginHandler();
    }else{
      switchCreateModal();
      //open modal for crteating a garden
    }
  };

  const gardenHandler = (size: number) => {
    navigation.navigate("Garden", {sentGarden: true, gardenData: size});
  };
  //navigate to the tasks page
  const tasksHandler = () => {
    navigation.navigate("Tasks");
  };

  const loginHandler = () => {
    navigation.navigate("Login");
  };

  const switchSelectModal = () => {
    setModalSelectVisible(!modalSelectVisible);
  };
  const switchCreateModal = () => {
    setModalCreateVisible(!modalCreateVisible);
  };

  //const { addNewVisible, editVisible} = this.state;
  return (
    <View style={GlobalStyles.body}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalSelectVisible}
        onRequestClose={() => {
          switchSelectModal();
        }}
      >
        <View style={GlobalStyles.modal}>
          <Text>select yo shit</Text>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalCreateVisible}
        onRequestClose={() => {
          switchCreateModal();
        }}
      >
        <View style={GlobalStyles.modal}>
          <Text>create yo shit</Text>
        </View>
      </Modal>
      

      <FontAwesome5
        name={"envira"}
        size={150}
        color={"#85e085"}
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
        onPress={selectGardenHandler}
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
        onPress={createGardenHandler}
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

      <Text style={styles.subheader}>Upcoming Chores</Text>
      
      <View style={styles.choreBlock}>
        <Text style={styles.chore}>Task 1 - Due March 15, 2022</Text>
        <Text style={styles.chore}>Task 2 - Due Smarch 11, 2023</Text>
        <Text style={styles.chore}>Task 3 - Stupid Smarch</Text>
        <Text style={styles.chore}>Task 4 - April 1, 2022 (NOT A JOKE)</Text>
      </View>
    </View>
  );
}
