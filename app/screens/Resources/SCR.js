import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Linking } from "react-native";
import colors from "../../config/colors";

function SCR(){
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <Text>#scicomm resources</Text>
      <Image
        source={require("../../assets/whatissc.png")}
        style={styles.schedule}
      />
      <Image
        source={require("../../assets/crispr.png")}
        style={styles.schedule2}
      />
    </View>
  )
};

let wHeight = Dimensions.get("window").height;
let wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  descBox: {
    height: wHeight * 0.44,
    width: Math.min(wWidth * 1, wHeight * 0.4) * 0.95,
  },
  schedule: {
    height: wHeight * 0.34,
    width: wWidth * 0.9,
    marginBottom: "4%", 
    marginTop: "5%"
  },
  schedule2: {
    height: wHeight * 0.32,
    width: wWidth * 0.9,
    marginBottom: "3%"
  },
  schedule3: {
    height: wHeight * 0.15,
    width: wWidth * 0.8
  }
});

export default SCR;