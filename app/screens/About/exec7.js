import React from "react";
import { Text } from "native-base";
import { View, Image, StyleSheet } from "react-native";

import colors from "../../config/colors";

export default () => {
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <Text style={styles.oneline}>meet the executive team</Text>
      <View style={styles.insideBox}>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/gurleen.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Gurleen Badwal</Text>
            <Text style={styles.title}>Co-Lead of Presynaptic Project</Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View></View>
          <View
            style={{
              flexGrow: 1,
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                color: colors.white,
                fontWeight: "bold",
                marginBottom: "3%",
              }}
            >
              meet the advisory board
            </Text>
            <Text style={styles.title}></Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/caroline.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Dr. Caroline Johnson</Text>
            <Text style={styles.title}>
              President | Board Chair | Director of Legislation | Co-Director of
              Human Resources
            </Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/sara.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Sara Gordillo Sampedro</Text>
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
    backgroundColor: colors.darkBlue,
    width: "95%",
  },
  oneline: {
    fontSize: 15,
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
    marginTop: "5%",
  },
});
