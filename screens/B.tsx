import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const B = () => {
  return (
    <View style={styles.bView}>
      <Text style={styles.ralewayText}>Raleway</Text>
      <Text style={styles.montserratText}>Montserrat</Text>
      <Text style={styles.montserratText1}>Montserrat</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ralewayText: {
    position: "absolute",
    top: 111,
    left: 99,
    fontSize: 49,
    fontWeight: "300",
    fontFamily: "Raleway",
    color: "#fff",
    textAlign: "center",
  },
  montserratText: {
    position: "absolute",
    top: 220,
    left: 62,
    fontSize: 49,
    fontWeight: "300",
    fontFamily: "Montserrat",
    color: "#fff",
    textAlign: "center",
  },
  montserratText1: {
    position: "absolute",
    top: 351,
    left: 61,
    fontSize: 49,
    fontWeight: "700",
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  bView: {
    position: "relative",
    backgroundColor: "#512040",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default B;
