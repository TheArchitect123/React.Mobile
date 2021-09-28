import React from "react";
import { StyleSheet, View } from "react-native";

const rowStyles = StyleSheet.create({
  container: {
    flexDirection: "row"
  }
});

export const NumberPadRow = ({ children }) => {
  return (
    <View style={rowStyles.container}>
      {children}
    </View>
  );
};
