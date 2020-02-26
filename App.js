import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Constants from "expo-constants";
import Base from "./src/Base";

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#43A2EC",
    height: Constants.statusBarHeight
  }
});

export default function App() {
  return (
    <>
      {Platform.OS === "ios" && <View style={styles.statusBar} />}
      <Base />
    </>
  );
}
