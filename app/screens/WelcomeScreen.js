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
      <TopBar></TopBar>
      <Text style={styles.title}>Welcome to Simply Neuroscience</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SimplyNeurocon")}
        >
          <Text>Simply Neurocon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Resources")}
        >
          <Text>Explore our Resources</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Advice")}
        >
          <Text>Annoymous Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("About")}
        >
          <Text>About Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  buttonContainer: {
    top: "10%",
    height: "70%",
    width: "80%",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: "10%",
    width: "100%",
  },
  title: {
    fontSize: 20,
    color: "black",
    top: "5%",
  },
});

export default WelcomeScreen;
