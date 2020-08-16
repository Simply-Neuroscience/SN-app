import React from "react";
import { Text } from "native-base";
import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  TouchableOpacity,
  Linking,
  ScrollView,
} from "react-native";
import colors from "../../config/colors";

function BSR() {
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.titleText}>brain study resources</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.simplyneuroscience.org/brain-bee-study-resources"
            )
          }
        >
          <Image
            source={require("../../assets/aboutBRC.png")}
            style={styles.schedule}
            resizeMode="stretch"
          />
        </TouchableOpacity>

        <Image
          source={require("../../assets/ultimateguide.png")}
          style={styles.schedule2}
          resizeMode="stretch"
        />
        <Image
          source={require("../../assets/quiz.png")}
          style={styles.schedule3}
          resizeMode="stretch"
        />
      </ScrollView>
    </View>
  );
}

let wHeight = Dimensions.get("window").height;
let wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  descBox: {
    height: wHeight * 0.44,
    width: Math.min(wWidth * 1, wHeight * 0.4) * 0.95,
  },
  schedule: {
    height: wHeight * 0.18,
    width: wWidth * 0.9,
    marginBottom: "4%",
    marginTop: "4%",
    alignSelf: "center",
  },
  schedule2: {
    height: wHeight * 0.27,
    width: wWidth * 0.9,
    marginBottom: "3%",
    alignSelf: "center",
  },
  schedule3: {
    height: wHeight * 0.3,
    width: wWidth * 0.9,
    alignSelf: "center",
    marginBottom: "10%",
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginTop: "4%",
  },
  scrollView: {
    marginHorizontal: 20,
  },
});

export default BSR;
