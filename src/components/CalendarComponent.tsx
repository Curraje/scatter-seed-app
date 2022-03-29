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
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Feb
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Mar
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Apr
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            May
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Jun
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Jul
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Aug
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Sep
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Oct
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Nov
            </Text>
          </View>
          <View style={styles.month}>
            <Text style={styles.monthText}>
            Dec
            </Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
}