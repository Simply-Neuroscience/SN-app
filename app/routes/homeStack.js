import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/WelcomeScreen.js";
import About from "../screens/About/index.js";
import Advice from "../screens/Advice/index.js";
import Resources from "../screens/Resources/index.js";
import SimplyNeurocon from "../screens/SimplyNeurocon/index.js";
import aboutHome from "../screens/About/aboutHome.js";
import exec1 from "../screens/About/exec1.js";
import exec2 from "../screens/About/exec2.js";
import exec3 from "../screens/About/exec3.js";
import exec4 from "../screens/About/exec4.js";
import exec5 from "../screens/About/exec5.js";
import exec6 from "../screens/About/exec6.js";
import exec7 from "../screens/About/exec7.js";
import exec8 from "../screens/About/exec8.js";
import exec9 from "../screens/About/exec9.js";
import Register from "../screens/Register/index.js";
import Information from "../screens/SimplyNeurocon/Information.js"

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
    alignItems: "center",
  },
  headerTitle2: {
    color: colors.white,
    fontSize: 20,
    //fontFamily: "Raleway",
    fontWeight: "bold",
    alignItems: "center",
  },
  headerBackTitle1: {
    color: "black",
    alignItems: "center",
  },
  headerBackTitle2: {
    color: colors.white,
    alignItems: "center",
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
        <HomeStack.Screen
          name="Register"
          component={Register}
          options={{
            headerStyle: styles.header2,
            headerTitleStyle: styles.headerTitle2,
            headerBackTitleStyle: styles.headerBackTitle2,
            title: "simply neurocon",
          }}
        />
        <HomeStack.Screen
          name="Information"
          component={Information}
          options={{
            headerStyle: styles.header2,
            headerTitleStyle: styles.headerTitle2,
            headerBackTitleStyle: styles.headerBackTitle2,
            title: "simply neurocon",
          }}
        />
        <HomeStack.Screen
          name="about us"
          component={aboutHome}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
          }}
        />
        <HomeStack.Screen
          name="exec1"
          component={exec1}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
        <HomeStack.Screen
          name="exec2"
          component={exec2}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
        <HomeStack.Screen
          name="exec3"
          component={exec3}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
        <HomeStack.Screen
          name="exec4"
          component={exec4}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
        <HomeStack.Screen
          name="exec5"
          component={exec5}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
        <HomeStack.Screen
          name="exec6"
          component={exec6}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
        <HomeStack.Screen
          name="exec7"
          component={exec7}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
        <HomeStack.Screen
          name="exec8"
          component={exec8}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
        <HomeStack.Screen
          name="exec9"
          component={exec9}
          options={{
            headerStyle: styles.header1,
            headerTitleStyle: styles.headerTitle1,
            headerBackTitleStyle: styles.headerBackTitle1,
            title: "about us",
          }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
