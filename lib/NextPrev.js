import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

import Row from "./Row";

import leftIcon from './icons/leftArrow.png';
import rightIcon from './icons/rightArrow.png';

const PrevNextItems = (props) => {
  return (
    <Row style={styles.view}>
      <TouchableOpacity onPress={props.handleNext}>
        <Image source={rightIcon} style={styles.icon}/>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.viewYear}>
        <Text>{props.currentMonth.nameAr} {props.year}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.handlePrev}>
      <Image source={leftIcon} style={styles.icon}/>
      </TouchableOpacity>
    </Row>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 0,
    height: 44,
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 19
  },
  icon: {
      width: 20,
      height: 20,
      borderRadius: 20/2,
      resizeMode: 'contain'
  }
});

export default PrevNextItems
