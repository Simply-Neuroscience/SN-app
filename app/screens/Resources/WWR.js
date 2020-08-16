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

function WWR() {
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.titleText}>wellness week resources</Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL(
              "https://www.simplyneuroscience.org/wellness-week-resources"
            )
          }
        >
          <Image
            source={require("../../assets/aboutWWR.png")}
            style={styles.schedule}
            resizeMode="stretch"
          />
        </TouchableOpacity>

        <Text style={styles.subtitle}>
          Guide to Starting Your Own Wellness Week Intiative
        </Text>
        <Image
          source={require("../../assets/howtostart.png")}
          style={styles.schedule2}
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
    height: wHeight * 0.24,
    width: wWidth * 0.9,
    marginBottom: "2%",
    marginTop: "4%",
    alignSelf: "center",
  },
  schedule2: {
    height: wHeight * 0.52,
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
  subtitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    marginBottom: "3%",
  },
});

export default WWR;
