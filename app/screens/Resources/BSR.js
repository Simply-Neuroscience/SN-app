import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Linking } from "react-native";
import colors from "../../config/colors";

function BSR(){
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
        <Text>BSR</Text>
    </View>
  )
};

export default BSR;