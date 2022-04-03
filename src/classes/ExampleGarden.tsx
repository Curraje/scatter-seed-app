
import React, { Component } from "react";
import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, Text, View } from "react-native";
import { Garden } from "../models/Garden";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {}
interface AppState {
  name: string;
  data: Garden[];
}
export class ExampleGarden extends Component<AppProps, AppState> {
  gardens: Garden[] = [
    new Garden(1, 2020, "My Garden 1"),
    new Garden(2, 2021, "Nick's Second Garden"),
    new Garden(3, 2022, "Hurry up Spring..."),
  ];
  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      name: "username",
      data: this.gardens
    };
  }
  
  render() {
    const gdns = this.state.data;
    console.log(gdns);
    return(
      <View>
        <FlatList
          data={gdns}
          renderItem={({item}) =>
            <View>
              <Text>{item.getName()}--{item.getGardenCount()}</Text>
            </View>
          }
        />
      </View>
    );
  }
}