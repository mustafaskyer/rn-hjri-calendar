import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RnHjriDatePicker from "./rn-hjri-date-picker";

export default function(props) {
  const [showModal, setShowModal] = useState(false);
  const [date, setDate] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Text> {date || "open modal"}</Text>
      </TouchableOpacity>
      <RnHjriDatePicker
        onDone={d => {
          setShowModal(false);
          setDate(d);
        }}
        visible={showModal}
        doneText={"تم"}
        sep1style={{}}
        sep2style={{}}
        closeText={"اغلاق"}
        yearsTitle={"اختر السنة"}
      />
    </View>
  );
}
