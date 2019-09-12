import React, { useState, useEffect, useLayoutEffect } from "react";
import { View, Modal, Text, TouchableOpacity, Alert } from "react-native";
import 'moment/locale/en-au';


import styles from "./styles";
import NextPrevTouch from "./NextPrev";
import Days from "./days";
import DaysInMonth from "./dMonth";
import moment from "moment-hijri";
import { useImmer } from "use-immer";
import InnerModal from "./InnerModal";
import Spacer from "./Spacer";
import years from './years';

export default function RNHijriDatePickerArEn(props) {
  moment.locale('en')
  //   const m = moment(currentTime);
  const months = [
    { number: 0, nameEn: "Muharram", nameAr: "محرم" },
    { number: 1, nameEn: "Safar", nameAr: "صفر" },
    { number: 2, nameEn: "Rabi I", nameAr: "ربيع أول" },
    { number: 3, nameEn: "Rabi II", nameAr: "ربيع ثان" },
    { number: 4, nameEn: "Jumada I", nameAr: "جمادي أول" },
    { number: 5, nameEn: "Jumada II", nameAr: "جمادي ثان" },
    { number: 6, nameEn: "Rajab", nameAr: "رجب" },
    { number: 7, nameEn: "Shaaban", nameAr: "شعبان" },
    { number: 8, nameEn: "Ramadan", nameAr: "رمضان" },
    { number: 9, nameEn: "Shawwal", nameAr: "شوال" },
    { number: 10, nameEn: "Dhu al-Qidah", nameAr: "ذو القعدة" },
    { number: 11, nnameEn: "Dhu al-Hijjah", nameAr: "ذو الحجة" }
  ];
  const [currentMo, setCurrentMo] = useImmer(months[0]);
  const [showIM, setShowIM] = useImmer(months[0]);
  const [year, setYear] = useImmer(1400);
  const [day, setDay] = useImmer(null);
  const [currentTime, setCurrentTime] = useImmer(
    moment(`${year}/01/01`, "iYYYY/iMM/iDD")
  );

  handleNext = () => {
    if (day) setDay(state => (state = null));
    const _NextcurrentMo = currentTime.add(1, "iMonth");
    setCurrentMo(state => (state = months[_NextcurrentMo.iMonth()]));
    setCurrentTime(state => (state = _NextcurrentMo));
  };
  handlePrev = () => {
    if (day) setDay(state => (state = null));
    const _prevcurrentMo = currentTime.subtract(1, "iMonth");
    setCurrentMo(state => (state = months[_prevcurrentMo.iMonth()]));
    setCurrentTime(state => (state = _prevcurrentMo));
  };
  viewYear = () => setShowIM(state => (state = true));

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.visible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={styles.container}>
        <NextPrevTouch
          handleNext={handleNext}
          handlePrev={handlePrev}
          currentMonth={currentMo}
          year={currentTime.iYear()}
          viewYear={viewYear}
          //   key={currentTime.iYear()}
        />
        <Spacer height={5} />
        <View style={[styles.sep, { height: 0.5 }, props.sep1style]} />
        <Spacer height={11} />
        <Days />
        {/* <View style={[styles.sep, { height: 0.5 }, props.sep2style]} /> */}
        <Spacer height={11} />
        <DaysInMonth
          key={day}
          selectedDay={day}
          setDay={d => setDay(state => (state = d))}
          currentTime={currentTime}
        />
        <TouchableOpacity onPress={() => {
          console.log('@day', day)
          if(!day) {
            Alert.alert('','select day first',[{ text: 'ok', onPress: () => 0 }])
            return
          }
          props.onDone(String(`${currentTime.iYear()}/${currentMo.number+1}/${day}`))
        }} style={styles.bottomView}>
            <Text>{props.doneText || 'تم'}</Text>
        </TouchableOpacity>
      </View>
      <InnerModal
        selectedYear={year}
        setYear={y => {
          setYear(state => (state = y));
          setShowIM(state => (state = false));
          const _date = `${y}/01/01`;
          setCurrentTime(
            state => (state = moment(String(_date), "iYYYY/iMM/iDD"))
          );
        }}
        close={() => setShowIM(state => (state = false))}
        visible={showIM}
        years={years}
        closeText={props.closeText}
        yearsTitle={props.yearsTitle}
      />
    </Modal>
  );
}
