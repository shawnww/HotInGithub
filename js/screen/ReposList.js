import React from "react";
import { View, Text, StyleSheet } from "react-native";

const style = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: "#f00"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

const Circle = () => {
  return <View style={style.circle} />;
};

export default () => {
  return (
    <View style={style.container}>
      <Circle />
      <Circle />
      <Circle />
      <Circle />
      <Circle />
    </View>
  );
};
