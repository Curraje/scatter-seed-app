import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ReturnGardenViewComponent(props: any)
{   
  return(
    <View>
      <FlatList
        data={props.gardens}
        renderItem={({item}) =>
          <Text>{item.getGarden()}</Text>
        }
      />
    </View>
  );

}