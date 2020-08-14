import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Linking } from "react-native";
import colors from "../../config/colors";

function LPW(){
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
        <Text>LPW</Text>
    </View> 
  )
};

export default LPW;