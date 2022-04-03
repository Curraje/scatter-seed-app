import React, { Component } from "react";
import { Text, View } from "react-native";
import { Garden } from "../models/Garden";
import { User } from "../models/User";
import { Bed } from "../models/Bed";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AppProps {}
interface AppState {
  name: string;
  data: User;
}
export class ExampleUser extends Component<AppProps, AppState> {
  //Example data for beds that have already been created
  beds: Bed[] = [
    new Bed(1, 2, 5, "Potato"),
    new Bed(2, 5, 5, "Corn")
  ];
  beds2: Bed[] = [
    new Bed(1, 5, 10, "Beans"),
    new Bed(2, 2, 6, "Peas")
  ];    
  //Example data for gardens that have already been created
  gardens: Garden[] = [
    new Garden(1, 15, 20, 2020, "My Garden 2", this.beds),
    new Garden(2, 25, 30, 2011, "Nick's Seventh Garden", this.beds2),
  ];
  //Example user for displaying purposes
  user: User = new User(1, "Nick", "Toronto, ON", "nick@scatterseed.com", "October 10", "May 5", this.gardens);

  constructor(props: AppProps | Readonly<AppProps>) {
    super(props);
    this.state = {
      name: "username",
      data: this.user,
    };
  }
  
  render() {
    const usr = this.state.data;
    console.log(usr);
    return(
      <View>
        <Text>{usr.getName()}</Text>
        <Text>{usr.getFrostDates()}</Text> 
        {usr.returnGardens()}
      </View>
    );
  }
}