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
      <Image
        source={require("../assets/SNlogo.png")}
        style={{ width: 200, height: 200 }}
      />
      {/* <Text style={styles.title}>Welcome to Simply Neuroscience</Text> */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SimplyNeurocon")}
        >
          <Text style={styles.buttonText}>Simply Neurocon</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Resources")}
        >
          <Text style={styles.buttonText}>Explore our Resources</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Advice")}
        >
          <Text style={styles.buttonText}>Annoymous Advice</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.buttonText}>About Us</Text>
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
    height: "60%",
    width: "80%",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    padding: "10%",
    width: "100%",
    borderRadius: 20,
  },
  buttonText: { color: colors.white, fontSize: 25 },
  title: {
    fontSize: 20,
    color: "black",
    top: "5%",
  },
});

export default WelcomeScreen;
