import React from "react";
import { Text } from "native-base";
import { View, Image, StyleSheet } from "react-native";

import colors from "../../config/colors";

export default () => {
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <Text style={styles.oneline}>meet the executive team (2/9)</Text>
      <View style={styles.insideBox}>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/jed.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Jed Quiaoit</Text>
            <Text style={styles.title}>Founder | Chief Executive Officer</Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/sheima.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Sheima Bana</Text>
            <Text style={styles.title}>
              Secretary | Co-Director of Awareness Content Creation
            </Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/sarah.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Sarah Mirsaidi</Text>
            <Text style={styles.title}>
              Co-Director of Awareness Content Creation
            </Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/sasha.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Sasha Tunsiricharoengul</Text>
            <Text style={styles.title}>
              Co-Director of Outreach & Research | Co-Lead of Presynaptic
              Project
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
