import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Linking } from "react-native";
import colors from "../../config/colors";

function Register ({ navigation }){
    return (
        <View style={{ alignItems: "center" }}>
            <Text style={styles.mainText}>August 22 & 23 and 29 & 30, 2020</Text>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://docs.google.com/forms/u/1/d/1jNUpoEs_HrAuCGIBBUZgmrNil4v0sBGIHxDLkIVQvwo/edit")}
            >
              <Image
                source={require("../../assets/googleForms.png")}
                style={styles.panel}
              />
              <Text style={styles.registerText}>Tap the icon to regsiter!</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("Information")}
              style={styles.buttonBox}
            >
              <View style={styles.button}>
                <Text style={styles.buttonText}>Tap here for more about Simply Neurocon!</Text>
              </View>  
            </TouchableOpacity>
            <Text style={styles.mainText2}>More information will be released as the event date approaches! </Text>
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
    fontSize: 42,
    color: colors.darkBlue,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "9%",
    marginLeft: "9%",
    marginTop: "7%",
    marginBottom: "3%"
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
    textAlign: "center"
  },
  buttonBox: {
    height: "13%",
    marginTop: "6%",
    width: "75%",
    height: "20%"
  },
  registerText: {
    fontSize: 15,
    //fontFamily: "Raleway",
    fontWeight: "bold",
    textAlign: "center"
  }
});

export default Register;


