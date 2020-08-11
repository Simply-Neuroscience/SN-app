import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/WelcomeScreen.js";
import About from "../screens/About/index.js";
import Advice from "../screens/Advice/index.js";
import Resources from "../screens/Resources/index.js";
import SimplyNeurocon from "../screens/SimplyNeurocon/index.js";
import { StyleSheet, Dimensions } from "react-native";

import colors from "../config/colors";

const HomeStack = createStackNavigator();

const styles = StyleSheet.create({
  header1: {
    height: Dimensions.get("window").height * 0.1,
    backgroundColor: colors.white,
  },
  header2: {
    height: Dimensions.get("window").height * 0.1,
    backgroundColor: colors.darkBlue,
  },
  headerTitle1: {
    color: colors.darkBlue,
    fontSize: 20,
    //fontFamily: "Raleway",
    fontWeight: "bold",
  },
  headerTitle2: {
    color: colors.white,
    fontSize: 20,
    //fontFamily: "Raleway",
    fontWeight: "bold",
  },
  headerBackTitle1: {
    color: "black",
  },
  headerBackTitle2: {
    color: colors.white,
  },
});

export default function MyStack() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
          }}
        />
        <HomeStack.Screen
          name="About"
          component={About}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
        <HomeStack.Screen
          name="Advice"
          component={Advice}
          options={{
            headerStyle: styles.header2,
            headerTitleStyle: styles.headerTitle2,
            headerBackTitleStyle: styles.headerBackTitle2,
            title: "annoymous advice",
          }}
        />
        <HomeStack.Screen
          name="Resources"
          component={Resources}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "explore our resources",
          }}
        />
        <HomeStack.Screen
          name="SimplyNeurocon"
          component={SimplyNeurocon}
          options={{
            headerStyle: styles.header2,
            headerTitleStyle: styles.headerTitle2,
            headerBackTitleStyle: styles.headerBackTitle2,
            title: "simply neurocon",
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
