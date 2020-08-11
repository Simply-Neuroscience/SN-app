import React from "react";
import {
  StatusBar,
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import Constants from "expo-constants";
import TopBar from "../components/TopBar";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <TopBar navigation={navigation}></TopBar>
      <View style={styles.background}>
        <View style={styles.circle}>
          <Image
            source={require("../assets/SNlogo.png")}
            style={{ width: "90%", height: "90%" }}
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => navigation.navigate("SimplyNeurocon")}
          >
            <View style={styles.button1}>
              <Text style={styles.buttonText1}>simply neurocon</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Resources")}
            style={styles.buttonBox}
          >
            <View style={styles.button2}>
              <Text style={styles.buttonText2}>explore our resources</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Advice")}
            style={styles.buttonBox}
          >
            <View style={styles.button1}>
              <Text style={styles.buttonText1}>annoymous advice</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("About")}
            style={styles.buttonBox}
          >
            <View style={styles.button2}>
              <Text style={styles.buttonText2}>about us</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

let wHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  background: {
    backgroundColor: colors.darkBlue,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    marginTop: wHeight * 0.03,
    height: wHeight * 0.45,
    width: "80%",
    flexDirection: "column",
  },
  button1: {
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
  button2: {
    alignItems: "center",
    backgroundColor: colors.white,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    height: "80%",
    width: "100%",
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonBox: {
    height: "25%",
  },
  buttonText1: {
    color: colors.white,
    fontSize: 20,
    //fontFamily: "Raleway",
    fontWeight: "bold",
  },
  buttonText2: {
    color: colors.darkBlue,
    fontSize: 20,
    //fontFamily: "Raleway",
    fontWeight: "bold",
  },
  circle: {
    width: wHeight * 0.3,
    height: wHeight * 0.3,
    borderRadius: (wHeight * 0.3) / 2,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
});

export default WelcomeScreen;
