import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import aboutHome from "./aboutHome.js";
import exec1 from "./exec1.js";
import exec2 from "./exec2.js";
import exec3 from "./exec3.js";
import exec4 from "./exec4.js";
import exec5 from "./exec5.js";
import exec6 from "./exec6.js";
import exec7 from "./exec7.js";
import exec8 from "./exec8.js";
import exec9 from "./exec9.js";

import { StyleSheet, Dimensions, Text } from "react-native";

import colors from "../../config/colors";

const styles = StyleSheet.create({
  header1: {
    height: Dimensions.get("window").height * 0.1,
    backgroundColor: colors.white,
  },
  headerTitle1: {
    color: colors.darkBlue,
    fontSize: 20,
    //fontFamily: "Raleway",
    fontWeight: "bold",
  },
  headerBackTitle1: {
    color: "black",
  },
});

const HomeStack = createStackNavigator();

export default () => {
  return (
    <NavigationContainer independent={true}>
      <HomeStack.Navigator>
        <HomeStack.Screen
          name="aboutus"
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
};
