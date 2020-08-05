import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/WelcomeScreen.js";
import About from "../screens/About/index.js";
import Advice from "../screens/Advice/index.js";
import Resources from "../screens/Resources/index.js";
import SimplyNeurocon from "../screens/SimplyNeurocon/index.js";

const HomeStack = createStackNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={Home} />
        <HomeStack.Screen name="About" component={About} />
        <HomeStack.Screen name="Advice" component={Advice} />
        <HomeStack.Screen name="Resources" component={Resources} />
        <HomeStack.Screen name="SimplyNeurocon" component={SimplyNeurocon} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}
