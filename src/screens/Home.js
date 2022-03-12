//Home Screen
import react from "react";
import { View, Text, StyleSheet, Image, Button, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import BottomTab from "../components/BottomTab";
function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      {/* <Image style={styles.image} source={require("../src/assets/Group.png")} /> */}
      <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate("Details");
          console.log("Go to Details");
        }}
      />
      {/* <BottomTab /> */}
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
export default Home;
