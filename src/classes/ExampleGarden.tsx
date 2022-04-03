import React, { Component } from "react";
import { FlatList, Text, View } from "react-native";
import { Garden } from "../models/Garden";
import { Bed } from "../models/Bed";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {
}
interface AppState {
  name: string;
  data: Garden[];
}
export class ExampleGarden extends Component<AppProps, AppState> {
  beds: Bed[] = [
    new Bed(1, 2, 5, "Potato"),
    new Bed(2, 5, 5, "Corn")
  ];
  beds2: Bed[] = [
    new Bed(1, 5, 10, "Beans"),
    new Bed(2, 2, 6, "Peas")
  ];
  beds3: Bed[] = [
    new Bed(1, 8, 4, "Peppers"),
    new Bed(2, 4, 4, "Tomatoes")
  ];

  gardens: Garden[] = [
    new Garden(1, 15, 20, 2020, "My Garden 1", this.beds),
    new Garden(2, 25, 30, 2021, "Nick's Second Garden", this.beds2),
    new Garden(3, 5, 15, 2022, "Hurry up Spring...", this.beds3),
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
              <Text>{item.getName()}</Text>
              {item.returnBeds()}    
            </View>
          }
        />
      </View>
    );
  }
}