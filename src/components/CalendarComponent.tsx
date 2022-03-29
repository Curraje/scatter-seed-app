import React, { Component } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../screens/Calendar/calendar.styles";

export default function PlantingCalendar(props: any) 
{
  const {name, pressFunction} = props;

  return(
    <Pressable onPress={pressFunction} style={styles.buttonSpace}>
      <View style={styles.calendarMainBody}>
        <Text style={styles.detailsText}>{name}</Text>
        <View style={styles.calendarBody}>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Jan
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Feb
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Mar
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Apr
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            May
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Jun
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Jul
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Aug
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Sep
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Oct
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Nov
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Dec
            </Text>
            <View style={styles.weekView}>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
              <View style={styles.week}></View>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
}