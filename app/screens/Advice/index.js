import React from "react";
import { StyleSheet, Image, Text, View, Dimensions } from "react-native";

import colors from "../../config/colors";

export default () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={require("../../assets/questionspanel.jpg")}
        style={styles.panel}
      />
      <Text style={styles.descBox}>
        Do you need tips for how to pick a topic for a neuroscience research
        paper? Would you like someone to look over your cold email to
        professors? Are you struggling to find some good colleges to apply to
        for neuroscience?🧠📖🤔{"\n"}
        {"\n"}
        We’ve been receiving a lot of DMs like these over the past few weeks, so
        we decided to create a new initiative to better support your brain
        journey: a FREE NEURO ADVISING LINE! 📧 Email
        advice@simplyneuroscience.org for tips and encouragement — ask us
        anything, and our team of fellow high school students and undergraduates
        will do their best to respond in a timely, comprehensive manner.🥳{"\n"}
        {"\n"}
        You don’t have to embark on this journey alone. Let us help!🤩 {"\n"}
        {"\n"}(Note: We take your privacy very seriously and won’t share your
        identity with anyone outside our team! Please remember to keep all
        questions appropriate.)
      </Text>
    </View>
  );
};

let wHeight = Dimensions.get("window").height;
let wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  panel: {
    height: Math.min(wWidth * 0.9, wHeight * 0.4),
    width: Math.min(wWidth * 0.9, wHeight * 0.4),
    marginTop: wHeight * 0.02,
    marginBottom: wHeight * 0.02,
    alignItems: "center",
  },
  descBox: {
    height: wHeight * 0.44,
    width: Math.min(wWidth * 0.9, wHeight * 0.4) * 0.95,
    fontSize: 12,
    color: colors.darkBlue,
    fontWeight: "bold",
  },
  desc: {},
});
