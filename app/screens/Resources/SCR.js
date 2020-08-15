import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Linking } from "react-native";
import colors from "../../config/colors";

function SCR(){
  return (
    <View style={{ height: "100%", backgroundColor: colors.darkBlue }}>
      <Text style={styles.titleText}>#scicomm resources</Text>
      <Image
        source={require("../../assets/whatissc.png")}
        style={styles.schedule}
      />
      <Image
        source={require("../../assets/crispr.png")}
        style={styles.schedule2}
      />
      <TouchableOpacity
        onPress={() => Linking.openURL("https://www.instagram.com/thevisualcortexofficial/")}
        style={styles.buttonBox}
      >
        <View style={styles.button}>
          <Text style={styles.buttonText}>@thevisualcortexofficial</Text>
        </View>  
      </TouchableOpacity>
    </View>
  )
};

let wHeight = Dimensions.get("window").height;
let wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  descBox: {
    height: wHeight * 0.44,
    width: Math.min(wWidth * 1, wHeight * 0.4) * 0.95,
  },
  schedule: {
    height: wHeight * 0.3,
    width: wWidth * 0.6,
    marginBottom: "4%", 
    marginTop: "4%",
    alignSelf: "center",
  },
  schedule2: {
    height: wHeight * 0.3,
    width: wWidth * 0.6,
    marginBottom: "3%",
    alignSelf: "center",
  },
  schedule3: {
    height: wHeight * 0.3,
    width: wWidth * 0.9,
    alignSelf: "center",
    marginBottom: "10%"
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    marginTop: "4%"
  }, 
  scrollView: {
    marginHorizontal: 20,
  },
  button: {
    alignItems: "center",
    backgroundColor: colors.white,
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
    color: colors.darkBlue,
    fontSize: 25,
    //fontFamily: "Raleway",
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonBox: {
    height: "10%",
    marginTop: "6%",
    width: "75%",
    alignSelf: "center"
  },
});

export default SCR;