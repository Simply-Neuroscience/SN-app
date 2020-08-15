import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, ScrollView } from "react-native";
import colors from "../../config/colors";


function SimplyNeurocon({ navigation }){
  return (
    <View style={{ alignItems: "center" }}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
          style={styles.buttonBox}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>register here!</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.mainText}>August 22 & 23 and 29 & 30, 2020</Text>
        <Image
          source={require("../../assets/snconfpost.jpg")}
          style={styles.panel}
        />
        <Image
          source={require("../../assets/snconfpost2.jpg")}
          style={styles.panel}
        />
      </ScrollView>

    </View>
  )
};

let wHeight = Dimensions.get("window").height;
let wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  panel: {
    height: Math.min(wWidth * 0.6, wHeight * 0.4),
    width: Math.min(wWidth * 0.6, wHeight * 0.4),
    marginTop: wHeight * 0.02,
    marginBottom: wHeight * 0.01,
    alignItems: "center",
    alignSelf: "center"
  },
  descBox: {
    height: wHeight * 0.44,
    width: Math.min(wWidth * 0.9, wHeight * 0.4) * 0.95,
    fontSize: 12,
    color: colors.darkBlue,
    fontWeight: "bold",
  },
  desc: {

  },
  mainText: {
    fontSize: 18,
    color: colors.darkBlue,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.lightBlue,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "black",
    shadowOpacity: 0.25,
    height: "80%",
    width: "100%",
    borderRadius: 15,
    flexDirection: "column",
    justifyContent: "center",
    alignSelf: "center"
  },
  buttonText: {
    color: colors.white,
    fontSize: 20,
    //fontFamily: "Raleway",
    fontWeight: "bold",
  },
  buttonBox: {
    height: "13%",
    marginTop: "7%",
    paddingBottom: "3%",
    width: "50%",
    alignSelf: "center"
  }, 
  scrollView: {
    marginHorizontal: 20
  }
});

export default SimplyNeurocon;