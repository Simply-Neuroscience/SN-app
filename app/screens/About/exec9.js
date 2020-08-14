import React from "react";
import { Text } from "native-base";
import { View, Image, StyleSheet } from "react-native";

import colors from "../../config/colors";

export default () => {
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <Text style={styles.oneline}>meet the alumni advisors (9/9)</Text>
      <View style={styles.insideBox}>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/parin.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Parin Shaik</Text>
            <Text style={styles.title}></Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/scott.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Scott Blender</Text>
            <Text style={styles.title}></Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/dharshan.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Dharshan Varia</Text>
            <Text style={styles.title}></Text>
          </View>
        </View>
        <View style={styles.sectionBox}>
          <View>
            <Image
              source={require("../../assets/serene.png")}
              style={styles.profileImg}
            />
          </View>
          <View style={styles.profileDesc}>
            <Text style={styles.name}>Serene Feng</Text>
            <Text style={styles.title}></Text>
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
