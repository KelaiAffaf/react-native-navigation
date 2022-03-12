//Navigation
import React from "react";
import { View, Text, StyleSheet, Image, Button, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import Settings from "../screens/Settings";
import LoggedOut from "../screens/LoggedOut";

const PagesStack = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      header: null,
    },
  },
  Details: {
    screen: Details,
    navigationOptions: {
      header: null,
    },
  },
  Seetings: {
    screen: Settings,
    navigationOptions: {
      header: null,
    },
  },
  LoggedOut: {
    screen: LoggedOut,
    navigationOptions: {
      header: null,
    },
  },
});
export default PagesStack;
