import React from "react";
import { Text } from "native-base";
import { View, Image, StyleSheet } from "react-native";

import colors from "../../config/colors";

export default () => {
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <View style={styles.sectionBox}>
        <View>
          <Image
            source={require("../../assets/SNlogo.png")}
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
            source={require("../../assets/SNlogo.png")}
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
            source={require("../../assets/SNlogo.png")}
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
            source={require("../../assets/SNlogo.png")}
            style={styles.profileImg}
          />
        </View>
        <View style={styles.profileDesc}>
          <Text style={styles.name}>Chinmayi Balusu</Text>
          <Text style={styles.title}>Founder | Chief Executive Officer</Text>
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
  profileImg: { aspectRatio: 1, height: "100%" },
  profileDesc: { flexGrow: 1, flex: 1, justifyContent: "center" },
  name: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
    marginBottom: "3%",
  },
  title: { fontSize: 16, color: colors.white },
});
