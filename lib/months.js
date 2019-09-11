import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import _ from 'lodash';

export default function Days() {
  const [months, setMonths] = useState([
    {number: 0, name: 'محرم'},
    {number: 1, name: 'صفر'},
    {number: 2, name: 'ربيع 1'},
    {number: 3, name: 'ربيع 2'},
    {number: 4, name: 'جمادي 1'},
    {number: 5, name: 'جمادي 2'},
    {number: 6, name: 'رجب'},
    {number: 7, name: 'شعبان'},
    {number: 8, name: 'رمضان'},
    {number: 9, name: 'شوال'},
    {number: 10, name: 'ذو القعدة'},
    {number: 11, name: 'ذو الحجة'},
  ]);
  return (
    <View style={styles.view}>
        {
            _.map(months, d => {
                console.log('@d',d)
                return (
                    <Text style={styles.text} key={d.toString()}>{d.name}</Text>
                )
            })
        }
    </View>
  );
}

const styles = StyleSheet.create({
    view: {
        width: '100%',
        height: 35,
        justifyContent: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        paddingHorizontal: 19,
        alignItems: 'center'
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
