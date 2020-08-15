import React from "react";
import { Text } from "native-base";
import { StyleSheet, Image, View, Dimensions, TouchableOpacity, Linking, ScrollView } from "react-native";
import colors from "../../config/colors";

function Information ({ navigation }){
    return (
        <View style={{ height: "100%", alignItems: "center" }}>
          <ScrollView style={styles.scrollView}>
              <Text style={styles.mainText}>Thanks for registering!</Text>
              <Image
                source={require("../../assets/simplyneurocon.png")}
                style={styles.panel}
              />
              <Image
                source={require("../../assets/schedule.png")}
                style={styles.schedule}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate("MoreInformation")}
                style={styles.buttonBox}
              >
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Tap for more information!</Text>
                </View>  
              </TouchableOpacity>            
          </ScrollView>
        </View>
    )
};

let wHeight = Dimensions.get("window").height;
let wWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  panel: {
    height: Math.min(wWidth * 0.3, wHeight * 0.4),
    width: Math.min(wWidth * 0.7, wHeight * 0.4),
    marginTop: wHeight * 0.02,
    marginBottom: wHeight * 0.01,
    alignItems: "center",
    alignSelf: "center"
  },
  descBox: {
    height: wHeight * 0.44,
    width: Math.min(wWidth * 1, wHeight * 0.4) * 0.95,
  },
  schedule: {
    height: wHeight * 0.45,
    width: wWidth * 0.9
  },
  desc: {

  },
  mainText: {
    fontSize: 34,
    color: colors.darkBlue,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "9%",
    marginLeft: "9%",
    marginTop: "7%",
  },
  mainText2: {
    fontSize: 30,
    color: colors.darkBlue,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: "5.9%",
    marginLeft: "5.9%",
    marginBottom: "-20%"
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
    fontSize: 25,
    //fontFamily: "Raleway",
    fontWeight: "bold",
    textAlign: "center",
    marginLeft: "15%",
    marginRight: "15%",
    alignSelf: "center"
  },
  buttonBox: {
    height: "15%",
    marginTop: "6%",
    width: "60%",
    marginBottom: "15%",
    alignSelf: "center"
  },
  registerText: {
    fontSize: 15,
    //fontFamily: "Raleway",
    fontWeight: "bold",
    textAlign: "center"
  },
  scrollView: {
    marginHorizontal: 20
  }
});

export default Information;

