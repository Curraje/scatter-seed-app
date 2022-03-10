// import { MaterialBottomTabScreenProps } from "@react-navigation/material-bottom-tabs";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

export type BottomTabParamList = {
  Home: undefined;
  Tasks: undefined;
  Calendar: undefined;
  Garden: undefined;
  Settings: undefined;
};

export type BottomTabPageProps<t> = BottomTabScreenProps<BottomTabParamList, t>;
