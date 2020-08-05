import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

import colors from "../config/colors";

function TopBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={{ fontSize: 25, color: colors.pink }}>
          Enter our giveaway now!
        </Text>
      </TouchableOpacity>
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
    justifyContent: "center", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopBar;
