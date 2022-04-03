import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function BedViewComponent(props: any)
{   
  return(
    <View>
      <FlatList
        data={props.beds}
        renderItem={({item}) =>
          <Text>{item.getBed()}</Text>
        }
      />
    </View>
  );

}