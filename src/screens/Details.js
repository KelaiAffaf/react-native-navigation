import React from "react";
import { View, Text, StyleSheet, Image, Button, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import List from "../components/List";
function Details() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      {/* <Image style={styles.image} source={require("../src/assets/Group.png")} /> */}
      <List />
      {/* <Button
        title="Go to Home"
        onPress={() => {
          navigation.navigate("LoggedOut");
          console.log("Go to LoggedOut");
        }}
      /> */}
      {/* <BottomTabBar /> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    width: 200,
    height: 200,
  },
});
export default Details;
