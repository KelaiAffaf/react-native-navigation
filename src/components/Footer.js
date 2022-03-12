// splash
import React from "react";
import { View, Text, Image, Button, StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
const Footer = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <Button
        style={style.Btn1}
        title="Home"
        onPress={() => {
          navigation.navigate("Home");
          console.log("Go to Home");
        }}
      />
      <Button
        style={style.Btn1}
        title="details"
        color="red"
        onPress={() => {
          navigation.navigate("Details");
          console.log("Sign Up");
        }}
      />
      <Button
        title="settings"
        onPress={() => {
          navigation.navigate("Settings");
          console.log("Sign Up");
        }}
      />
    </View>
  );
};
const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  Btn1: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    marginLeft: 10,
  },
});
export default Footer;
