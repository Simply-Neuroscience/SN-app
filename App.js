import { StatusBar, setStatusBarTranslucent } from "expo-status-bar";
import React, {useState} from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import Navigator from "./app/routes/homeStack";

export default function App() {
  return <Navigator />;
}
