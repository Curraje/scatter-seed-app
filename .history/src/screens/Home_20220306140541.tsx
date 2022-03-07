import React from "react";
//import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CustomButton from "../utils/CustomButton";
import GlobalStyles from "../utils/GlobalStyles";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Home({ navigation, route }: any) {

  const [name, setName] = useState("");

  // const onPressHandler = () => {
  //   navigation.navigate("Screen_B");
  //   //navigation.toggleDrawer();
  // };

  return (
    <View style={[GlobalStyles.body]}>
      <Text style={[GlobalStyles.text]}>Screen A</Text>
     
      <Text style={[GlobalStyles.text]}>{route.params?.Message}</Text>
    </View>
  );
}
