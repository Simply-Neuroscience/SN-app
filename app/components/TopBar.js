import React from "react";
import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import {
  TouchableHighlight,
  TouchableOpacity,
} from "react-native-gesture-handler";

import colors from "../config/colors";

function TopBar({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={{ fontSize: 25, color: "white", fontWeight: "bold", alignItems: "center"}}>
          enter our giveaway now!
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    height: Dimensions.get("window").height * 0.07,
    marginBottom: Dimensions.get("window").height * 0.03,
    flexDirection: "row", // row
    backgroundColor: colors.lightBlue,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    alignItems: "center",
    justifyContent: "center", // center, space-around
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default TopBar;
