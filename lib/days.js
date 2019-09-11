import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import _ from 'lodash';

/**
 * arabicDayNames: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
      arabicFullDayNames: ['احد', 'اثنين', 'ثلاثاء', 'اربعاء', 'خميس', 'جمعة', 'سبت'],
      englishDayNames: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
 * 
 * @export
 */
const Days = React.memo(() =>  {
    const [arDay, setArDay] = useState(["ح", "ن", "ث", "ر", "خ", "ج", "س"]);
    return (
      <View style={styles.view}>
          {
              _.map(arDay, d => {
                  return (
                      <View key={d} style={styles.innerView}>
                      <Text style={styles.text} key={d.toString()}>{d}</Text>
                      </View>
                  )
              })
          }
      </View>
    );
  })

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 35,
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: 19,
        alignItems: 'center',
    },
    innerView: {
        width: 35,
        height: 35,
        borderRadius: 35/2,
        marginStart: 11
    },
  text: {
    margin: 2,
    flex:1,
    height: 25,
    marginStart: 7,
    borderColor: "#FFF",
    textAlign: "center",
  }
});

export default Days