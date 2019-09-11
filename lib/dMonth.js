import React, { useState, useLayoutEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import _ from "lodash";
import moment from "moment-hijri";

const EmptyDay = () => (
  <View style={styles.innerView}>
    <View style={styles.emptyDay} />
  </View>
);
const Day = props => (
  <TouchableOpacity
    {...props}
    style={[styles.innerView, props.active && styles.activeDay]}
  >
    <Text>{props.i}</Text>
  </TouchableOpacity>
);

const Days = props => {
  const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const viewDays = [];
  for (
    let i = _.findIndex(
      days,
      d => d === moment(props.currentTime).format("dd")
    );
    i > 0;
    i--
  ) {
    viewDays.push(null);
  }
  for (let i = 1; i < props.currentTime.iDaysInMonth() + 1; i++) {
    viewDays.push(i);
  }
  return (
    <View style={styles.view}>
      {_.map(viewDays, vd => {
          const active= props.selectedDay === vd
        if (vd) {
          return (
            <Day
              active={active}
              onPress={() => props.setDay(vd)}
              key={vd}
              i={vd}
            />
          );
        } else {
          return (
            <EmptyDay
              key={`${new Date().toISOString()} ${Math.random(100)}}`}
            />
          );
        }
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    height: 35,
    justifyContent: "flex-start",
    flexDirection: "row",
    alignSelf: "center",
    paddingHorizontal: 19,
    alignItems: "center",
    flexWrap: "wrap"
  },
  text: {
    margin: 2,
    flex: 1,
    height: 25,
    marginStart: 7,
    borderColor: "#FFF",
    textAlign: "center"
  },
  innerView: {
    width: 35,
    height: 35,
    borderRadius: 35 / 2,
    marginStart: 11,
    marginTop: 7,
    justifyContent: "center",
    alignItems: "center"
  },
  emptyDay: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: "#FFF",
    opacity: 0.7
  },
  activeDay: {
    borderWidth: 2,
    borderColor: "#28a745",
  }
});

export default Days;
