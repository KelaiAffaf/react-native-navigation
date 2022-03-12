import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";

import { useNavigation } from "@react-navigation/native";
import BottomTabBar from "./src/components/BottomTab";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import Settings from "./src/screens/Seetings";
import LoggedOut from "./src/screens/LoggedOut";
export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <BottomTabBar />
      {/* <Stack.Navigator>
        <Stack.Screen name="loggedOut" component={LoggedOut} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00AFAF",
  },
});
