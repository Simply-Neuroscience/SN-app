import React from "react";
import { View } from "native-base";
import { StyleSheet, TouchableOpacity, Dimensions, Text } from "react-native";

import colors from "../../config/colors";

export default ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: colors.darkBlue,
        alignItems: "center",
        height: "100%",
      }}
    >
      <View style={styles.line1} />
      <View style={styles.descBox}>
        <Text style={styles.desc}>
          Simply Neuroscience is an international, student-run nonprofit
          organization dedicated to fostering students' interdisciplinary
          interests in the brain, specifically through neuroscience and
          psychology education, outreach, and awareness. Our aim is to empower
          students to engage in brain-related fields through projects and
          initiatives on local, regional, national, and international levels.
        </Text>
      </View>
      <View style={styles.line2} />
      <Text style={styles.oneline}>meet the leadership team</Text>
      <View style={styles.buttonrows}>
        <View style={styles.buttonrow}>
          <TouchableOpacity
            style={styles.buttonBox1}
            onPress={() => navigation.navigate("exec1")}
          >
            <Text style={styles.buttonText1}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBox2}
            onPress={() => navigation.navigate("exec2")}
          >
            <Text style={styles.buttonText2}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBox1}
            onPress={() => navigation.navigate("exec3")}
          >
            <Text style={styles.buttonText1}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonrow}>
          <TouchableOpacity
            style={styles.buttonBox2}
            onPress={() => navigation.navigate("exec4")}
          >
            <Text style={styles.buttonText2}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBox1}
            onPress={() => navigation.navigate("exec5")}
          >
            <Text style={styles.buttonText1}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBox2}
            onPress={() => navigation.navigate("exec6")}
          >
            <Text style={styles.buttonText2}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonrow}>
          <TouchableOpacity
            style={styles.buttonBox1}
            onPress={() => navigation.navigate("exec7")}
          >
            <Text style={styles.buttonText1}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBox2}
            onPress={() => navigation.navigate("exec8")}
          >
            <Text style={styles.buttonText2}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBox1}
            onPress={() => navigation.navigate("exec9")}
          >
            <Text style={styles.buttonText1}>9</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

let wHeight = Dimensions.get("window").height;
let wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  line1: {
    height: wHeight * 0.005,
    width: wWidth * 0.8,
    marginTop: wHeight * 0.03,
    marginBottom: wHeight * 0.015,
    backgroundColor: colors.white,
  },
  line2: {
    height: wHeight * 0.005,
    width: wWidth * 0.8,
    marginTop: wHeight * 0.015,
    marginBottom: wHeight * 0.03,
    backgroundColor: colors.white,
  },
  descBox: {
    height: wHeight * 0.25,
    width: wWidth * 0.9,
    alignItems: "center",
    justifyContent: "center",
  },
  desc: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
  },
  oneline: {
    fontSize: 15,
    textAlign: "center",
    color: colors.white,
    marginBottom: wHeight * 0.01,
    fontWeight: "bold",
  },
  buttonrows: {
    height: wHeight * 0.5,
  },
  buttonrow: {
    height: "33%",
    width: wWidth * 0.9,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonBox1: {
    backgroundColor: colors.white,
    width: "30%",
    aspectRatio: 1,
    borderRadius: (wHeight * 0.3) / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  buttonBox2: {
    backgroundColor: colors.lightBlue,
    width: "30%",
    aspectRatio: 1,
    borderRadius: (wHeight * 0.3) / 2,
    alignItems: "center",
    justifyContent: "center",
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
  },
  buttonText1: {
    color: colors.darkBlue,
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText2: {
    color: colors.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
