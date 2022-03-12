import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import Footer from "../components/Footer";
import Splash from "../components/Splash";

const LoggedOut = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Splash />
      </View>
      <View style={styles.footerContainer}>
        <Footer />
      </View>
      {/* <BottomTabBar /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00AFAF",
    width: "100%",
  },
  logoContainer: {
    flex: 3,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footerContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoggedOut;
