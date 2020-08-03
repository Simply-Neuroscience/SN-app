import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

function TopBar(props) {
  return (
    <View style={styles.container}>
      <Text>Left</Text>
      <Image source={require("../assets/favicon.png")} />
      <Text>Right</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: 52,
    flexDirection: "row", // row
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "space-between", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopBar;
