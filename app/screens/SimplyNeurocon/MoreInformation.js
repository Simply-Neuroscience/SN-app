import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Linking } from "react-native";
import colors from "../../config/colors";

function MoreInformation ({ navigation }){
    return (
        <View style={{ alignItems: "center" }}>
            <Image
              source={require("../../assets/meetspeakers.png")}
              style={styles.schedule}
            />
            <Image
              source={require("../../assets/faq.png")}
              style={styles.schedule2}
            />
            <Image
              source={require("../../assets/ourcollaborators.png")}
              style={styles.schedule3}
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
  },
  desc: {

  },
  mainText: {
    fontSize: 34,
    color: colors.darkBlue,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "9%",
    marginLeft: "9%",
    marginTop: "7%",
  },
  mainText2: {
    fontSize: 30,
    color: colors.darkBlue,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "5.9%",
    marginLeft: "5.9%",
    marginBottom: "-20%"
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
    fontSize: 25,
    //fontFamily: "Raleway",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "15%",
    marginRight: "15%"
  },
  buttonBox: {
    height: "15%",
    marginTop: "6%",
    width: "60%",
  },
  registerText: {
    fontSize: 15,
    //fontFamily: "Raleway",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default MoreInformation;

