import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  StatusBar,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
function Seetings() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>⚙️</Text>
      {/* <Image style={styles.image} source={require("../src/assets/Group.png")} /> */}
      {/* <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details");
          console.log("Go to Details");
        }}
      /> */}
      <Pressable
        onPress={() => {
          navigation.navigate("LoggedOut");
          console.log("Go to LoggedOut");
        }}
        style={styles.button}
      >
        <Text style={styles.PressableText}>Seetings</Text>
      </Pressable>
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
    fontSize: 120,
    fontWeight: "bold",
    color: "black",
  },
  image: {
    width: 200,
    height: 200,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "blue",
    borderRadius: 8,
    padding: 6,
    opacity: 0.8,
    marginTop: 20,
  },
  PressableText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
});

export default Seetings;
