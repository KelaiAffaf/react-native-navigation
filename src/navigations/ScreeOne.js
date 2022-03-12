import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Details from "../screens/Details";
import LoggedOut from "../screens/LoggedOut";
import Settings from "../screens/Seetings";

const Stack = createStackNavigator();
function ScreeOne() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="LoggedOut" component={LoggedOut} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default ScreeOne;
