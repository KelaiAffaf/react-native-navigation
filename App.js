import "react-native-gesture-handler";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, Text, View } from "react-native";
import LoggedOut from "./src/screens/LoggedOut";
import Home from "./src/screens/Home";
import Details from "./src/screens/Details";
import Seetings from "./src/screens/Seetings";
import { useNavigation } from '@react-navigation/native';
export default function App() {
  const Stack = createStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="LoggedOut"
          component={LoggedOut}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Seetings}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
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
