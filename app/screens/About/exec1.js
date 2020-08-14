import React from "react";
import { Text } from "native-base";
import { View, Image, StyleSheet } from "react-native";

import colors from "../../config/colors";

export default () => {
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <Text style={styles.oneline}>meet the executive team (1/9)</Text>
      <View style={styles.insideBox}>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/chinmayi.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Chinmayi Balusu</Text>
            <Text style={styles.title}>Founder | Chief Executive Officer</Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/athena.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Athena Yao</Text>
            <Text style={styles.title}>
              Chief Operating Officer | Co-Director of Outreach and Research
            </Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/aravind.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Aravind Krishnan</Text>
            <Text style={styles.title}>
              President | Board Chair | Director of Legislation | Co-Director of
              Human Resources
            </Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/skyler.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Skyler Basco</Text>
            <Text style={styles.title}>
              Vice President | Board Vice Chair | Co-Director of Brain Resource
              Creation | Co-Lead of the Presynaptic Project/The Visual Cortex
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionBox: {
    height: "22%",
    width: "100%",
    marginTop: "1.5%",
    marginBottom: "1.5%",
    flexDirection: "row",
  },
  profileImg: {
    aspectRatio: 1,
    height: "90%",
    marginLeft: "10%",
    marginRight: "0%",
  },
  profileDesc: { flexGrow: 1, flex: 1, justifyContent: "center" },
  name: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: "3%",
  },
  title: { fontSize: 16, color: colors.white },
  insideBox: {
    marginTop: "3%",
    height: "95%",
    width: "95%",
    backgroundColor: colors.darkBlue,
  },
  oneline: {
    fontSize: 15,
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
    marginTop: "5%",
  },
});
