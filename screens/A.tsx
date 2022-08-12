import * as React from "react";
import { Text, StyleSheet, View } from "react-native";

const A = () => {
  return (
    <View style={styles.aView}>
      <Text style={styles.juleeText}>Julee</Text>
      <Text style={styles.oswaldText}>Oswald</Text>
      <Text style={styles.oswaldText1}>Oswald</Text>
      <Text style={styles.robotoText}>Roboto</Text>
      <Text style={styles.robotoSemiboldText}>Roboto Semibold</Text>
      <Text style={styles.robotoBlackText}>Roboto Black</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  juleeText: {
    position: "absolute",
    top: 111,
    left: 145,
    fontSize: 49,
    fontFamily: "Julee",
    color: "#fff",
    textAlign: "center",
  },
  oswaldText: {
    position: "absolute",
    top: 220,
    left: 130,
    fontSize: 49,
    fontFamily: "Oswald",
    color: "#fff",
    textAlign: "center",
  },
  oswaldText1: {
    position: "absolute",
    top: 349,
    left: 108,
    fontSize: 49,
    fontFamily: "Inter",
    color: "#fff",
    textAlign: "center",
  },
  robotoText: {
    position: "absolute",
    top: 441,
    left: 115,
    fontSize: 49,
    fontWeight: "600",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  robotoSemiboldText: {
    position: "absolute",
    top: 531,
    left: 71,
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  robotoBlackText: {
    position: "absolute",
    top: 621,
    left: 98,
    fontSize: 32,
    fontWeight: "900",
    fontFamily: "Roboto",
    color: "#fff",
    textAlign: "center",
  },
  aView: {
    position: "relative",
    backgroundColor: "#3430d3",
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default A;
