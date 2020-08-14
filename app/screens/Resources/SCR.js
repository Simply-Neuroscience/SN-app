import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Linking } from "react-native";
import colors from "../../config/colors";

function SCR(){
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
        <Text>SCR</Text>
    </View>
  )
};

export default SCR;