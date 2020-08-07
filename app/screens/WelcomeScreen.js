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
} from "react-native";

import Constants from "expo-constants";
import TopBar from "../components/TopBar";

import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <TopBar navigation={navigation}></TopBar>
      <View style={styles.background}>
        <Image
          source={require("../assets/SNlogo.png")}
          style={{ width: "60%", height: "40%" }}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => navigation.navigate("SimplyNeurocon")}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Simply Neurocon</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Resources")}
            style={styles.buttonBox}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Explore our Resources</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Advice")}
            style={styles.buttonBox}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>Annoymous Advice</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("About")}
            style={{ height: "25%" }}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>About Us</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  buttonContainer: {
    height: "60%",
    width: "80%",
    flexDirection: "column",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    height: "80%",
    width: "100%",
    borderRadius: 20,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonBox: {
    height: "25%",
  },
  buttonText: { color: colors.white, fontSize: 20 },
});

export default WelcomeScreen;
