// splash
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/bg.png")} style={styles.bg} />
      <Image source={require("../../assets/Group.png")} style={styles.photo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
  },
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "relative",
  },
  photo: {
    position: "absolute",
    top: "50%",
    left: "30%",
    resizeMode: "contain",
    transform: [{ translateX: -50 }, { translateY: -50 }],
  },
});

export default Splash;
