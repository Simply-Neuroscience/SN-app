import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity } from "react-native";
import colors from "../../config/colors";
import HTMLView from 'react-native-htmlview'

function Register ({ navigation }){
  return (
    <View style={{ alignItems: "center" }}>
        <Text>Register</Text>
    </View>
  )
};

let wHeight = Dimensions.get("window").height;
let wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  panel: {
    height: Math.min(wWidth * 0.6, wHeight * 0.4),
    width: Math.min(wWidth * 0.6, wHeight * 0.4),
    marginTop: wHeight * 0.02,
    marginBottom: wHeight * 0.01,
    alignItems: "center",
  },
  descBox: {
    height: wHeight * 0.44,
    width: Math.min(wWidth * 0.9, wHeight * 0.4) * 0.95,
    fontSize: 12,
    color: colors.darkBlue,
    fontWeight: "bold",
  },
  desc: {

  },
  mainText: {
    fontSize: 18,
    color: colors.darkBlue,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    height: "80%",
    width: "100%",
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    //fontFamily: "Raleway",
    fontWeight: "bold",
  },
  buttonBox: {
    height: "13%",
    marginTop: "7%",
    paddingBottom: "3%",
    width: "50%"
  }
});

export default Register;

